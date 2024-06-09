import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            link='https://emrekocbas.github.io/textGeneratorApp-React/'
            p='textGeneratorApp'
            />
            <ProjectCard 
            link='https://emrekocbas.github.io/textGeneratorApp-React/'
            p='textGeneratorApp'
            />
            <ProjectCard 
            link='https://emrekocbas.github.io/textGeneratorApp-React/'
            p='textGeneratorApp'
            />
            <ProjectCard 
            link='https://emrekocbas.github.io/textGeneratorApp-React/'
            p='textGeneratorApp'
            />
        </div>
    </section>
  )
}

export default Projects