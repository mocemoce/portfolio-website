import React from 'react';
import "./Services.css";
import Image1 from "../../assets/web-design.png"
import Image2 from "../../assets/app-development.png"
import Image3 from "../../assets/mobile-app.png"

const data = [
  {
    id: 1,
    image:  Image1,
    title: "UI/UX Design",
    description: 

  "I have a basic understanding of Figma and Adobe Photoshop for UI/UX design. I can create simple wireframes, prototypes, and clean visuals to help make designs easy to use and look good."   },
  {
    id: 2,
    image:  Image2,
    title: "Web Development",
    description: 

    "I specialize in front-end development using React, Angular, Bootstrap, and Tailwind CSS, building responsive, high-performance web apps with smooth UIs and cross-browser compatibility."  },
  {
    id: 1,
    image:  Image3,
    title: "Mobile Devlopment",
    description: 

    "I have a solid understanding of Flutter, with experience building responsive, visually appealing Android apps, integrating APIs, managing state, and optimizing performance."  },
]
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section_title">Services</h2>

      <div className="services_container grid">
        {data.map(({ id, image, title, description}) => {
          return(
            <div className="services_card" key={id}>
            <img src={image} width="90px" alt="error" className="services_img" />

            <h3 className="services_title">{title}</h3>
            <p className="services_description">{description}</p>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
