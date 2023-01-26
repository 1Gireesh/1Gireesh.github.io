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
          <h2>Frontend</h2>
          <div className="skills-container">
            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="https://img.icons8.com/color/512/html-5.png" alt="" className="skills-icons" />
                </div>
                <h3>HTML 5</h3>
              </div>
            </div>


            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" className="skills-icons" />
                </div>
                <h3>CSS3</h3>
              </div>
            </div>


            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="https://img.icons8.com/color/2x/javascript.png" alt="" className="skills-icons" />
                </div>
                <h3>JAVASCRIPT</h3>
              </div>
            </div>


            <div className="skills-box">
              <div className="skills-title">
                <div className="skills-img">
                  <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" className="skills-icons" />
                </div>
                <h3>REACT</h3>
              </div>
            </div>


          </div>


          <h2>Backend</h2>
          <div className="bkd">
            <div className="skills">
              <div className="">
                <div className="skills-img">
                  <img src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png" alt="" className="skills-icons" />
                </div>
                <h3>express js</h3>
              </div>
              <div className="">
                <div className="skill">
                  <div className="skills-img">
                    <img src="http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png" alt="" className="skills-icons" />
                  </div>
                  <h3>NODE.JS</h3>
                </div>
              </div>
            </div>
          </div>

        </div>

        <h2 className='skillDes'>Tools I use</h2>
        <div className='haba haba1' style={{ width: '34%', gap: '5vw', margin: 'auto' }}>
          <div >
            <img width="70px" src="https://cdn-icons-png.flaticon.com/512/906/906324.png" alt="vscode logo" />
            <h4>VS Code</h4>
          </div>
          <div>
            <img width="70px" src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png" alt="github logo" />
            <h4>GitHub</h4>
          </div>
          <div>
            <img width="70px" src="https://image.pngaaa.com/42/95042-middle.png" alt="postman logo" />
            <h4>Postman</h4>
          </div>
        </div>

      </div>
      <h2 style={{ margin: "30px",marginTop: "50px" }}>My Statastics</h2>
      <div className='stats'>
       
        <img src="https://camo.githubusercontent.com/1d78e81bde2e92e955b182538d3ccb29c3dca5c9c9bcacdc578404e01f34cbf9/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d316769726565736826" alt="" />
      </div>

    </div>
  )
}
