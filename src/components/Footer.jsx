import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerLeft">
                <ul>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li>
                </ul>
                <ul>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li>
                </ul>
            </div>
            <div  className="footerRight">
                <h1>Lorem, ipsum.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint qui ipsam voluptate. Doloribus totam deserunt sequi. Odit illum sint pariatur.</p>
                <ul>
                    <li><Link to="/"><FacebookIcon/></Link></li>
                    <li><Link to="/"><TwitterIcon/></Link></li>
                    <li><Link to="/"><InstagramIcon/></Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
