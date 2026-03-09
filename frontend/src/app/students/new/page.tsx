import { BackButton } from '@/components/back-button';
import { StudentForm } from '@/features/students/components/student-form';

export default function NewStudentPage() {
    return (
        <div className="mx-auto max-w-2xl px-4 sm:px-6 py-6 sm:py-8">
            <BackButton href="/" label="Back to Student List" />
            <StudentForm mode="create" />
        </div>
    );
}
