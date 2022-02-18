
import styles from './Footer.module.scss';
import { RiCopyrightLine } from "react-icons/ri";

const Footer = () => {

  return (
    <div className={styles.footer}>
      <div className={styles.imageBox}></div>
      <span>
        <RiCopyrightLine />
        <p>2021 Made with love by Kosi</p>
      </span>
    </div>
  );
}

export default Footer;