import React from 'react'
import SkillStatus from '../../atoms/SkillStatus/SkillStatus'

const Skills = ({ skillLists }) => {
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
