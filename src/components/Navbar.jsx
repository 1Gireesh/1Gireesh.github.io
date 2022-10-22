import React from 'react';
import { NavLink } from 'react-router-dom';
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
          <li><NavLink exact="true" className="Link" style={({isActive}) => isActive?({ color:"yellow" }): ({}) } to="/home" >Home</NavLink></li>
          <li><NavLink exact="true" className="Link" style={({isActive}) => isActive?({ color:"yellow" }): ({}) } to="about" >About Me</NavLink></li>
          <li><NavLink exact="true" className="Link" style={({isActive}) => isActive?({ color:"yellow" }): ({}) } to="/skills"  >Skills</NavLink></li>
          <li><NavLink exact="true" className="Link" style={({isActive}) => isActive?({ color:"yellow" }): ({}) } to="/project"  >Project</NavLink></li>
          <li><NavLink exact="true" className="Link" style={({isActive}) => isActive?({ color:"yellow" }): ({}) } to="/contact"  >Contact</NavLink></li>
          <li><NavLink className="Link" >Resume</NavLink></li>
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