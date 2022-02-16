

import { BiDownArrowAlt } from "react-icons/bi";
import styles from './HeaderScroll.module.scss'

const HeaderScroll = () => {
  return (
    <>
      <span className={styles.scroll}>
        <p>Scroll Down </p>
        <BiDownArrowAlt />
      </span>
      <span className={styles.scrollRight}>
        <p>Scroll Down </p>
        <BiDownArrowAlt />
      </span>
    </>
  ); 
}

export default HeaderScroll;