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
          </div></div>
        </div>
      </div>
    </div>
  )
}

export default Home