import React from 'react'
import './Skills.css'

const skills = [
  {name: 'Html/Css', process: '70%'},
  {name: 'JavaScript', process: '50%'},
  {name: 'React', process: '40%'},
  {name: 'React-Router', process: '30%'},
  {name: 'Redux', process: '30%'},
]

const Skills = () => {
  return (
    <div>
      {skills.map(skill => (
        <div key={skill.name.toLowerCase()} className='skill-status'>
          <h6>{skill.name}</h6>
          <span className='skill-process' style={{width: `${skill.process}`}}></span>
        </div>
      ))}
    </div>
  )
}

export default Skills
