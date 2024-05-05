import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
    return (
        <div className="p-6">
            <Link href="/teacher/create">
                <Button>

                </Button>
            </Link>
        </div>
    );
}