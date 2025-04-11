from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.utils.auth import get_current_user
from app.database import get_db
from app.models.user import User


def get_current_active_user(
    current_user: User = Depends(get_current_user),
) -> User:
    return current_user


def get_current_premium_user(
    current_user: User = Depends(get_current_user),
) -> User:
    if not current_user.is_premium:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="The user doesn't have enough privileges",
        )
    return current_user