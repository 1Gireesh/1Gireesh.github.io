import React from 'react';
import '../css/skills.css';


const skills = [
  {
    category: 'Programming Languages',
    list: [
      {
        img:
          '/images/javascript-icon-png-23.jpg',
        name: 'JavaScript',
      },
      {
        img: '/images/ts.png',
        name: 'Typescript',
      }
    ],
  },
  {
    category: 'Databases',
    list: [
      {
        img: '/images/mysql.png',
        name: 'MYSQL',
      },
      {
        img: '/images/mongo.png',
        name: 'mongoDB',
      },
      {
        img: '/images/firebase.png',
        name: 'Firebase',
      },
    ],
  },
  {
    category: 'Web Development',
    list: [
      {
        img: '/images/react.png',
        name: 'React',
      },
      {
        img:
          'http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png',
        name: 'Node.js',
      },
      {
        img: '/images/react-native.png',
        name: 'React_Native',
      },
      {
        img: '/images/bootstrap.png',
        name: 'Bootstrap',
      },
      {
        img: '/images/jquery.png',
        name: 'JQuery',
      },
      {
        img:
          '/images/html-5-logo-png-transparent.png',
        name: 'HTML',
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg',
        name: 'CSS',
      }
    ],
  },
  {
    category: 'Others',
    list: [
      {
        img: '/images/docker.png',
        name: 'Docker',
      },
      {
        img: '/images/git.png',
        name: 'Git',
      },
      {
        img: '/images/postman.svg',
        name: 'Postman',
      },
    ],
  },
];

function SkillItem(props) {
  const { skills } = props;
  return <div className="skills-section">
    <div className="skills-container">
      {skills && skills.map((skill) => <div className="skills-box" key={skill.name}>
        <div className="skills-title">
          <div className="skills-img">
            <img src={skill.img} alt="" className="skills-icons" />
          </div>
          <h5>{skill.name}</h5>
        </div>
      </div>)}
    </div>
  </div>;
}

function Skills(props) {
  return <section id="skill">
    <h1>Skills </h1>
      <div className="skill-cols">
        {skills.map((group) => <div key={group.category}>
          <h4>{group.category}</h4>
          <SkillItem skills={group.list} />
        </div>)}
    </div>
  </section>;
}

export default Skills;