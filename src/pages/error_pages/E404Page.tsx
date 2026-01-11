import { Link } from "react-router-dom"


export const E404Page = () => {
    
    return (
        <>
            <div className="text-center">
                <h1 className="display-1 fw-bold text-danger">404</h1>
                <h2 className="mb-3">Page Not Found</h2>
                <p className="text-muted mb-4">
                Sorry, the page you are looking for doesn’t exist or has been moved.
                </p>
                <Link to="/cs-portfolio" className="btn btn-primary btn-lg">
                Go Home
                </Link>
            </div>
        </>
    )
}