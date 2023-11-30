import React from 'react';
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata: Metadata = {
    title: 'Admin'
}

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full bg-gray-400">
            <body className="h-full p-6">
                <section>
                    {/* Include shared UI here e.g. a header or sidebar */}
                    <nav></nav>

                    {children}
                </section>
            </body>
        </html>
        
    )
}