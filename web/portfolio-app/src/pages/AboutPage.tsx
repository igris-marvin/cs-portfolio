import about_image from "../assets/images/about_images/about_placeholder.jpg"

export const AboutPage = () => {

    return (
        <>
            <div className="container-fluid">

                {/* ROW */}
                <div className="row">

                    {/* COL 1 */}
                    <div className="col-8">
                        <img
                            src={about_image}
                            alt="about page"
                            className="object-fit-cover img-fluid vh-100"
                        />
                    </div>

                    {/* COL 2 */}
                    <div className="col-4">

                        {/* FLEX ALIGN ITEMS CENTER */}
                        <div className="container h-100 w-100 d-flex align-items-center bg-info">

                            {/* content container */}
                            <div className="w-100 bg-primary">

                                <div className="fs-1 my-2">
                                    PETER MALOPE
                                </div>

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
                                    <div className="row text-center fs-6">

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
                                    <div className="row text-center fs-3">

                                        <div className="col">
                                            <i className="bi bi-envelope-at"></i>
                                        </div>
                                        <div className="col">
                                            <i className="bi bi-linkedin"></i>
                                        </div>
                                        <div className="col">
                                            <i className="bi bi-github"></i>
                                        </div>
                                        <div className="col">
                                            <i className="bi bi-instagram"></i>
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