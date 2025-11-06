import about_image from "../assets/images/about_images/about_placeholder.jpg"
import "../assets/css/main.css"

export const AboutPage = () => {

    return (
        <>
            <div className="about-main container-fluid">

                {/* ROW */}
                <div className="row">

                    {/* COL 1 */}
                    <div className="col-8">
                        <img
                            src={about_image}
                            alt="about page"
                            className="object-fit-cover img-fluid vh-100"
                            height="250px"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                            // crossOrigin="anonymous"
                            referrerPolicy="no-referrer"
                            draggable="false"
                            style={{ containIntrinsicSize: "1200px auto" }}
                        />
                    </div>

                    {/* COL 2 */}
                    <div className="col-4">

                        {/* FLEX ALIGN ITEMS CENTER */}
                        <div className="container h-100 w-100 d-flex align-items-center">

                            {/* content container */}
                            <div className="w-100">

                                <div className="fs-1 my-2">
                                    PETER MALOPE
                                </div>

                                <hr />

                                <div className="fs-4 mb-3">
                                    Software Engineer, Full-Stack Developer, Mobile App Developer, Data Scientist, Database Developer
                                </div>

                                <div className="fs-5 mb-3">
                                    I'm Peter, a Computer Science graduate focused on full-stack development and database engineering.
                                </div>

                                <div className="fs-5 mb-3">
                                    I enjoy solving complex problems with clean, maintainable code and thrive in environments that value thoughtful architecture and performance. My experience spans frontend interfaces, backend logic, and relational database design. Currently, I’m seeking opportunities to grow as a developer, contribute to innovative teams, and deepen my expertise in database engineering and software scalability.
                                </div>

                                {/* HASH TAGS */}
                                <div className="col mb-3">
                                    {/* row */}
                                    <div className="row text-center fs-6">
                                        <div className="col">
                                            #devops
                                        </div>
                                        <div className="col">
                                            #art
                                        </div>
                                        <div className="col">
                                            #gaming
                                        </div>
                                        <div className="col">
                                            #gym
                                        </div>
                                    </div>
                                </div>

                                <div className="fs-5 mb-3">

                                    {/* ROW */}
                                    <div className="occupation-card row text-center fs-6 py-2 shadow">

                                        {/* COLS */}
                                        <div className="col">
                                            <div>WORK</div>
                                            <div>
                                                ---
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div>EDUCATION</div>
                                            <div>
                                                Tshwane University of Technology
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* ICONS */}
                                <div className="mb-3">

                                    {/* row */}
                                    <div className="about-icons row text-center fs-3">

                                        <div className="col">
                                            
                                            <a href="mailto:malopepeter@yahoo.com">
                                                <i className="bi bi-envelope-at"></i>
                                            </a>

                                        </div>
                                        <div className="col">
                                            
                                            <a href="https://www.google.com">
                                                <i className="bi bi-linkedin"></i>
                                            </a>

                                        </div>
                                        <div className="col">
                                            
                                            <a href="https://www.google.com">
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

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}