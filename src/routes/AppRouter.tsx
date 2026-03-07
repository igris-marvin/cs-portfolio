import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "../layout/RootLayout"
import { HomePage } from "../pages/HomePage"
import { ProjectsPage } from "../pages/ProjectsPage"
import { AboutPage } from "../pages/AboutPage"
import { ContactPage } from "../pages/ContactPage"
import { NotFoundPage } from "../pages/NotFoundPage"
// import { ProjectTempPage } from "../pages/ProjectTempPage"

export const AppRouter = () => {

    const router = createHashRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>

                {/* HOME */}
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}