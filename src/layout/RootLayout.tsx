import { Outlet } from "react-router-dom"
import Navbar from "../components/layout_comps/Navbar"
import Footer from "../components/layout_comps/Footer"
import { useData } from "../context/data-context";

export const RootLayout = () => {
    const { isLoading } = useData();

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