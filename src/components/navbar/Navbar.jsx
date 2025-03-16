import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to='/'>
        <img className={styles.logo} src='../../logo_only_big-title1.png' alt="로고" />
      </Link>
      <ul className={styles.menu}>
        <li>국내영화</li>
        <li>해외영화</li>
      </ul>
      <div className={styles.btns}>
        <CiSearch className={styles.btn_search} />
        <FaUser className={styles.btn_profile} />
      </div>
    </div>
  )
}

export default Navbar