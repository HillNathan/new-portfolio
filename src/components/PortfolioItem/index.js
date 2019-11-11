import React from "react";

export default function PortfolioItem(props) {
    return(
        <div className = "col-xl-3 col-lg-4 col-md-6 text-center">
            <a href={props.url} >
                <img src = {props.image} className = "regular-img m-2" alt = {props.title} />
                <div className = "my-title">
                    <h4>{props.title}</h4>
                </div>
            </a>
        </div>
    )
}