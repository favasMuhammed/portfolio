import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';
import Footer from '../components/Footer';
// We need to check if CustomCursor should be here. It's a client component.
import CustomCursor from '../components/CustomCursor';

import { inter, jetbrainsMono, spaceMono, spaceGrotesk } from './fonts';

export const metadata = {
    title: 'Favas | Full Stack Developer',
    description: 'Portfolio of Favas, a Full Stack Developer specializing in React, Node.js, and Python.',
    icons: {
        icon: '/portfolio/favicon.svg',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${jetbrainsMono.variable} ${spaceMono.variable} ${spaceGrotesk.variable} bg-dark text-text font-mono antialiased overflow-x-hidden selection:bg-primary selection:text-dark`} suppressHydrationWarning>
                <CustomCursor />
                <ScrollProgress />
                <Navbar />
                <main className="min-h-screen relative z-10">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
