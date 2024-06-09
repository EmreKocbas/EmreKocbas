import SkillList from '../../common/SkillList';
import styles from './SkillsStyles.module.css'

function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList skill="HTML"/>
            <SkillList skill="CSS"/>
            <SkillList skill="JavaScript"/>
            <SkillList skill="TypeScript"/>
            <SkillList skill="Node"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList skill="React"/>
            <SkillList skill="Java"/>
            <SkillList skill="Python"/>
            <SkillList skill="C#"/>
            <SkillList skill="MySQL"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillList skill="Redux"/>
            <SkillList skill="Git"/>
            <SkillList skill="Bootstrap"/>
        </div>
    </section>
  )
}

export default Skills