import React from 'react'
import SkillStatus from '../../atoms/SkillStatus/SkillStatus'

const Skills = () => {

  const skillLists = [
    {skillName: 'Html/Css', skillProcess: '70%'},
    {skillName: 'JavaScript', skillProcess: '50%'},
    {skillName: 'React', skillProcess: '40%'},
    {skillName: 'React-Router', skillProcess: '30%'},
    {skillName: 'Redux', skillProcess: '30%'},
  ]

  return (
    <div>
      {skillLists.map((skill, index) => (
        <SkillStatus 
          key={index} 
          skillName={skill.skillName} 
          skillProcess={skill.skillProcess} 
        />
      ))}
    </div>
  )
}

export default Skills
