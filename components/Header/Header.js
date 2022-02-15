
import HeaderHero from './HeaderHero/HeaderHero';
import HeaderLinks from './HeaderLinks/HeaderLinks';

import styles from './Header.module.scss';

const Header = () => {

  return <section className={styles.header}>
    <HeaderLinks />
    <HeaderHero />
  </section>
}

export default Header;