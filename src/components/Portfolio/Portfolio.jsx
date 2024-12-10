import React from 'react';
import "./Portfolio.css";
import image1 from '../../assets/smartphone.png';
import image2 from '../../assets/ux.png';
import image3 from '../../assets/coming-soon.png';

const Portfolio = () => {
  return (
    <section className="pricing container section">
      <h2 className="section_title">Featured Projects</h2>

      <div className="p_container grid">
        <div className="p_item">
          <img src={image2} width="100px" alt="" className='p_img'/>
          <h3 className="p_plan">Lets Eat</h3>
          <p className="p_title">"Bootstrap,HTML,CSS,JS"</p>
          <p className="p_support">A simple web design using bootstrap</p>
       
          <a href="https://github.com/mocemoce/LetsEat" target="_blank" rel="noopener noreferrer" className="btn">View Github</a>
        </div>

        <div className="p_item best">
          <span className='badge'>Thesis Project</span>
          <img src={image1} width="100px" alt="" className='p_img'/>
          <h3 className="p_plan">Visio-Guide</h3>
          <p className="p_title">"Flutter,GoogleCloudVision,Dart"</p>
          <p className="p_support">A mobile app that has a Voice command, Audio/Heptic feedback and Object detection</p>
 
          <a href="https://github.com/zanavilo/VisioGuideV2" target="_blank" rel="noopener noreferrer" className="btn">View Github</a>
        </div>

        <div className="p_item">
          <img src={image3} width="100px" alt="" className='p_img'/>
          <h3 className="p_plan">RealTime Chat App</h3>
          <p className="p_title">"MERN,Socket.io"</p>
          <p className="p_support">...</p>

          <a href="" className="btn">View Github</a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
