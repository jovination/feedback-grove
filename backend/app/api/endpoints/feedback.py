from typing import Any, List
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.dependencies import get_current_active_user
from app.database import get_db
from app.models.user import User

router = APIRouter()

@router.get("/", response_model=List[schemas.Feedback])
def read_feedback(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Retrieve feedback for the current user.
    """
    feedback = crud.feedback.get_by_user_id(
        db, user_id=current_user.id, skip=skip, limit=limit
    )
    return feedback

@router.post("/{username}", response_model=schemas.Feedback)
def create_feedback(
    *,
    username: str,
    db: Session = Depends(get_db),
    feedback_in: schemas.FeedbackCreate,
    request: Request,
) -> Any:
    """
    Create new feedback for a user.
    """
    user = crud.user.get_by_username(db, username=username)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found",
        )

    client_ip = request.client.host if request.client else None

    feedback = crud.feedback.create_with_recipient(
        db=db,
        obj_in=feedback_in,
        recipient_id=user.id,
        ip_address=client_ip,
    )
    return feedback

@router.delete("/{feedback_id}", response_model=schemas.Feedback)
def delete_feedback(
    *,
    feedback_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Delete specified feedback.
    """
    feedback = crud.feedback.get(db=db, id=feedback_id)
    if not feedback:
        raise HTTPException(status_code=404, detail="Feedback not found")
    if feedback.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    return crud.feedback.remove(db=db, id=feedback_id)

@router.patch("/{feedback_id}/read", response_model=schemas.Feedback)
def mark_feedback_as_read(
    *,
    feedback_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Mark the specified feedback as read.
    """
    feedback = crud.feedback.mark_as_read(
        db=db, feedback_id=feedback_id, user_id=current_user.id
    )
    if not feedback:
        raise HTTPException(status_code=404, detail="Feedback not found")
    return feedback
