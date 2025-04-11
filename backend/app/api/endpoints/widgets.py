from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, schemas
from app.api.dependencies import get_current_active_user
from app.database import get_db
from app.models.user import User

router = APIRouter()


@router.get("/", response_model=List[schemas.Widget])
def read_widgets(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Retrieve widgets for current user.
    """
    widgets = crud.widget.get_by_user_id(
        db, user_id=current_user.id, skip=skip, limit=limit
    )
    return widgets


@router.post("/", response_model=schemas.Widget)
def create_widget(
    *,
    db: Session = Depends(get_db),
    widget_in: schemas.WidgetCreate,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Create new widget.
    """
    widget = crud.widget.create_with_user(
        db=db, obj_in=widget_in, user_id=current_user.id
    )
    return widget


@router.put("/{widget_id}", response_model=schemas.Widget)
def update_widget(
    *,
    widget_id: str,
    db: Session = Depends(get_db),
    widget_in: schemas.WidgetUpdate,
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Update a widget.
    """
    widget = crud.widget.get(db=db, id=widget_id)
    if not widget:
        raise HTTPException(status_code=404, detail="Widget not found")
    if widget.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    widget = crud.widget.update(db=db, db_obj=widget, obj_in=widget_in)
    return widget


@router.delete("/{widget_id}", response_model=schemas.Widget)
def delete_widget(
    *,
    widget_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Delete a widget.
    """
    widget = crud.widget.get(db=db, id=widget_id)
    if not widget:
        raise HTTPException(status_code=404, detail="Widget not found")
    if widget.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    widget = crud.widget.remove(db=db, id=widget_id)
    return widget


@router.get("/{widget_id}/stats", response_model=schemas.WidgetStats)
def get_widget_stats(
    *,
    widget_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_user),
) -> Any:
    """
    Get statistics for a widget.
    """
    widget = crud.widget.get(db=db, id=widget_id)
    if not widget:
        raise HTTPException(status_code=404, detail="Widget not found")
    if widget.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not enough permissions")
    
    stats = crud.widget.get_stats(db=db, widget_id=widget_id)
    if not stats:
        raise HTTPException(status_code=404, detail="Widget stats not found")
    
    return stats