import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';
import { RiCopyrightLine } from "react-icons/ri";

import logo from "../../public/down.jpg";

const Footer = () => {

  return (
    <section className={styles.footer}>
      <div className={styles.imageBox}><Image src={logo} alt="logo" /></div>
      <div className={`${styles.socials} footerLinks`}>
        <Link href='#'><a>Twitter</a></Link>
        <Link href='#'><a>LinkedIn</a></Link>
        <Link href='#'><a>Github</a></Link>
        <Link href='#'><a>instagram</a></Link>
      </div>
      <span>
        <RiCopyrightLine />
        <p>2021 Made with love by Orion</p>
      </span>
    </section>
  );
}

export default Footer;