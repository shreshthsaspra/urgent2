import React from 'react'

const HeroContainer = () => {
    return (
        <div className="heroContainer"> 
            <img src="https://images.pexels.com/photos/7245333/pexels-photo-7245333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="HERO CONTAINER JPG"/>
            <div className="heroText">
                <h1>ご自宅が一層快適になるよう<br/>心を込めて支援いたします</h1>
                    {/* <button className="std-button-fill">Get It</button> */}
            </div>
        </div>

    )
}

export default HeroContainer
