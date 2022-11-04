import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "../css/skills.css"
export default function Skills() {
  return (
    <div id='skills'>
      <div className='calender'>
        <GitHubCalendar username="1Gireesh" />
      </div>
      <div>
   <div className="skills-section">
    <div className="skills-header">
     <h1>Skills</h1>   
     </div>
     <div className="skills-container">
       
      <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://img.icons8.com/color/512/html-5.png"     alt="" className="skills-icons"/>
        </div>
         <h3>HTML 5</h3>
        </div>
       </div>
       
       
        <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" className="skills-icons"/>
        </div>
        <h3>CSS3</h3>
        </div>
       </div>
       
       
        <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://img.icons8.com/color/2x/javascript.png" alt="" className="skills-icons"/>
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
       </div>
       
          <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" className="skills-icons"/>
        </div>
        <h3>NODE.JS</h3>
        </div>
       </div>
       
          <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" className="skills-icons"/>
        </div>
        <h3>REACT</h3>
        </div>
       </div>
       
          <div className="skills-box">
       <div className="skills-title">
       <div className="skills-img">
        <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" className="skills-icons"/>
        </div>
        <h3>express js</h3>
        </div>
       </div>
       
       
       </div>
    
     </div>
   
  </div>
    </div>
  )
}
