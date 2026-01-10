

export const ContactPage = () => {

    return (
        <>
            <div className="container">

                {/* ROW */}
                <div className="row">

                    {/* COL 1 */}
                    <div className="col-8">

                        {/* CONTENT */}
                        <div className="my-5">
                            <h3
                            className="bg-info">Contact Me</h3>
                            <p>You can reach out to me by email, call or by completing the form.</p>

                            {/* SOCIALS */}
                            <div className="my-4">

                                <h5>Socials</h5>

                                <div className="d-flex align-items-center">
                                    <i className="bi bi-github fs-4"></i>
                                    <span className="ps-2">Github</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-instagram fs-4"></i>
                                    <span className="ps-2">Instagram</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-linkedin fs-4"></i>
                                    <span className="ps-2">LinkedIn</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-whatsapp fs-4"></i>
                                    <span className="ps-2">Whatsapp</span>
                                </div>
                                <div>
                                    
                                </div>

                            </div>

                            {/* LOCATION, EMAIL, PHONE - ROW*/}
                            <div className="row">

                                <div className="col">

                                    {/* ROWS */}
                                    <div className="row">
                                        <div className="col- d-flex align-items-center">
                                            <i className="bi bi-geo-alt-fill fs-4"></i>
                                            <span className="ps-1">Address</span>
                                        </div>

                                        <div className="col-12">
                                            Pretoria, Gauteng, South Africa
                                        </div>
                                    </div>

                                </div>

                                <div className="col">

                                    {/* ROWS */}
                                    <div className="row">
                                        <div className="col-12 d-flex align-items-center">
                                            <i className="bi bi-telephone-fill fs-4"></i>
                                            <span className="ps-1">Phone</span>
                                        </div>

                                        <div className="col-12">
                                            +27 68 293 8418
                                        </div>
                                    </div>

                                </div>

                                <div className="col">

                                    {/* ROWS */}
                                    <div className="row">
                                        <div className="col-12 d-flex align-items-center">
                                            <i className="bi bi-envelope-at-fill fs-4"></i>
                                            <span className="ps-1">Email</span>
                                        </div>

                                        <div className="col-12">
                                            malopepeter@yahoo.com
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* COL 2 */}
                    <div className="col-4">

                        {/* BOX FORM */}
                        <div className="">

                            <div className="my-5">
                                <h3
                                className="bg-info">Get in Touch</h3>
                                {/* INPUT ROW */}
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">First name</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Last name</label>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                            <label htmlFor="floatingInput">Email Address</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control" rows={5} placeholder="Message" />
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="button" className="btn btn-primary w-100">Send</button>
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