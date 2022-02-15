/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import Link from 'next/link';


import image from '../../public/download.png'
import styles from './About.module.scss';

const About = () => {


  return (
    <section className={styles.about}>
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
        <Image src={image} alt="stack" layout="responsive" />
      </div>
    </section>
  );
}

export default About;