import React from 'react'
import "../css/about.css"
import { Typewriter } from 'react-simple-typewriter';

function About() {
  return (
    <div id='about'>
      <div className='contain'>
        <div className='about-header'>
          <h1 className='section-title'>About Me</h1>
          <div className='title-underline'></div>
        </div>
        
        <p className='type'>Girish Vishveshvara Bhat</p>      
        <p className='abt'>
          An independent and self-motivated person, with proven and experienced Backend Development Skills. Looking to secure a challenging position in a reputable company to explore a problem solving environment and expand my knowledge.
        </p>

        <div className='education-section'>
          <h2 className='section-title'>
            <span className='icon'>🎓</span> Education
          </h2>
          <div className='title-underline'></div>
          
          <div className='education-container'>
            <div className='education-card'>
              <div className='education-icon'>🎯</div>
              <h3 className='education-degree'>BS in Data Science and Programming</h3>
              <p className='education-institution'>Indian Institute of Technology Madras (IITM)</p>
              <p className='education-status ongoing'>
                <span className='status-dot'></span>
                Ongoing
              </p>
            </div>

            <div className='education-card'>
              <div className='education-icon'>📚</div>
              <h3 className='education-degree'>12th Standard (Pre-University)</h3>
              <p className='education-institution'>Government Science College, Yellapur</p>
              <p className='education-status completed'>
                <span className='status-dot'></span>
                Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About