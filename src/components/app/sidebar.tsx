"use client"
import { cn } from '@/lib/utils'
import { BookOpen, ChevronDown, Grid, Home, Layers, Search, Settings, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ScrollArea } from '../ui/scroll-area'
import { ChapterSwitcher } from './chapter'
import { useAppStore } from '@/stores/appsidebarStore'

interface Chapter {
    name: string;
    description: string;
}

function Sidebar() {
    const pathname = usePathname()

    const { chapters, sidebarItems, setChapters, mobileMenuOpen, setMobileMenuOpen, expandedItems, toggleExpanded, sidebarOpen } = useAppStore();

    const handleCreateChapter = (chapter: Chapter) => {
        setChapters([...chapters, chapter])
    }

    const isActiveLink = (url: string, hasItems?: boolean) => {
        if (hasItems) {
            return pathname.startsWith(url)
        }
        return pathname === url
    }

    const renderNavItem = (item: typeof sidebarItems[0]) => {
        const isActive = isActiveLink(item.url, !!item.items)
        const hasExpandedChildren = item.items?.some(subItem => pathname === subItem.url)

        return (
            <div key={item.title} className="mb-1">
                {item.items ? (
                    <button
                        className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                            isActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                        onClick={() => toggleExpanded(item.title)}
                    >
                        <div className="flex items-center gap-3">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            {item.badge && (
                                <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs">
                                    {item.badge}
                                </Badge>
                            )}
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 transition-transform",
                                    expandedItems[item.title] || hasExpandedChildren ? "rotate-180" : "",
                                )}
                            />
                        </div>
                    </button>
                ) : (
                    <Link
                        href={item.url}
                        className={cn(
                            "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                            isActive ? "bg-primary/10 text-primary" : "hover:bg-muted",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <div className="flex items-center gap-3">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {item.badge && (
                            <Badge variant="outline" className="rounded-full px-2 py-0.5 text-xs">
                                {item.badge}
                            </Badge>
                        )}
                    </Link>
                )}

                {item.items && (expandedItems[item.title] || hasExpandedChildren) && (
                    <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                        {item.items.map((subItem) => {
                            const isSubItemActive = pathname === subItem.url
                            return (
                                <Link
                                    key={subItem.title}
                                    href={subItem.url}
                                    className={cn(
                                        "flex items-center justify-between rounded-2xl px-3 py-2 text-sm",
                                        isSubItemActive
                                            ? "bg-primary/10 text-primary font-medium"
                                            : "hover:bg-muted",
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {subItem.title}
                                    {subItem.badge && (
                                        <Badge variant="outline" className="ml-auto rounded-full px-2 py-0.5 text-xs">
                                            {subItem.badge}
                                        </Badge>
                                    )}
                                </Link>
                            )
                        })}
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
            )}

            {/* Sidebar - Mobile */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
                    mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
                )}
            >
                <div className="flex h-full flex-col border-r">
                    <div className="p-4">
                        <div className="flex flex-col items-center mb-3">
                            <div className='flex w-full items-center justify-between gap-6'>
                                <Image src="/logo.png" alt="Logo" className='m2' width={40} height={40} />
                                <div>
                                    <h2 className="font-semibold">{process.env.NEXT_PUBLIC_Project || "Default Project"}</h2>
                                    <p className="text-xs text-muted-foreground">AI Tutor</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                                    <X className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                        <ChapterSwitcher
                            chapters={chapters}
                            defaultChapter="CBSE"
                            onCreateChapter={handleCreateChapter}
                        />
                    </div>

                    <div className="px-3 py-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search..." className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2" />
                        </div>
                    </div>

                    <ScrollArea className="flex-1 px-3 py-2">
                        <div className="space-y-1">
                            {sidebarItems.map(renderNavItem)}
                        </div>
                    </ScrollArea>

                    <div className="border-t p-3">
                        <div className="space-y-1">
                            <Link
                                href="/app/settings"
                                className={cn(
                                    "flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium",
                                    pathname === "/app/settings" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Settings className="h-5 w-5" />
                                <span>Settings</span>
                            </Link>
                            <Link
                                href="/app/profile"
                                className={cn(
                                    "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                                    pathname === "/app/profile" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <span>John Doe</span>
                                </div>
                                <Badge variant="outline" className="ml-auto">
                                    Pro
                                </Badge>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar - Desktop */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full",
                )}
            >
                <div className="flex h-full flex-col">
                    <div className="p-4">
                        <div className="flex flex-col items-center mb-3">
                            <div className='flex w-full items-center justify-start gap-6'>
                                <Image src="/logo.png" alt="Logo" className='m2' width={40} height={40} />
                                <div>
                                    <h2 className="font-semibold">{process.env.NEXT_PUBLIC_Project || "Default Project"}</h2>
                                    <p className="text-xs text-muted-foreground">AI Education Helper</p>
                                </div>
                            </div>
                        </div>
                        <ChapterSwitcher
                            chapters={chapters}
                            defaultChapter="CBSE"
                            onCreateChapter={handleCreateChapter}
                        />
                    </div>

                    <div className="px-3 py-2">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input type="search" placeholder="Search..." className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2" />
                        </div>
                    </div>

                    <ScrollArea className="flex-1 px-3 py-2">
                        <div className="space-y-1">
                            {sidebarItems.map(renderNavItem)}
                        </div>
                    </ScrollArea>

                    <div className="border-t p-3">
                        <div className="space-y-1">
                            <Link
                                href="/app/settings"
                                className={cn(
                                    "flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium",
                                    pathname === "/app/settings" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                )}
                            >
                                <Settings className="h-5 w-5" />
                                <span>Settings</span>
                            </Link>
                            <Link
                                href="/app/profile"
                                className={cn(
                                    "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                                    pathname === "/app/profile" ? "bg-primary/10 text-primary" : "hover:bg-muted"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <span>John Doe</span>
                                </div>
                                <Badge variant="outline" className="ml-auto">
                                    Pro
                                </Badge>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar