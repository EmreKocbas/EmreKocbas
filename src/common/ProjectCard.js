import React from 'react'
import styles from '../components/Projects/ProjectsStyles.module.css'
function ProjectCard({ src, link, p }) {
  return (
    <a href={link} target='_blank' className={styles.gap}>
      <img src={src} alt="weatherProject" />
      <p>{p}</p>
    </a>
  )
}

export default ProjectCard