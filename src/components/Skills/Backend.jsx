import React from 'react';

const Frontend = () => {
  return (
    <div className="skills_content">
        <h3 className="skills_title">BackEnd Developer</h3>

        <div className="skills_box">
            {/* First column */}
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">Python</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">Flutter</h3>
                    <span className="skills_level">Advanced</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">Git</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
        </div>

        <div className="skills_box">
            {/* Second column */}
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">MYSQL</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">NodeJS</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
            <div className="skill_group">
                <i className="bx icon-badge"></i>
                <div>
                    <h3 className="skills_name">Dart</h3>
                    <span className="skills_level">Basic</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Frontend;
