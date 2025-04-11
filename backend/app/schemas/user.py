from pydantic import BaseModel, EmailStr, Field, validator
import uuid
from typing import Optional
from datetime import datetime


class UserBase(BaseModel):
    email: EmailStr
    username: str


class UserCreate(UserBase):
    password: str
    
    @validator('username')
    def username_must_be_valid(cls, v):
        if len(v) < 3:
            raise ValueError('Username must be at least 3 characters long')
        if not v.isalnum():
            raise ValueError('Username must be alphanumeric')
        return v
    
    @validator('password')
    def password_must_be_valid(cls, v):
        if len(v) < 8:
            raise ValueError('Password must be at least 8 characters long')
        return v


class UserUpdate(BaseModel):
    email: Optional[EmailStr] = None
    profile_image: Optional[str] = None


class UserPremiumUpdate(BaseModel):
    is_premium: bool


class UserInDB(UserBase):
    id: uuid.UUID
    is_premium: bool
    created_at: datetime
    last_login: Optional[datetime] = None
    profile_image: Optional[str] = None
    
    class Config:
        orm_mode = True


class User(UserInDB):
    pass