import React from 'react';
import "./Home.css";
import me from "../../assets/avatar.jpg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import Resume from "../../assets/resume.pdf"

const Home = () => {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={me} alt="My Avatar" width="250px" className="home_img" />
      <h1 className="home_name">Moce Loise B. Nunez</h1>
      <span className="home_education">I'm a Front-End Developer</span>

      <HeaderSocials/>

      <div className="hire-me-btn-container btn">
      <a 
        href={Resume} 
        download="Your_resume.pdf" 
        className="hire-me-btn"
      >
        Hire Me
      </a>
    </div>

      <ScrollDown/>

      <Shapes/>
    </div>
   </section>
  )
}

export default Home
