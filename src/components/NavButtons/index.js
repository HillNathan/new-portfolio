import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./style.css"


function NavButtons() {
    return (
        <header className="header-bar">
            <div className="header-container text-center">
            <Link to = "/">
                <span class="display-3">Nathan Hill</span>
            </Link><br />
                <Link to = "/about">
                    <button className="nav-button p-2"><i className="fas fa-portrait fa-2x"></i></button>
                </Link>
                <Link to = "/portfolio">
                    <button className="nav-button p-2"><i className="fa fa-images fa-2x"></i></button>
                </Link>
                <Link to = "/contact">
                    <button className="nav-button p-2"><i className="far fa-keyboard fa-2x"></i></button>
                </Link>
            </div>
        </header>
    )
}

export default withRouter(NavButtons);
