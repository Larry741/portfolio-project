/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';

import styles from './About.module.scss';

const About = () => {


  return (
    <section id='about' className={styles.about}>
      <div className={styles.header}>
        <div></div>
        <h2>About</h2>
        <div></div>
      </div>
      <div className={styles.body}>
        <div className={styles.para}>
          <p>
            I'm a self-taught full stack web developer with over a decade
            worth of experience working with all types of companies and
            individuals.
          {/* have gained invaluable knowledge ?? */}
          </p>
          <p>
            I'm passionate about creating fascinating solutions to problems
            and bringing ideas to life writing clean, efficient and
            maintainable code.
          </p>
          <p>
            I currently work remotely with a selected freelance client base
            being open for new opportunities.
          </p>
          <Link href="#">
            <a>Get In Touch!</a>
          </Link>
        </div>
        <div className={styles.stack}>
          <span className={styles.html}>Html</span>
          <span className={styles.react}>ReactJS</span>
          <span className={styles.next}>Next</span>
          <span className={styles.css}>Css</span>
          <span className={styles.node}>NodeJS</span>
          <span className={styles.express}>ExpressJS</span>
          <span className={styles.javascript}>Javascript</span>
          <span className={styles.mongo}>Mongodb</span>
          <span className={styles.sass}>sass</span>
          <span className={styles.git}>Git</span>
          <span className={styles.Firebase}>Redux</span>
          <span>Gulp</span>
        </div>
      </div>
    </section>
  );
}

export default About;