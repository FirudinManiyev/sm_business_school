import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import ScrollToTopButton from "../components/ui/ScrollToTop";
import PageTransition from "../components/ui/PageTransition";

function MainLayout() {
    return (
        <div className="flex min-h-screen flex-col bg-white text-slate-900">
            <Navbar />

            <main className="flex-1">
                <PageTransition>
                    <Outlet />
                </PageTransition>
            </main>

            <Footer />

            <WhatsAppButton />
            <ScrollToTopButton />
        </div>
    );
}

export default MainLayout;