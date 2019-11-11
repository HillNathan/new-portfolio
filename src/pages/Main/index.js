import React from "react";
import { withRouter, Link } from "react-router-dom";


export default withRouter (
    function Main () {
        return (
            <div className="container" id="main">
                <div className="row justify-content-end">
                    <div className="col-xl-10 col-xs-12">
                        <div className="jumbotron main-jumbo">
                            <h1 className="display-2 text-center">
                                Nathan Hill
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-end">
                    <div className="col-xl-10 col-xs-12 text-center" id="main-buttons">
                        <div className="row">
                            <div className="col text-center">
                                <Link to = "/about" id="main-link">
                                    <i className="fas fa-portrait fa-6x"></i><br />About
                                </Link>
                            </div>
                            <div className="col text-center">
                                <Link to = "/portfolio" id="main-link">
                                    <i className="fa fa-images fa-6x"></i><br />Portfolio
                                </Link>
                            </div>
                            <div className="col text-center">
                                <Link to = "/contact" id="main-link">
                                    <i className="far fa-keyboard fa-6x"></i><br />Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)