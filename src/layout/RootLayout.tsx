import { Outlet } from "react-router-dom"
import { NavigationBarComp } from "../components/general_comps/NavigationBarComp"
import { FooterComp } from "../components/general_comps/FooterComp"


export const RootLayout = () => {
    
    return (
        <>
            <NavigationBarComp />
            
            <Outlet />

            <FooterComp />
        </>
    )
}