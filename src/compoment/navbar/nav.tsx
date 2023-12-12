import { Button } from 'antd'
import style from './style.module.scss'
import { Link } from 'react-router-dom';
const nav = () => {
  return (
  <>
  <div className={style.SectionMainDiv}> 
  <div className={style.MianDivNavbar}>
    <div><h1 className={style.Logo}>Shadow</h1></div>
    <div>
        <ul className={style.UlDesin}>
           <li><a> <Link to="/fetch">Fetch</Link></a></li>
            <li><a> <Link to="/post">Post</Link></a></li>
            <li><a> <Link to="/delete">Delete</Link></a></li>
          <Button className={style.loginButton}>Login</Button>
        </ul>
    </div>
    </div>
    </div>
 </>
  )
}

export default nav