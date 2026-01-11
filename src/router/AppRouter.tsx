import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "../layout/RootLayout"
import { HomePage } from "../pages/HomePage"
import { ProjectsPage } from "../pages/ProjectsPage"
import { ContactPage } from "../pages/ContactPage"
import { AboutPage } from "../pages/AboutPage"
import { E404Page } from "../pages/error_pages/E404Page"


export const AppRouter = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<RootLayout />}
            >
                <Route
                    path="/cs-portfolio"
                >
                    <Route path="/cs-portfolio" element={<HomePage />} />
                    <Route path="/cs-portfolio/projects" element={<ProjectsPage />} />
                    <Route path="/cs-portfolio/about" element={<AboutPage />} />
                    <Route path="/cs-portfolio/contact" element={<ContactPage />} />
                </Route>

                <Route path="*" errorElement={ <E404Page /> } />

            </Route>
        )
    )

    return (
        <RouterProvider router={router} />
    )
}