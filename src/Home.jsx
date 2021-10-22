import React from 'react'
import HeroContainer from "./components/HeroContainer";
import IntroSection from "./components/IntroSection";
import Gallery from "./components/Gallery";

const Home = () => {
    return (
        <div className="rootMain">

            <HeroContainer/>

            <IntroSection/>

            <Gallery/>


            <IntroSection/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662934.8669022652!2d138.6458161233627!3d35.5062646936023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sin!4v1634866272859!5m2!1sen!2sin" height="450" style={{width:"100%"}}  allowfullscreen="" loading="lazy"></iframe>


       </div>
    )
}

export default Home
