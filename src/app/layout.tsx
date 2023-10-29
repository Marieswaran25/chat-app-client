import './globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Task Manager',
    description: 'Mangage tasks and track your activities day-to-day',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={'rootyy'}>{children}</body>
        </html>
    );
}
