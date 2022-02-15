import Link from "next/link";

import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.logobox}></div>
      <div className={styles.navLinks}>
        <Link href='#'><a>About</a></Link>
        <Link href='#'><a>work</a></Link>
        <Link href='#'><a>Blog</a></Link>
        <Link href='#'><a>contact</a></Link>
      </div>
      <div className={styles.socials}>
        <Link href='#'><a><FaTwitter /></a></Link>
        <Link href='#'><a><FaLinkedinIn /></a></Link>
        <Link href='#'><a><FaGithub /></a></Link>
        <Link href='#'><a><FaInstagram /></a></Link>
      </div>
    </div>
  );
}

export default HeaderLinks;