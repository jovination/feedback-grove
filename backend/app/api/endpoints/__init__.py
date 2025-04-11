
# Import all endpoint routers here
from app.api.endpoints import auth
from app.api.endpoints import users
from app.api.endpoints import feedback
from app.api.endpoints import widgets

__all__ = ["auth", "users", "feedback", "widgets"]
