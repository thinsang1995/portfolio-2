import React from 'react'
import './SkillStatus.css'

const SkillStatus = ({ skillName, skillProcess}) => {
  return (
    <div className='skill-status'>
      <h6>{skillName}</h6>
      <span className='skill-process' style={{width: `${skillProcess}`}}></span>
    </div>
  )
}

export default SkillStatus