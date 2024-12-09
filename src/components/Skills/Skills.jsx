import React from 'react'
import Frontend from "./Frontend"
import Backend from "./Backend"
import './Skills.css'

function Skills() {
  return (
    <section className="skill section container" id="skill">
        <h2 className="section_title">Skills</h2>

        <div className="skills_container container grid">
          <Frontend/>
          <Backend/>
        </div>
    </section>
  )
}

export default Skills
