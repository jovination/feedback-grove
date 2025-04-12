from datetime import datetime, timedelta
from typing import Any, Annotated

from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm, HTTPBearer
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.dependencies import get_current_active_user, get_db
from app.config import settings
from app.models.user import User
from app.utils.auth import (
    create_access_token,
    verify_password
)

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
    Validates email uniqueness and username availability.
    """
    if crud.user.get_by_email(db, email=user_in.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    if user_in.username and crud.user.get_by_username(db, username=user_in.username):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already taken",
        )

    db_user = crud.user.create(db=db, obj_in=user_in)
    return db_user


@router.post("/login", response_model=schemas.Token)
def login_access_token(
    db: Session = Depends(get_db),
    form_data: OAuth2PasswordRequestForm = Depends(),
) -> Any:
    """
    Get the JWT for a user with data from OAuth2 request form body.
    """
    user = crud.user.authenticate(
        db, email=form_data.username, password=form_data.password
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    if not getattr(user, 'is_active', True):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Account is inactive"
        )

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    # Update last login time
    user.last_login = datetime.utcnow()
    db.commit()
    db.refresh(user)

    return {
        "access_token": create_access_token(
            subject=str(user.id), expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }


@router.post("/logout")
def logout() -> Any:
    """
    Logout endpoint (frontend should remove token).
    Future: Could implement token blacklisting here.
    """
    return {"message": "Successfully logged out"}


@router.get("/me", response_model=schemas.User)
def read_users_me(
    current_user: Annotated[User, Depends(get_current_active_user)]
) -> Any:
    """
    Get current authenticated user details.
    """
    return current_user
