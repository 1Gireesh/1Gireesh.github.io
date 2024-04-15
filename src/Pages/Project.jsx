import React from 'react';
import "../css/project.css";
import monday from "../imgs/monday.png";
import wrike from "../imgs/wrike.png";

const projects = [
  {
    name: "Monday.com Clone",
    description: "An online office management system. Users can add products to the Cart, login, and SignUp",
    liveLink: "https://comforting-torrone-333700.netlify.app/",
    codeLink: "https://github.com/1Gireesh/monday.com-clone",
    techStack: [
      "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
      "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      "https://cdn-icons-png.flaticon.com/512/3334/3334886.png",
      "https://cdn-icons-png.flaticon.com/512/919/919825.png",
      "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
    ],
    image: monday
  },
  {
    name: "Wrike.com Clone",
    description: "An online office management system. Users can login, SignUp, and see products on the Home Page",
    liveLink: "https://funny-snickerdoodle-b6b996.netlify.app/",
    codeLink: "https://github.com/1Gireesh/wrike.com-clone",
    techStack: [
      "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
      "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
    ],
    image: wrike
  },
  {
    name: "Fatsecret.com Clone",
    description: "A food and health caring website. Users can login, SignUp, and see food recommendations on the Home Page",
    liveLink: "https://genuine-donut-0306d9.netlify.app/",
    codeLink: "https://github.com/1Gireesh/fatsecret-clone",
    techStack: [
      "https://cdn-icons-png.flaticon.com/512/1199/1199124.png",
      "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      "https://cdn-icons-png.flaticon.com/512/1051/1051277.png"
    ],
    image: "https://angel.co/cdn-cgi/image/width=732,height=457.5,fit=cover,gravity=0.5x0.5,quality=90,format=auto/https://d2gn4xht817m0g.cloudfront.net/p/media_uploads/images/original/000/667/163/667163-cf378423ea9020b882e133adb80f17b6ffee5dc8.jpg"
  }
];

export default function Project() {
  return (
    <div id='project'>
      <div className='head'>
        <h2 className='projectText'>Projects</h2>
        <h3 className='projectText'>Here are a few projects I've worked on recently.</h3>
      </div>

      {projects.map((project, index) => (
        <div key={index} className='p1'>
          <div>
            <img src={project.image} className='pimg' alt="Project" />
            <div className='tst'>
              <h2 className='projectText'>Tech Stack</h2>
              <div className='techStack'>
                {project.techStack.map((icon, i) => (
                  <img key={i} src={icon} alt="" />
                ))}
              </div>
            </div>
          </div>

          <div className='bla'>
            <h2 className='projectText'>{project.name}</h2>
            <ul>
              {project.description.split('.').map((line, i) => (
                <li key={i} className='projectUl'>{line}</li>
              ))}
            </ul>
            <div className='p1Btn'>
              <button><a href={project.liveLink} target='_blank' rel="noreferrer">Live</a></button>
              <button><a href={project.codeLink} target='_blank' rel="noreferrer">View Code</a></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
