import React from 'react';
import "./About.css";
import me from "../../assets/profile.png";
import Resume from "../../assets/resume.pdf"

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={me} alt="" className="about_img" width="190px" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
            I am Moce Loise B. Nunez, a recent graduate from STI Colleges. I have a solid understanding of front-end development, particularly in frameworks like React.js and Angular. I am passionate about learning new technologies and continuously improving my skills.
            </p>
            <a href={Resume} className="btn" download="Moce_Loise_B_Nunez_Resume.pdf">Download CV</a>
          </div>

          <div className="about_skills grid">
            {/* FrontEnd Skill */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">FrontEnd</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skill_percentage frontend"></span>
              </div>
            </div>

            {/* BackEnd Skill */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">BackEnd</h3>
                <span className="skills_number ">50%</span>
              </div>
              <div className="skills_bar">
                <span className="skill_percentage backend" ></span>
              </div>
            </div>

            {/* UI/UX Skill */}
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI/UX</h3>
                <span className="skills_number ">70%</span>
              </div>
              <div className="skills_bar">
                <span className="skill_percentage ui"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
