import React from 'react'
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
const Navbar = () => {
    return (
        <div className="navbarContainer">
            <h2>川口工務店</h2>
            <div className="navbarControls">
               <MenuIcon/>
            </div>

            <div className="navbarRight">
                <ul>
                    <li><Link to="/事業内容">事業内容</Link></li>
                    <li><Link to="/施工実績">施工実績</Link></li>
                    <li><Link to="/会社案内">会社案内</Link></li>
             
                </ul>
                <div>
                    {/* <button className="std-button-border">Signin</button> */}
                    {/* <LocalPhoneIcon style={{marginRight:"0.5rem"}}/> */}
                    <button onClick={()=>window.location.href='/contact'} className="std-button-fill" style={{display:"flex",alignItems:"center"}}>お問い合わせ</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
