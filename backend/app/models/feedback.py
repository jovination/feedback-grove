from sqlalchemy import Boolean, Column, String, Text, ForeignKey, JSON, Integer
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.models.base import BaseModel

class Feedback(BaseModel):
    __tablename__ = "feedback"

    message = Column(Text, nullable=False)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    is_read = Column(Boolean, default=False)
    ip_address = Column(String, nullable=True)
    meta_data = Column(JSON, nullable=True)  # Changed from metadata to meta_data
    rating = Column(Integer, nullable=True)
    template = Column(String, nullable=True)
    theme = Column(String, nullable=True)
    template_id = Column(String, nullable=True)
    
    # Relationships
    recipient = relationship("User", back_populates="feedback_received", foreign_keys=[user_id])
