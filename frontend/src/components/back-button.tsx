'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackButtonProps {
    href: string;
    label: string;
    className?: string;
}

export function BackButton({ href, label, className }: BackButtonProps) {
    return (
        <Link
            href={href}
            className={cn(
                'mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground',
                className,
            )}
        >
            <ArrowLeft className="h-4 w-4" />
            {label}
        </Link>
    );
}
