'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface DeleteDialogProps {
    open: boolean;
    studentName: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export function DeleteDialog({ open, studentName, onConfirm, onCancel }: DeleteDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={(isOpen) => !isOpen && onCancel()}>
            <AlertDialogContent className="border-border/50 bg-card/70 backdrop-blur-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
                <AlertDialogHeader className="relative">
                    <AlertDialogTitle className="text-2xl font-bold font-heading">Delete Record</AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground/80 mt-2">
                        Are you sure you want to delete{' '}
                        <strong className="text-foreground tracking-wide font-medium">{studentName}</strong>? This
                        action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm} variant="destructive">
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
