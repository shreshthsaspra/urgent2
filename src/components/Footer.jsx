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
                <h2>0000-000-0000</h2>
                
                <ul style={{display:"flex"}}>
                    <li>[営業時間］</li>
                    <li style={{fontWeight:"bold"}}>00：00～00：00/［</li>
                    <li>定休日］</li>
                    <li>〇、〇</li>
                    {/* <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li> */}
                </ul>
                {/* <ul>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Lorem, ipsum dolor.</Link></li>
                    <li><Link to="/">Services</Link></li>
                </ul> */}
            </div>
            <div  className="footerRight">
                <h1 style={{cursor:"pointer"}} onClick={()=>window.location.href="/"}>川口工務店</h1>
                <p style={{color:"black"}}>© 川口工務店 ALL RIGHTS RESERVED.</p>
                {/* <ul>
                    <li><Link to="/"><FacebookIcon/></Link></li>
                    <li><Link to="/"><TwitterIcon/></Link></li>
                    <li><Link to="/"><InstagramIcon/></Link></li>
                </ul> */}
            </div>

        </div>
    )
}

export default Footer
