from datetime import datetime, timedelta
from typing import Any, Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, HTTPBearer
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.dependencies import get_current_active_user, get_db
from app.config import settings
from app.models.user import User
from app.utils.auth import create_access_token, get_password_hash

router = APIRouter()
security = HTTPBearer()

@router.post("/register", response_model=schemas.User, status_code=status.HTTP_201_CREATED)
def register_user(
    *,
    db: Session = Depends(get_db),
    user_in: schemas.UserCreate,
) -> Any:
    """
    Register a new user with email and optional username.
    Validates email and username uniqueness.
    """
    # Check if email exists
    if crud.user.get_by_email(db, email=user_in.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    # Check username if provided (optional)
    if user_in.username and crud.user.get_by_username(db, username=user_in.username):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken",
        )

    # Hash password and create user
    hashed_password = get_password_hash(user_in.password)
    db_user = crud.user.create_with_hashed_password(
        db,
        user_in=user_in,
        hashed_password=hashed_password,
        is_active=True,  # Auto-activate without email verification
    )
    return db_user

@router.post("/login", response_model=schemas.Token)
def login_access_token(
    db: Session = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends(),
) -> Any:
    """
    Get a JWT for a user via data from the OAuth2 request form.
    Uses email and password for authentication.
    """
    # Authenticate using email (supplied as username) and password
    user = crud.user.authenticate(
        db, email=form_data.username, password=form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Check if the account is active
    if not getattr(user, 'is_active', True):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Account is inactive",
        )

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    # Update last login time
    try:
        user.last_login = datetime.utcnow()
        db.commit()
        db.refresh(user)
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to update last login time",
        )

    return {
        "access_token": create_access_token(
            subject=str(user.id), expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }

@router.post("/logout")
def logout(
    current_user: Annotated[User, Depends(get_current_active_user)]
) -> Any:
    """
    Invalidate the current user's session (or token).
    Future implementation: token blacklisting or active session tracking.
    """
    return {"message": "Successfully logged out"}

@router.get("/me", response_model=schemas.User)
def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
) -> Any:
    """
    Get details for the current authenticated user.
    """
    return current_user
