from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.schemas.student import StudentCreate, StudentUpdate, StudentResponse
from app.crud import crud_student

router = APIRouter(prefix="/students", tags=["students"])


@router.get("", response_model=list[StudentResponse])
def list_students(
    skip: int = Query(0, ge=0, description="Number of records to skip"),
    limit: int = Query(
        100, ge=1, le=1000, description="Maximum number of records to return"
    ),
    db: Session = Depends(get_db),
):
    return crud_student.get_students(db, skip=skip, limit=limit)


@router.get("/{student_id}", response_model=StudentResponse)
def read_student(student_id: str, db: Session = Depends(get_db)):
    student = crud_student.get_student(db, student_id)
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student


@router.post("", response_model=StudentResponse, status_code=201)
def create_student(student: StudentCreate, db: Session = Depends(get_db)):
    existing = crud_student.get_student(db, student.student_id)
    if existing:
        raise HTTPException(
            status_code=409,
            detail=f"Student ID '{student.student_id}' already exists",
        )
    return crud_student.create_student(db, student)


@router.put("/{student_id}", response_model=StudentResponse)
def update_student(
    student_id: str, student: StudentUpdate, db: Session = Depends(get_db)
):
    updated = crud_student.update_student(db, student_id, student)
    if updated is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return updated


@router.delete("/{student_id}", status_code=204)
def delete_student(student_id: str, db: Session = Depends(get_db)):
    success = crud_student.delete_student(db, student_id)
    if not success:
        raise HTTPException(status_code=404, detail="Student not found")
