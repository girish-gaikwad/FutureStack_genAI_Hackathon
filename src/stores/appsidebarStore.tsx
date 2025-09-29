import { BookOpen, Grid, Home, Layers } from 'lucide-react';
import { create } from 'zustand';

// Define types for chapters and sidebar items
interface Chapter {
    name: string;
    description: string;
}

interface SidebarItem {
    title: string;
    icon?: React.ReactNode;
    url: string;
    badge?: string;
    items?: { title: string; url: string; badge?: string }[];
}

// Define the app state interface
interface AppState {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    expandedItems: { [key: string]: boolean };
    toggleExpanded: (item: string) => void;
    chapters: Chapter[];
    sidebarItems: SidebarItem[];
    setChapters: (chapters: Chapter[]) => void;
}

// Sample data for chapters and sidebar navigation
const initialChapters: Chapter[] = [
    { name: "CBSE", description: "Central Board of Secondary Education" },
    { name: "Java Exam", description: "Java17 examination" },
];

const initialSidebarItems: SidebarItem[] = [
    {
        title: "Dashboard",
        icon: <Home />,
        url: "/app",
    },
    {
        title: "Apps",
        icon: <Grid />,
        badge: "2",
        url: "/apps",
        items: [
            { title: "All Apps", url: "/apps/all" },
            { title: "Recent", url: "/apps/recent" },
            { title: "Updates", url: "/apps/updates", badge: "2" },
            { title: "Installed", url: "/apps/installed" },
        ],
    },
    {
        title: "Projects",
        icon: <Layers />,
        badge: "4",
        url: "/projects",
        items: [
            { title: "Active Projects", url: "/projects/active", badge: "4" },
            { title: "Archived", url: "/projects/archived" },
            { title: "Templates", url: "/projects/templates" },
        ],
    },
    {
        title: "Learn",
        icon: <BookOpen />,
        url: "/learn",
        items: [
            { title: "Tutorials", url: "/learn/tutorials" },
            { title: "Courses", url: "/learn/courses" },
            { title: "Webinars", url: "/learn/webinars" },
            { title: "Resources", url: "/learn/resources" },
        ],
    },
    {
        title: "Question the Book",
        icon: <BookOpen />,
        url: "/app/question-book",
    },
];

export const useAppStore = create<AppState>((set, get) => ({
    sidebarOpen: true,
    setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
    mobileMenuOpen: false,
    setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),
    expandedItems: {},
    toggleExpanded: (item: string) =>
        set((state) => ({
            expandedItems: {
                ...state.expandedItems,
                [item]: !state.expandedItems[item],
            },
        })),
    chapters: initialChapters,
    sidebarItems: initialSidebarItems,
    setChapters: (chapters: Chapter[]) => set({ chapters }),
}));