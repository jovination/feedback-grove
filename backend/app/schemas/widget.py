from pydantic import BaseModel, Field
import uuid
from typing import Optional, Dict, Any
from datetime import datetime


class WidgetBase(BaseModel):
    name: str = Field(..., min_length=1)
    type: str = Field(..., min_length=1)
    settings: Dict[str, Any] = Field(default_factory=dict)
    theme: str = "light"


class WidgetCreate(WidgetBase):
    pass


class WidgetUpdate(BaseModel):
    name: Optional[str] = None
    settings: Optional[Dict[str, Any]] = None
    is_active: Optional[bool] = None
    theme: Optional[str] = None


class WidgetInDB(WidgetBase):
    id: uuid.UUID
    created_at: datetime
    user_id: uuid.UUID
    is_active: bool
    
    class Config:
        orm_mode = True


class Widget(WidgetInDB):
    pass


class WidgetStats(BaseModel):
    widget_id: uuid.UUID
    feedback_count: int
    last_feedback: Optional[datetime] = None