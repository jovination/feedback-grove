from sqlalchemy import Boolean, Column, String, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.models.base import BaseModel


class Widget(BaseModel):
    __tablename__ = "widgets"

    name = Column(String, nullable=False)
    type = Column(String, nullable=False)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    settings = Column(JSON, nullable=False, default={})
    is_active = Column(Boolean, default=True)
    theme = Column(String, default="light")
    
    # Relationships
    user = relationship("User", back_populates="widgets")