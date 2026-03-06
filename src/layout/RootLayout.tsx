import { Outlet } from "react-router-dom"
import Navbar from "../components/layout_comps/Navbar"
import Footer from "../components/layout_comps/Footer"


export const RootLayout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}