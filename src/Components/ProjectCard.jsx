import React from 'react'
import {FiExternalLink} from "react-icons/fi"
function ProjectCard(props) {
  return (
    <div className='conatiner'>
        <img src={props.image} alt="Project_Picture"></img>
        <div className='overlay'>
            <div className='content'>
                <a href={props.link} target="_blank" rel="noreferrer"><FiExternalLink/></a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard