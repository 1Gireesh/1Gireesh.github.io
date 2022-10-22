import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink as Link} from 'react-router-hash-link';
import "../css/nav.css";
import Typing from './Typing';


function Navbar() {



  return (
    <header>
      <div className="logo"> <NavLink className='Link'>Girish Bhat</NavLink> </div>
      <div className="burger" onClick={() => document.querySelector(".nav-bar").classList.toggle("active")}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className='nav-bar'>
        <ul>
          <li><Link  className="Link"  to="#home" smooth >Home</Link></li>
          <li><Link  className="Link" smooth to="#about" >About Me</Link></li>
          <li><Link  className="Link" smooth to="#skills"  >Skills</Link></li>
          <li><Link  className="Link" smooth to="#project"  >Project</Link></li>
          <li><Link  className="Link" smooth to="#contact"  >Contact</Link></li>
          <li><Link className="Link" >Resume</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar



// https://damanjot6767.github.io/
//https://tanmaygawade.github.io/
//
//
//