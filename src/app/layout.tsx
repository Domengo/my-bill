import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import {Suspense} from 'react';
import Nav from '@/components/landing/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:{
    template: '%s | Bill Tracker',
    default: 'Bill Tracker',
  },
  description: 'Water Bill Tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Suspense>
        <Nav />
      </Suspense>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
