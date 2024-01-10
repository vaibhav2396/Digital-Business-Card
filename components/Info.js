import React from "react"

export default function Info(){
    return (
            <div className="info-section">
                <img src="./images/profile.png" alt="Profile Picture" className="profilePic" />
                <h1 className="name">Laura Smith</h1>
                <p className="job">Frontend Developer</p>
                <p className="website">laurasmith.website</p>
                <div className="contact">
                    <button className="btn email"></button>
                    <button className="btn linkedIn"></button>
                </div>
            </div>
)}

//<button className="email"><img src="./images/Mail.png" alt="Email image"/><span className="email">Email</span></button>
// <button className="linkedIn"></button>