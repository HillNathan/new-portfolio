import React from "react";

export default function Featured(props) {
    return (
        <div className="row justify-content-center">
            <div className="text-center p-3" id="featured-display">
                <a href={props.url}>
                    <img src={props.image} className="featured-img m-2" alt={props.title} />
                    <div className = "my-title">
                        <h2>{props.title}</h2>
                    </div>
                </a>
            </div>
        </div>
    )
}