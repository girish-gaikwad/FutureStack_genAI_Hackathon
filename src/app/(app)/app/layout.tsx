"use client";
import Sidebar from '@/components/app/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { useAppStore } from '@/stores/appsidebarStore';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const { sidebarOpen } = useAppStore();
    return (

        <div className="relative min-h-screen overflow-hidden bg-background">
            <Sidebar />
            {/* Main Content */}
            <div className={cn("min-h-screen transition-all duration-300 ease-in-out", sidebarOpen ? "md:pl-64" : "md:pl-0")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>            </div>
        </div>
    );
}