import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { BackButton } from '@/components/back-button';
import { StudentForm } from '@/features/students/components/student-form';
import { fetchStudent } from '@/features/students/api/student-api';

interface Props {
    params: Promise<{ id: string }>;
}

export default async function EditStudentPage({ params }: Props) {
    const p = await params;
    const studentId = p.id;

    let student;
    try {
        student = await fetchStudent(decodeURIComponent(studentId));
    } catch {
        notFound();
    }

    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 sm:py-8">
            <BackButton href="/" label="Back to Student List" />
            <StudentForm mode="edit" initialData={student} />
        </div>
    );
}
