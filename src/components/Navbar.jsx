import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import "../css/nav.css";
import { NavLink } from 'react-router-dom';


function Navbar() {

  let links = document.querySelectorAll('.Link');

  function handleClic(e) {
    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "white";
      links[i].style.fontStyle = "normal";
    }
    e.target.style.color = "parrotgreen";
    e.target.style.fontStyles = "bold";
    document.querySelector(".nav-bar").classList.toggle("active")
  }


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
          <li><Link

            onClick={handleClic} className="Link" to="#home" smooth >Home</Link></li>
          <li><Link

            onClick={handleClic} className="Link" smooth to="#about" >About Me</Link></li>
          <li><Link

            onClick={handleClic} className="Link" smooth to="#skills"  >Skills</Link></li>
          <li><Link

            onClick={handleClic} className="Link" smooth to="#project"  >Project</Link></li>
          <li><Link

            onClick={handleClic} className="Link" smooth to="#contact"  >Contact</Link></li>
          <li><a
          target="_blank"
          href='https://drive.google.com/file/d/1F_gCF6RI2kHbEER4ld6Wvm6DCy22rwxL/view?usp=share_link'
            onClick={handleClic} className="Link resm"  >Resume</a></li>
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