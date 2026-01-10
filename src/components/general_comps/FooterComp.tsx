import dayjs from "dayjs"


export const FooterComp = () => {

    return (
        <>
            <div className="footer-main py-4">
                <div className="container-fluid">

                    {/* SOCIAL ICONS */}
                    <div className="d-flex justify-content-center fs-5 footer-icons">
                        <div className="mx-2">
                            <a href="mailto:malopepeter@yahoo.com">
                                <i className="bi bi-envelope-at-fill"></i>
                            </a>

                        </div>
                        <div className="mx-2">
                            <a href="https://www.linkedin.com/in/peter-malope-a578242bb/">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </div>
                        <div className="mx-2">
                            <a href="https://github.com/igris-marvin">
                                <i className="bi bi-github"></i>
                            </a>
                        </div>
                        <div className="mx-2">
                            <a href="https://wwww.google.com">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <hr />

                    {/* COPYRIGHT */}
                    <div className="d-flex justify-content-center">
                        &copy; {dayjs().get('year')} Marvin
                    </div>
                </div>
            </div>
        </>
    )
}