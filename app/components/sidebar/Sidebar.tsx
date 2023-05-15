import DesktopSidebar from "@/app/components/sidebar/DesktopSidebar";
import MobileFooter from "@/app/components/sidebar/MobileFooter";
import getCurrentUser from "@/app/api/actions/getCurrentUser";

async function Sidebar ({children}: { children: React.ReactNode }) {
    const currentUser = await getCurrentUser();
    return (
        <div className="h-full">
            <main className="lg:pl-20 h-full">
                <DesktopSidebar currentUser={currentUser!}/>
                <MobileFooter />
                {children}
            </main>
        </div>
    );
};

export default Sidebar;