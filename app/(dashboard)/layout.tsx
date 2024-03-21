import { PropsWithChildren } from "react";
import { Sidebar } from "@/app/(dashboard)/_components/sidebar";

export default function DashboardLayout({ children }: PropsWithChildren) {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <Sidebar/>
            </div>
            {children}
        </div>
    );
}