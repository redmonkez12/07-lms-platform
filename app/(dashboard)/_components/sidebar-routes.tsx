"use client";

import { Compass, Layout } from "lucide-react";
import { SidebarItem } from "@/app/(dashboard)/_components/sidebar-item";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: "/",
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search",
    },
];

export function SidebarRoutes() {
    return (
        <div className="flex flex-col w-full">
            {guestRoutes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    );
}