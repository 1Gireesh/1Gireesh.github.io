import React from 'react'
import "../css/about.css"

function About() {
  return (
    <div>
      <div className='container'>
        <img src="https://wallpapercave.com/wp/wp2465958.jpg" className='bgimg' alt="" />
        <div>
          <img className='profileImg' src="https://avatars.githubusercontent.com/u/91236511?v=4" alt="" />
        </div>
        <div className='sec'>
          <div>
            <h1 style={{ display: "inline" }}>I'm </h1>
            <h1 style={{ display: "inline" }}>Girish Vishveshvar Bhat</h1>
          </div>
          <h2>
            An independent and self-motivated person, with proven and experienced Backend Development Skills. Looking to secure a challenging position in a reputable company to explore a problem solving environment and expand my knowledge.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default About