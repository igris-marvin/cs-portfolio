import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/layout_comps/Navbar"
import Footer from "../components/layout_comps/Footer"
import { useData } from "../context/data-context";

export const RootLayout = () => {
    const { isLoading } = useData();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (isLoading) {
        return (
            <main className="flex min-h-screen items-center justify-center" role="status" aria-live="polite">
                <p className="text-lg">Loading portfolio...</p>
            </main>
        );
    }

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}