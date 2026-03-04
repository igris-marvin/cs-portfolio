import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "../layout/RootLayout"
import { HomePage } from "../pages/HomePage"

export const AppRouter = () => {

    const router = createHashRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout />}>

                {/* HOME */}
                <Route path="/" element={<HomePage />} />
            </Route>
        )
    )

    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}