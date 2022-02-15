
import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";

import image from '../../public/table.png';
import styles from './Works.module.scss';

const Works = () => {
  
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div></div>
        <h2>Portfolio</h2>
        <div></div>
      </div>
      <div className={styles.portfolio}>
        <div className={styles.control}>
          <h3>Adventours</h3>
          <p>
            For when you need a break from your partner but already got a
            babysitter. Now couples can go to different events in similar
            locations and at the same time. A group programming project with Can
            Rozanes, Irene Truong and Jamie Yeung.
          </p>
          <div className={styles.iconControl}>
            <FaHtml5 />
            <FaSass />
            <FaReact />
          </div>
          <div className={styles.buttonControl}>
            <div>
              <Link href="#">
                <a>View Project</a>
              </Link>
              <Link href="#">
                <a>View Github</a>
              </Link>
            </div>
          </div>
        </div>
        <Image src={image} alt="work image" width={430} height={330} />
      </div>
    </section>
  );
}

export default Works;