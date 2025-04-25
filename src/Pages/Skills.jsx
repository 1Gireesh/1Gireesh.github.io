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
        img: '/images/java.png',
        name: 'Java',
      },
      {
        img: '/images/python.png',
        name: 'Python',
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
    category: 'Frameworks',
    list: [
      {
        img: '/images/react.png',
        name: 'React',
      },
      {
        img:
          '/images/express.png',
        name: 'Express.js',
      },
      {
        img: '/images/react-native.png',
        name: 'React_Native',
      },
      {
        img: '/images/nextjs.png',
        name: 'Next.js',
      },
      {
        img: '/images/flask.png',
        name: 'Flask',
      },
      {
        img: '/images/flutter.png',
        name: 'Flutter',
      },
    ],
  },
  {
    category: 'Tools',
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
        img: '/images/vim.svg',
        name: 'Vim',
      },
      {
        img: '/images/linux.png',
        name: 'Linux',
      }
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
  return <section id="skills">
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