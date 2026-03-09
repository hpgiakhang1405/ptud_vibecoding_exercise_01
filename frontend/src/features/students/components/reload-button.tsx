'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ReloadButton() {
    const router = useRouter();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = async () => {
        setIsRefreshing(true);
        router.refresh();
        // Artificial delay for better UX feedback, as router.refresh is fast but visually imperceptible if instantaneous
        setTimeout(() => setIsRefreshing(false), 500);
    };

    return (
        <Button variant="outline" className="px-4 h-10" onClick={handleRefresh} disabled={isRefreshing}>
            <RefreshCw className={`mr-2 h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            Reload Data
        </Button>
    );
}
