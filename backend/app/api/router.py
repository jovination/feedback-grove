from fastapi import APIRouter

from app.api.endpoints import auth, users, feedback, widgets

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["authentication"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(feedback.router, prefix="/feedback", tags=["feedback"])
api_router.include_router(widgets.router, prefix="/widgets", tags=["widgets"])