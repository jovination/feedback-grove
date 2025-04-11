from datetime import timedelta
from typing import Any

from fastapi import APIRouter, Body, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.dependencies import get_current_active_user
from app.config import settings
from app.database import get_db
from app.utils.auth import create_access_token
from app.models.user import User

router = APIRouter()


@router.post("/register", response_model=schemas.User)
def register_user(
    *,
    db: Session = Depends(get_db),
    user_in: schemas.UserCreate,
) -> Any:
    """
    Register a new user.
    """
    user = crud.user.get_by_email(db, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="A user with this email already exists in the system.",
        )
    
    username_exists = crud.user.get_by_username(db, username=user_in.username)
    if username_exists:
        raise HTTPException(
            status_code=400,
            detail="The username is already taken.",
        )
        
    user = crud.user.create(db, obj_in=user_in)
    return user


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
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    
    # Update last login time
    crud.user.update_last_login(db, user_id=str(user.id))
    
    return {
        "access_token": create_access_token(
            subject=str(user.id), expires_delta=access_token_expires
        ),
        "token_type": "bearer",
    }


@router.post("/logout")
def logout() -> Any:
    """
    Logout - Frontend will handle token removal
    """
    return {"msg": "Successfully logged out"}


@router.get("/me", response_model=schemas.User)
def read_users_me(
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Get current user.
    """
    return current_user