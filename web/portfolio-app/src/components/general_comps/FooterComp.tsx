import dayjs from "dayjs"


export const FooterComp = () => {

    return (
        <>
            <div>
                <div className="container-fluid">

                    {/* SOCIAL ICONS */}
                    <div className="d-flex justify-content-center bg-danger fs-5">
                        <div className="mx-2">
                            <i className="bi bi-envelope-at"></i>
                        </div>
                        <div className="mx-2">
                            <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="mx-2">
                            <i className="bi bi-github"></i>
                        </div>
                        <div className="mx-2">
                            <i className="bi bi-instagram"></i>
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