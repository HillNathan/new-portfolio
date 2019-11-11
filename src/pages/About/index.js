import React from "react";
import "./style.css"

function About () {
    return (
        <div className="container mt-2 mb-2 about-me">
            <div className="row">
                <div className="col">
                <h2 className="p-3 text-center">About Me</h2>
                <hr />
                
                <img src="./images/NathanHillProfile-small.jpg" class="img-fluid rounded float-left p-3" alt="Nathan Hill Profile" />
                
                <p>My name is Nathan Hill. I was born in Lancaster, PA and currently make my home just outside of Philadelphia in Secane, PA. I was married in 2005 and have 2 sons, ages 9 and 4. Between activities, elementary and preschool transportation, and playtime they definitely keep me busy. I enjoy being the cook for the family and feel like cooking is an expression of love and care for another person. I also view cooking as an outlet for my artistic expression. I also use music as an artistic outlet, playing guitar both for myself and as a paid musician for our church. </p>

                <p>I graduated high school and was accepted at Muhlenberg College, in Allentown PA. Though I did not graduate, I studied Chemistry and Computer science, taking a few courses in experimental music along the way. After school, I began working, starting at a Kellogg bakery in their maintenance office. While I was there, I assisted with a major database merger, helping clean up their data and eliminate duplicate part numbers in a spare parts list. This was my first exposure to handling data on a large scale. I moved from there to working in the Philadelphia area in multiple auto collections positions and multiple companies. While I disliked the customer contact the jobs were centered around, I enjoyed reviewing and analyzing the reporting that was done at the multiple companies I worked for. Eventually I moved into mortgage collections, and had the freedom and ability to build my own database to assist me with the work. This was my first major foray into database construction and design, and I used the help files and script editor to get the Microsoft Access database to do some pretty cool things. I also concerned myself with making the database look nice, as I ended up using the tool on a daily basis and had to be able to find and read things pretty quickly. </p>
                    
                <p>After the birth of my second child my wife and I made the decision that I would begin a new job path as a Stay-at-home Dad to my two boys. Though I may not have been working at a job, doing this full-time has taught me a lot about myself and about life in general. I am a much more organized person than I used to be, and I find myself having more patience than I used to as well. I have worked on myself a lot these last 4 years, and feel like I am a better father, husband, and person for doing it. </p>
                    
                <p>Now that my boys are older, I found myself looking forward again, and looking for ways that I could re-invent myself. I found the Coding Bootcamp through the Penn LPS, and it fit my needs perfectly. The part time session give me the ability to learn new skills while still being present for my kids. In the fall when they go back to school I will finish up my session and begin to look for work to fill up my time, rather than spending it as a full-time Dad. I feel like Web development will finally tie a lot of my loves and strengths together. I look forward to using my computer acumen, love for manipulating data, building databases, and artistic eye to make things that are not just functional but attractive. </p>
                </div>
            </div>  
        </div> 
    )
}

export default About;