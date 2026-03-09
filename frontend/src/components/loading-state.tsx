'use client';

import { RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LoadingStateProps {
    message?: string;
    className?: string;
}

export function LoadingState({ message = 'Loading...', className }: LoadingStateProps) {
    return (
        <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className={cn(
                'flex items-center justify-center py-32 rounded-lg border border-border/50 bg-card/50 backdrop-blur-md',
                className,
            )}
        >
            <div className="flex flex-col items-center gap-4">
                <div className="relative flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                    <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping opacity-50"></div>
                    <RefreshCw className="h-5 w-5 animate-spin text-primary" />
                </div>
                <p className="text-sm font-medium text-muted-foreground tracking-wide">{message}</p>
            </div>
        </motion.div>
    );
}
