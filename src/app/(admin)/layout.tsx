import React from 'react';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import Nav from './dashboard/nav';

export const metadata: Metadata = {
    title: 'Admin'
}

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full bg-gray-100">
            <body className="h-full p-6">
                <section>
                    <Suspense>
                        <Nav />
                    </Suspense>

                    {children}
                </section>
            </body>
        </html>

    )
}