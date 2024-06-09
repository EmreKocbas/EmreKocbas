import React from 'react'

function ProjectCard({src, link, p}) {
  return (
    <a href={link}target='_blank'>
                <p>{p}</p>
            </a>
  )
}

export default ProjectCard