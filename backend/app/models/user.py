from sqlalchemy import Boolean, Column, String, DateTime
from sqlalchemy.orm import relationship

from app.models.base import BaseModel


class User(BaseModel):
    __tablename__ = "users"

    email = Column(String, unique=True, index=True, nullable=False)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_premium = Column(Boolean, default=False)
    last_login = Column(DateTime, nullable=True)
    profile_image = Column(String, nullable=True)
    
    # Relationships
    feedback_received = relationship("Feedback", back_populates="recipient", foreign_keys="Feedback.user_id")
    widgets = relationship("Widget", back_populates="user")