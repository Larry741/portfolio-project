
import HeaderHero from './HeaderHero/HeaderHero';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import HeaderScroll from "./HeaderScroll/HeaderScroll";

import styles from './Header.module.scss';

const Header = () => {

  return <section className={styles.header}>
    <HeaderHero />
    <HeaderScroll />
  </section>
}

export default Header;