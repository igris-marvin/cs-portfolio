
export const HomePage = () => {

    return (
        <>
            {/* <!-- Hero Section --> */}
            <section className="hero">
                <div className="container">
                    <h1>Peter M.</h1>
                    <p className="lead">Software Engineer | Problem Solver | Tech Enthusiast</p>
                </div>
            </section>

            {/* <!-- Introduction & Goal --> */}
            <section className="container py-5">
                <h2 className="section-title">About Me</h2>
                <p>
                    I'm a passionate software engineer with a strong foundation in computer science and a love for building scalable, user-centric applications. My goal is to contribute to impactful tech projects while continuously growing my skills in modern development frameworks and best practices.
                </p>
            </section>

            {/* <!-- Skills Overview --> */}
            <section className="container py-5">
                <h2 className="section-title">Skills</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Java, TypeScript, React, Node.js, Firebase</li>
                    <li className="list-group-item">Database design & optimization (OracleDB)</li>
                    <li className="list-group-item">UI/UX clarity and web standards</li>
                    <li className="list-group-item">Defensive programming & async/reactive patterns</li>
                    <li className="list-group-item">Professional communication & documentation</li>
                </ul>
            </section>

            {/* <!-- Projects --> */}
            <section className="container py-5">
                <h2 className="section-title">Projects</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Portfolio Website</h5>
                                <p className="card-text">A responsive personal website showcasing my skills, projects, and contact info. Built with Bootstrap and deployed on GitHub Pages.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Firebase Chat App</h5>
                                <p className="card-text">A real-time chat application using Firebase Authentication and Firestore, with React for the frontend.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Social Links --> */}
            <section className="container py-5 text-center">
                <h2 className="section-title">Connect with Me</h2>
                <a href="https://github.com/yourusername" className="btn btn-dark m-2" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" className="btn btn-primary m-2" target="_blank">LinkedIn</a>
                <a href="mailto:your.email@example.com" className="btn btn-outline-secondary m-2">Email Me</a>
            </section>

        </>
    )
}