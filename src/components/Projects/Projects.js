import React from 'react'
import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import weather from '../../assets/weather.PNG'
import asia from '../../assets/asia.PNG'
import text from '../../assets/textGeneratorApp.PNG'
import chat from '../../assets/chat.PNG'
import todo from '../../assets/todo.PNG'

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link='https://emrekocbas.github.io/textGeneratorApp-React/'
          src={text}
          p='textGeneratorApp'
        />
        <ProjectCard
          link='https://github.com/EmreKocbas/weatherProject-React'
          src={weather}
          p='weatherProject'
        />
        <ProjectCard
          link="https://github.com/EmreKocbas/asianKitchen-sMenu-JS/tree/main/asianKitchen'sMenu"
          src={asia}
          p='asianKitchen-sMenu'
        />
        <ProjectCard
          link="https://github.com/EmreKocbas/chatApp"
          src={chat}
          p='chatApp'
        />
        <ProjectCard
          link="https://github.com/EmreKocbas/toDoList-JS/tree/main/toDoList"
          src={todo}
          p='toDoList'
        />
      </div>
    </section>
  )
}

export default Projects