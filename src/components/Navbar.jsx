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
    console.log(window.innerWidth);
    if(window.innerWidth<800)
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
        <div className="nav-links">
          <Link onClick={handleClic} className="Link" to="#home" smooth>Home</Link>
          <Link onClick={handleClic} className="Link" smooth to="#about">About Me</Link>
          <Link onClick={handleClic} className="Link" smooth to="#skills">Skills</Link>
          <Link onClick={handleClic} className="Link" smooth to="#project">Project</Link>
          <Link onClick={handleClic} className="Link" smooth to="#contact">Contact</Link>
          <a
            target="_blank"
            href='https://drive.google.com/file/d/1F_gCF6RI2kHbEER4ld6Wvm6DCy22rwxL/view?usp=share_link'
            onClick={handleClic} className="Link resm">Resume</a>
        </div>
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