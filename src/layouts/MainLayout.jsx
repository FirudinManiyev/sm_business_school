import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import ScrollToTopButton from "../components/ui/ScrollToTop";

function MainLayout() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen">
                <Outlet />
            </main>

            <Footer />

            <WhatsAppButton />
            <ScrollToTopButton />
        </>
    );
}

export default MainLayout;