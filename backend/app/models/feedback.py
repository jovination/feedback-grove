from sqlalchemy import Boolean, Column, String, Text, ForeignKey, JSON
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.models.base import BaseModel

class Feedback(BaseModel):
    __tablename__ = "feedback"

    message = Column(Text, nullable=False)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id"), nullable=False)
    is_read = Column(Boolean, default=False)
    ip_address = Column(String, nullable=True)
    meta_data = Column(JSON, nullable=True)  # Renamed from 'metadata'
    
    # Relationships
    recipient = relationship("User", back_populates="feedback_received", foreign_keys=[user_id])
