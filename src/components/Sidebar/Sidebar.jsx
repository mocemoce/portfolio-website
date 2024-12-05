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
            <a href="#about" className="nav_link"></a>
            <i className="icon-user"></i>
          </li>

          <li className="nav_item">
            <a href="#services" className="nav_link"></a>
            <i className="icon-briefcase"></i>
          </li>

          <li className="nav_item">
            <a href="#resume" className="nav_link"></a>
            <i className="icon-graduation"></i>
          </li>

          <li className="nav_item">
            <a href="#portfolio" className="nav_link"></a>
            <i className="icon-layers"></i>
          </li>

        </ul>
      </div>
    </nav>

    <div className="nav_footer">
      <span className="copyright">&copy; 2024 - 2024.</span>
    </div>
   </aside>
  )
}

export default Sidebar
