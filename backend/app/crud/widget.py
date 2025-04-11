from typing import List, Optional, Dict, Any
from sqlalchemy.orm import Session
import uuid
from sqlalchemy import func
from datetime import datetime

from app.models.widget import Widget
from app.models.feedback import Feedback
from app.schemas.widget import WidgetCreate, WidgetUpdate
from app.crud.base import CRUDBase


class CRUDWidget(CRUDBase[Widget, WidgetCreate, WidgetUpdate]):
    def create_with_user(
        self, db: Session, *, obj_in: WidgetCreate, user_id: uuid.UUID
    ) -> Widget:
        db_obj = Widget(
            name=obj_in.name,
            type=obj_in.type,
            user_id=user_id,
            settings=obj_in.settings,
            theme=obj_in.theme,
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def get_by_user_id(
        self, db: Session, *, user_id: uuid.UUID, skip: int = 0, limit: int = 100
    ) -> List[Widget]:
        return (
            db.query(Widget)
            .filter(Widget.user_id == user_id)
            .offset(skip)
            .limit(limit)
            .all()
        )
        
    def get_stats(self, db: Session, *, widget_id: uuid.UUID) -> Dict[str, Any]:
        # This is a placeholder for actual widget stats
        # In a real implementation, you would track feedback related to specific widgets
        # Here we're just returning overall feedback stats for the widget's owner
        widget = db.query(Widget).filter(Widget.id == widget_id).first()
        
        if not widget:
            return None
            
        feedback_count = db.query(func.count(Feedback.id)).filter(
            Feedback.user_id == widget.user_id
        ).scalar()
        
        last_feedback = db.query(Feedback).filter(
            Feedback.user_id == widget.user_id
        ).order_by(Feedback.created_at.desc()).first()
        
        last_feedback_time = last_feedback.created_at if last_feedback else None
        
        return {
            "widget_id": widget_id,
            "feedback_count": feedback_count,
            "last_feedback": last_feedback_time
        }


widget = CRUDWidget(Widget)