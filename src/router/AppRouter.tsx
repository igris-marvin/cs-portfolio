import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "../layout/RootLayout"
import { HomePage } from "../pages/HomePage"
import { ProjectsPage } from "../pages/ProjectsPage"
import { ContactPage } from "../pages/ContactPage"
import { AboutPage } from "../pages/AboutPage"


export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<RootLayout />}
            >

                <Route path="/" element={<HomePage />}/>
                <Route path="/projects" element={<ProjectsPage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/contact" element={<ContactPage />}/>

            </Route>
        )
    )

    return (
        <RouterProvider router={router} />
    )
}