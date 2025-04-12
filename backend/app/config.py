from pydantic_settings import BaseSettings
from pydantic import PostgresDsn
from typing import Optional
import secrets
import os  # Need this for environment variables


class Settings(BaseSettings):
    PROJECT_NAME: str = "FeedbackGrove"
    API_V1_STR: str = "/api"
    SECRET_KEY: str = secrets.token_urlsafe(32)
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    DATABASE_URL: PostgresDsn
    CORS_ORIGINS: list[str] = ["http://localhost:3000", "http://localhost:8000", "http://localhost:8080"]
    
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()