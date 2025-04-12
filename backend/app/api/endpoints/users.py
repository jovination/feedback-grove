from typing import Any
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.dependencies import get_current_active_user
from app.database import get_db
from app.models.user import User

router = APIRouter()

@router.get("/{username}", response_model=schemas.User)
def read_user_by_username(
    username: str,
    db: Session = Depends(get_db),
) -> Any:
    """
    Get a specific user by username.
    """
    user = crud.user.get_by_username(db, username=username)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )
    return user

@router.put("/profile", response_model=schemas.User)
def update_user_profile(
    *,
    db: Session = Depends(get_db),
    user_in: schemas.UserUpdate,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update the current user's profile.
    """
    if user_in.email and user_in.email != current_user.email:
        if crud.user.get_by_email(db, email=user_in.email):
            raise HTTPException(
                status_code=400,
                detail="Email already registered",
            )

    user = crud.user.update(db, db_obj=current_user, obj_in=user_in)
    return user

@router.patch("/premium", response_model=schemas.User)
def update_premium_status(
    *,
    db: Session = Depends(get_db),
    premium_data: schemas.UserPremiumUpdate,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update the premium status of the current user.
    """
    user = crud.user.update_premium_status(
        db, db_obj=current_user, is_premium=premium_data.is_premium
    )
    return user
