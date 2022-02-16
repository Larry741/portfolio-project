

import Portfolio from './portfolio/portfolio';
import styles from './Works.module.scss';

import { FaReact, FaSass, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";


const portfolio = [
  {
    name: "Adventours",
    paragraph: `For when you need a break from your partner but already got a
          babysitter. Now couples can go to different events in similar
          locations and at the same time. A group programming project with Can
          Rozanes, Irene Truong and Jamie Yeung.`,
    icons: [FaHtml5, FaCss3Alt, FaReact, FaSass, SiFirebase],
  },
  {
    name: "Adventours",
    paragraph: `For when you need a break from your partner but already got a
          babysitter. Now couples can go to different events in similar
          locations and at the same time. A group programming project with Can
          Rozanes, Irene Truong and Jamie Yeung.`,
    icons: [FaHtml5, FaCss3Alt, FaReact, FaSass, SiFirebase],
  },
];

const Works = () => {
  
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div></div>
        <h2>Portfolio</h2>
        <div></div>
      </div>
      <div className={styles.portContainer} >
        {portfolio.map((item, index) => {
          return <Portfolio key={index} data={item} index={index} />;
        })}
      </div>
    </section>
  );
}

export default Works;