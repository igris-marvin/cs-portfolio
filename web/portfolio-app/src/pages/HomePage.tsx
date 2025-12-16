
export const HomePage = () => {

    return (
        <>
        <div className="home-main">
            {/* <!-- Hero Section --> */}
            <section className="hero">
                <div className="container">
                    {/* ROW */}
                    <div className="row">
                        {/* COLS */}
                        <div className="col-9">
                            {/* CONTENT */}
                            <h1>Peter M.</h1>
                            <p className="lead">Software Engineer | Problem Solver | Tech Enthusiast</p>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptate ipsam quis nostrum sequi. Culpa nobis quidem dolorem voluptatibus expedita
                                molestiae rem? Soluta nulla autem error veniam obcaecati, inventore illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laborum
                                sequi tempora sed? Quo vitae harum nulla iusto sit modi laudantium sapiente. Tenetur, alias? Explicabo accusamus sunt aliquam iusto ullam? lorem
                            </p>

                            <div className="mb-3">

                                {/* row */}
                                <div className="home-icons row text-center fs-3">

                                    <div className="col">

                                        <a href="mailto:malopepeter@yahoo.com">
                                            <i className="bi bi-envelope-at-fill"></i>
                                        </a>

                                    </div>
                                    <div className="col">

                                        <a href="https://www.linkedin.com/in/peter-malope-a578242bb/">
                                            <i className="bi bi-linkedin"></i>
                                        </a>

                                    </div>
                                    <div className="col">

                                        <a href="https://github.com/igris-marvin">
                                            <i className="bi bi-github"></i>
                                        </a>

                                    </div>
                                    <div className="col">

                                        <a href="https://www.google.com">
                                            <i className="bi bi-instagram"></i>
                                        </a>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col-3">
                            {/* EMPTY */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Introduction & Goal --> */}
            <section className="container pt-3">
                <h2 className="section-title">About Me</h2>
                <p>
                    I'm a passionate software engineer with a strong foundation in computer science and a love for building scalable, user-centric applications. My goal is to contribute to impactful tech projects while continuously growing my skills in modern development frameworks and best practices.
                </p>
            </section>

            {/* <!-- Skills Overview --> */}
            <section className="container py-5">
                <h2 className="section-title">Skills</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Java • JavaScript • TypeScript • Firebase • HTML • JSP • Kotlin • PHP • Python • PostgreSQL • Thymeleaf</li>
                    <li className="list-group-item">Spring Boot 3 • Java Enterprise Edition</li>
                    <li className="list-group-item">React JS • Node JS (Express JS)</li>
                    <li className="list-group-item">Visual Studio Code • IntelliJ • Android Studio • NetBeans • GitHub • Jetpack Compose • Docker • Wondershare Edraw Max • CPanel • Postman</li>
                    <li className="list-group-item">Object-Oriented Programming, Data Structures, Algorithms, Database Principles, Computer Science Principles, Asynchronous/Reactive Patterns</li>
                    <li className="list-group-item">Visual Studio Code • IntelliJ • Android Studio • NetBeans • GitHub • Jetpack Compose • Docker • Wondershare Edraw Max • CPanel • Postman</li>
                </ul>
            </section>

            {/* <!-- Projects --> */}
            <section className="container py-5">
                <h2 className="section-title">Projects</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Multi Service Booking Web Application</h5>
                                <p className="card-text">A responsive personal website showcasing my skills, projects, and contact info. Built with Bootstrap and deployed on GitHub Pages.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sani-Enterprise E-commerce (Volunteer Project)</h5>
                                <p className="card-text">A real-time chat application using Firebase Authentication and Firestore, with React for the frontend.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </div>
        </>
    )
}