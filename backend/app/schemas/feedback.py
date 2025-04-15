from pydantic import BaseModel, Field
import uuid
from typing import Optional, Dict, Any
from datetime import datetime


class FeedbackBase(BaseModel):
    message: str = Field(..., min_length=1)
    rating: Optional[int] = None
    template: Optional[str] = None
    theme: Optional[str] = None
    templateId: Optional[str] = None


class FeedbackCreate(FeedbackBase):
    meta_data: Optional[Dict[str, Any]] = None


class FeedbackUpdate(BaseModel):
    is_read: bool


class FeedbackInDB(FeedbackBase):
    id: uuid.UUID
    created_at: datetime
    user_id: uuid.UUID
    is_read: bool
    ip_address: Optional[str] = None
    meta_data: Optional[Dict[str, Any]] = None
    
    class Config:
        orm_mode = True


class Feedback(FeedbackInDB):
    pass