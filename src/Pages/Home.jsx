import React, { useEffect } from 'react'
import "../css/home.css";

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
          <div>I'm A <h2 className='typing'> FullStackWebDeveloper</h2></div>
        </div>
      </div>
    </div>
  )
}

export default Home