import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <h2>Lorem, ipsum.</h2>
            <div className="navbarRight">
                <ul>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Services</Link></li>
             
                </ul>
                <div>
                    <button className="std-button-border">Signin</button>
                    <button className="std-button-fill">Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
