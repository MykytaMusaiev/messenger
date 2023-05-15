import {ReactNode} from "react";
import Sidebar from "@/app/components/sidebar/Sidebar";

export default async function UsersLayour(
    {children}: { children: ReactNode }
) {
    return (
        //@ts-expect-error Server Component
        <Sidebar>
            <div className="h-full">
                {children}
            </div>
        </Sidebar>
    )
}