import React from 'react'
import "../css/about.css"
import { Typewriter } from 'react-simple-typewriter';

function About() {
  return (
    <div id='about'>
      <div className='contain'>
        <h1>Girish Vishveshvara Bhat </h1>
        <h2 className='type'>
          <Typewriter
            loop
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            words={["Web Developer.", "Full Stack Web Developer.", "MERN Stack Developer"]}
          />
        </h2>
        <h2 className='abt'>
          An independent and self-motivated person, with proven and experienced Backend Development Skills. Looking to secure a challenging position in a reputable company to explore a problem solving environment and expand my knowledge.
        </h2>

      </div>
    </div>
  )
}

export default About