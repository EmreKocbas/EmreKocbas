
import { FaCheck } from "react-icons/fa6";
import { useTheme } from '../common/ThemeContext'


function SkillList({skill}) {

    const {theme}= useTheme()
    const Check = theme === 'light' ? <FaCheck /> : <FaCheck style={{color:"white"}}/>
  
    return (
    <span>
            {Check}
            <p>{skill}</p>
            </span>
  )
}

export default SkillList