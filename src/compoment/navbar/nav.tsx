import { Button } from 'antd'
import style from './style.module.scss'
const nav = () => {
  return (
  <>
  <div className={style.SectionMainDiv}> 
  <div className={style.MianDivNavbar}>
    <div><h1 className={style.Logo}>Shadow</h1></div>
    <div>
        <ul className={style.UlDesin}>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contect</a></li>
            <li><Button className={style.loginButton}>Login</Button></li>
        </ul>
    </div>
    </div>
    </div>
 </>
  )
}

export default nav