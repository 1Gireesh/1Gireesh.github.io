import React from 'react';
import { Link } from 'react-router-dom';
import "../css/nav.css";


function Navbar() {




  return (
    <header>
      <div className="logo"> <Link className='Link'>Girish Bhat</Link> </div>
      <div className="burger" onClick={ ()=>  document.querySelector(".nav-bar").classList.toggle("active") }>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav className='nav-bar'>
        <ul>
          <li><Link className='Link' to="">Home</Link></li>
          <li><Link className='Link' to="">About Me</Link></li>
          <li><Link className='Link' to="">Skills</Link></li>
          <li><Link className='Link' to="">Project</Link></li>
          <li><Link className='Link' to="">Contact</Link></li>
          <li><Link className='Link' to="">Resume</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar