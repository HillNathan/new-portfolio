import React from "react";
import Featured from "../../components/FeaturedProject"
import NormalItem from "../../components/PortfolioItem"
import "./style.css"

const data = require("../../data/data.json")

function Portfolio() {
    return (
        <div className="container my-portfolio mt-2 mb-2">
            <div className="row">
                <div className="col">
                    <h2 className="p-3 text-center">Portfolio</h2>
                    <p className="m-2 p-2">
                        This is my portfolio. These are the projects I am proud of and want to display for the world to see. 
                        Right now, most - if not all - of these are homework assignments or group projects from my time in the Penn LPS 
                        Bootcamp. 
                    </p>
                    <hr />
                        <h2 className="text-center">Featured Project!</h2>
                        <Featured 
                            url = {data.featured.url}
                            title = {data.featured.title}
                            image = {data.featured.image}
                        />
                    <hr />
                    <div className="row" id="portfolio-display">
                        {/* Portfolio Goes HERE */}
                        {data.portfolio.map(item => {
                            return (
                                <NormalItem 
                                    url = {item.url}
                                    title = {item.title}
                                    image = {item.image}
                                />
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;