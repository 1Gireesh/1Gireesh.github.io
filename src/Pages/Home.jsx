import React, { useEffect } from 'react'
import "../css/home.css";
import { Typewriter } from 'react-simple-typewriter'

function Home() {

  

let type = document.querySelector('.typing');


  return (
    <div id='home'>
      <div className='container'>
        <div>
          <img className='profileImg' src="https://avatars.githubusercontent.com/u/91236511?v=4" alt="" />
        </div>
        <div className='sec'>
          <h1>Hello Everyone I'm</h1>
            <h1> Girish Vishveshvar Bhat</h1>
          <div>I'm A <div id='typewriter'>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
              words={["Web Developer.", "Full Stack Web Developer.", "MERN Stack Developer"]}
            />
          </div>
          <h3>See my resume</h3>
          <button className='btn'>
          <a
          target="_blank"
          href='https://drive.google.com/file/d/1F_gCF6RI2kHbEER4ld6Wvm6DCy22rwxL/view?usp=share_link'
          className="resume"  >Resume</a>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home