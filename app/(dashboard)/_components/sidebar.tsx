import { Logo } from "@/app/(dashboard)/_components/logo";
import { SidebarRoutes } from "@/app/(dashboard)/_components/sidebar-routes";

export function Sidebar() {
    return (
        <div className="h-full border-r flex flex-col
            overflow-y-auto bg-white shadown-sm
        ">
            <div className="p-6">
                <Logo/>
            </div>
            <div className="flex flex-col w-full">
                <SidebarRoutes/>
            </div>
        </div>
    );
}