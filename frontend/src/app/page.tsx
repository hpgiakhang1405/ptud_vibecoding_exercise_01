import Link from 'next/link';
import { Plus } from 'lucide-react';
import { StudentTable } from '@/features/students/components/student-table';
import { Button } from '@/components/ui/button';
import { fetchStudents } from '@/features/students/api/student-api';

import { ReloadButton } from '@/features/students/components/reload-button';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
    const students = await fetchStudents();

    return (
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight font-heading">Student Database</h1>
                    <p className="mt-2 text-base text-muted-foreground max-w-xl leading-relaxed">
                        Manage all student records in one centralized, secure location.
                        {students.length > 0 && (
                            <span className="ml-3 inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary shadow-[0_0_10px_rgba(var(--color-primary),0.1)]">
                                {students.length} student{students.length !== 1 ? 's' : ''}
                            </span>
                        )}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <ReloadButton />
                    <Button asChild className="px-5 h-10">
                        <Link href="/students/new">
                            <Plus className="mr-2 h-4 w-4" />
                            Add Student
                        </Link>
                    </Button>
                </div>
            </div>
            <StudentTable students={students} />
        </div>
    );
}
