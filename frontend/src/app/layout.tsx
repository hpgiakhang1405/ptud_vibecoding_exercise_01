import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import { Header } from '@/components/header';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
    variable: '--font-sans',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Student Management System',
    description: 'Manage student records — Create, Read, Update, Delete',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jakarta.variable} font-sans antialiased text-foreground selection:bg-primary/30`}>
                {/* Ambient Static Elements */}
                <div className="fixed inset-0 -z-20 bg-slate-50" />
                <div className="fixed top-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[100px] mix-blend-multiply" />
                <div className="fixed bottom-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-emerald-400/10 blur-[120px] mix-blend-multiply" />
                <div className="fixed top-1/2 left-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/10 blur-[120px] mix-blend-multiply" />

                <Header />
                <main className="min-h-screen">{children}</main>

                <Toaster
                    position="top-right"
                    richColors
                    toastOptions={{
                        style: {
                            fontFamily: 'var(--font-sans)',
                        },
                    }}
                />
            </body>
        </html>
    );
}
