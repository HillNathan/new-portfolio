import React from "react";
import "./style.css"

function Contact() {
    return (
        <div className="container contact-me smt-2 mb-2" id="main">
        <div className="row justify-content-center">
            <div className="col-xl-9" id="contact-form">
            <h2 className="p-3 text-center">Contact</h2>
            <div className="row justify-content-center">
              <div className="col-3 text-center"><a href="https://github.com/HillNathan" id="main-link"><i className="fab fa-github-square fa-2x"></i><br />GitHub</a></div>
              <div className="col-3 text-center"><a href="https://www.linkedin.com/in/nathan-hill-4ba53a32/" id="main-link"><i className="fab fa-linkedin fa-2x"></i><br />LinkedIn</a></div>
              <div className="col-3 text-center"><a href="Nathan_Hill_Resume.docx" id="main-link"><i className="fas fa-file-pdf fa-2x"></i><br />Resume</a></div>
            </div>
            <hr />
            </div>
        </div>
    </div>
    )
}

export default Contact;