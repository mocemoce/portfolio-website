import React from 'react';
import "./Sidebar.css";
import Logo from "../../assets/STI.png";

const Sidebar = () => {
  return (
   <aside className="aside">
    <a href="#home" className='nav_logo'>
      <img src={Logo} className='STI-logo' alt="" />  
    </a>

    <nav className="nav">
      <div className="nav_menu">
        <ul className="nav_list">

          <li className="nav_item">
            <a href="#home" className="nav_link">
              <i className="icon-home"></i>
            </a>
          </li>

          <li className="nav_item">
            <a href="#about" className="nav_link">
              <i className="icon-user"></i>
              </a>
          </li>

          <li className="nav_item">
            <a href="#services" className="nav_link">
              <i className="icon-briefcase"></i>
              </a>
          </li>

          <li className="nav_item">
            <a href="#resume" className="nav_link">
              <i className="icon-graduation"></i>
              </a>
          </li>

          <li className="nav_item">
            <a href="#skill" className="nav_link">
            <i className="icon-grid"></i>
            </a>
          </li>

          <li className="nav_item">
            <a href="#pricing" className="nav_link">
            <i className="icon-layers"></i>
            </a>
          </li>

          <li className="nav_item">
            <a href="#contact" className="nav_link">
            <i className="icon-bubble"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div className="nav_footer">
      <span className="copyright">2021 - 2025 Allumni Student.</span>
    </div>
   </aside>
  )
}

export default Sidebar
