import React from 'react';

const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">FrontEnd Developer</h3>

        <div className="skills_box">
            {/* First column */}
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">CSS</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
            </div>
        </div>

        <div className="skills_box">
            {/* Second column */}
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">BootStrap</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">TailWind CSS</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">ReactJs</h3>
                    <span className="skills_level">Intermediate</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Frontend;
