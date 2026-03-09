from sqlalchemy import Column, String, Integer, Float

from app.db.database import Base


class Student(Base):
    __tablename__ = "students"

    student_id = Column(String(50), primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    birth_year = Column(Integer, nullable=False)
    major = Column(String(255), nullable=False)
    gpa = Column(Float, nullable=False)
