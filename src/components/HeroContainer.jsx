import React from 'react'

const HeroContainer = () => {
    return (
        <div className="heroContainer"> 
            <img src="https://images.pexels.com/photos/214576/pexels-photo-214576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="HERO CONTAINER JPG"/>
            <div className="heroText">
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ex ducimus quas numquam provident natus.</p>
                <button className="std-button-fill">Get It</button>
            </div>
        </div>
    )
}

export default HeroContainer
