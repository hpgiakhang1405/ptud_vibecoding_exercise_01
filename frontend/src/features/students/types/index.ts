export interface Student {
    student_id: string;
    name: string;
    birth_year: number;
    major: string;
    gpa: number;
}

export interface StudentCreate {
    student_id: string;
    name: string;
    birth_year: number;
    major: string;
    gpa: number;
}

export interface StudentUpdate {
    name: string;
    birth_year: number;
    major: string;
    gpa: number;
}
