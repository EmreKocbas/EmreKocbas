import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/heroImg.jpg'
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import CV from "../../assets/cv.docx"
import { useTheme } from '../../common/ThemeContext';
function Hero() {
  const {theme, toggleTheme}= useTheme()
  const themeIcon = theme === 'light' ? <IoMdSunny /> : <IoMdMoon style={{color:"white"}}/>
  const githubIcon = theme === 'light' ? <FaGithubSquare /> : <FaGithubSquare style={{color:"white"}}/>
  const linkedinIcon = theme === 'light' ? <FaLinkedin /> : <FaLinkedin style={{color:"white"}}/>
  

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="Emre KOÇBAŞ'ın profil resmi"/>
            <a onClick={toggleTheme} src={themeIcon} className={styles.colorMode} alt="Color mode icon">{themeIcon}</a>
            {/* <p className={styles.colorMode} alt="Color mode icon"><IoMdMoon/></p> */}
        </div>
        <div className={styles.info}>
            <h1>
              Emre
              <br/>
              Koçbaş
            </h1>
            <h2>Frontend Developer</h2>
            <span>
              <a  href="https://www.linkedin.com/in/emre-ko%C3%A7ba%C5%9F-764269259/" target='_blank' >{linkedinIcon}</a>
              <a href="https://github.com/EmreKocbas" target='_blank'>{githubIcon}</a>
            </span>
            <p className={styles.description}>
            Merhaba! Ben Emre, ticari işletmelere modern ve kullanıcı dostu React web uygulamaları geliştirme konusunda tutkulu bir yazılım geliştiricisiyim.
            </p>
            <a href={CV} download>
              <button className="hover">CV</button>
            </a>
        </div>
    </section>
  )
}

export default Hero