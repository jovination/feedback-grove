from typing import List, Optional
from sqlalchemy.orm import Session
import uuid

from app.models.feedback import Feedback
from app.schemas.feedback import FeedbackCreate, FeedbackUpdate
from app.crud.base import CRUDBase


class CRUDFeedback(CRUDBase[Feedback, FeedbackCreate, FeedbackUpdate]):
    def create_with_recipient(
        self, db: Session, *, obj_in: FeedbackCreate, recipient_id: uuid.UUID, ip_address: Optional[str] = None
    ) -> Feedback:
        db_obj = Feedback(
            message=obj_in.message,
            user_id=recipient_id,
            ip_address=ip_address,
            meta_data=obj_in.meta_data,
            rating=obj_in.rating,
            template=obj_in.template,
            theme=obj_in.theme,
            template_id=obj_in.templateId
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_by_user_id(
        self, db: Session, *, user_id: uuid.UUID, skip: int = 0, limit: int = 100
    ) -> List[Feedback]:
        return (
            db.query(Feedback)
            .filter(Feedback.user_id == user_id)
            .order_by(Feedback.created_at.desc())
            .offset(skip)
            .limit(limit)
            .all()
        )

    def mark_as_read(self, db: Session, *, feedback_id: uuid.UUID, user_id: uuid.UUID) -> Optional[Feedback]:
        feedback = db.query(Feedback).filter(
            Feedback.id == feedback_id, Feedback.user_id == user_id
        ).first()
        
        if feedback:
            feedback.is_read = True
            db.add(feedback)
            db.commit()
            db.refresh(feedback)
            
        return feedback


feedback = CRUDFeedback(Feedback)