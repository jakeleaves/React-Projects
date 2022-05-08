import React from "react"

export default function Info() {
    return(
        <div className="info">
            <h1>Jake Eaves</h1>
            <h4>Student</h4>
            
            <button><img className="email-logo" src="./images/emaillogo.jpg"/>Email</button>
            <button className="linkedin-button"><img className="linkedin-logo" src="./images/linkedin.png"/>LinkedIn</button>
        </div>
    )
}