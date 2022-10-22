import React from 'react'
import "../css/project.css";
import monday from "../imgs/monday.png"
import wrike from "../imgs/wrike.png"

export default function Project() {
  return (
    <div id='project'>
      <div className='head'>
        <h2 className='projectText'>Projects</h2>
        <h3 className='projectText'>Here are a few projects I've worked on recently.</h3>
      </div>

      <div className='p1'>
        <div>
          <img src={monday} alt="Boat project image" />
          <div className='tst'>
            <h2 className='projectText'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/919/919825.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>
        </div>

        <div className='bla'>
          <h2 className='projectText'>Monday.com Clone</h2>
          <li className='projectUl'>monday.com  found at Monday.com is an online office management system.</li>
          <li className='projectUl'>Users and add product to the Cart</li>
          <li className='projectUl'>Users can login and SignUp</li>
          <div className='p1Btn'>
            <button><a href="https://comforting-torrone-333700.netlify.app/" target='_blank' >Live</a></button>
            <button><a href="https://github.com/1Gireesh/monday.com-clone" target='_blank' >View Code</a> </button>
          </div>
        </div>
      </div>

      <div className='p1'>
        <div >
          <img src={wrike} alt="Boat project image" />
          <div className='tst'>
            <h2 className='projectText'>Tech Stack</h2>
            <div className='techStack'>
              <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="" />
            </div>
          </div>
        </div>

        <div className='bla'>
          <h2 className='projectText'>wrike.com Clone</h2>
          <li className='projectUl'>wrike.com  found at Monday.com is an online office management system.</li>
          <li className='projectUl'>Users can login and SignUp</li>
          <li className='projectUl'>User can see the products in the Home Page</li>
          <div className='p1Btn'>
            <button><a href="https://funny-snickerdoodle-b6b996.netlify.app/" target='_blank' >Live</a></button>
            <button><a href="https://github.com/1Gireesh/wrike.com-clone" target='_blank' >View Code</a> </button>
          </div>
        </div>
      </div>


    </div>
  )
}
