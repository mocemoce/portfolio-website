import React from 'react';
import "./Home.css";
import me from "../../assets/profile.png";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
   <section className="home container" id="home">
    <div className="intro">
      <img src={me} alt="My Avatar" width="25 0px" className="home_img" />
      <h1 className="home_name">Moce Loise B. Nunez</h1>
      <span className="home_education">I'm a Front-End Developer</span>

      <HeaderSocials/>

      <a href="#contact" className='btn'>Hire Me</a>

      <ScrollDown/>

    </div>
   </section>
  )
}

export default Home
