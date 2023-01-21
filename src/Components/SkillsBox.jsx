import React from 'react'

function SkillsBox(props) {
  return (
    <div className={props.classname}>
        <span>{props.logo}</span>
        <h2>{props.name}</h2>
    </div>
  )
}

export default SkillsBox