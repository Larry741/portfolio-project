import { useEffect } from "react";

import Portfolio from "./portfolio/portfolio";
import styles from "./Works.module.scss";

import { FaReact, FaSass, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import desktop from "../../public/Desktop temp.svg";
import laptop from "../../public/laptop temp.svg";
import tablet from "../../public/tablet temp.png";
import phone from "../../public/phone temp.svg";

const portfolio = [
  {
    name: "Adventours",
    paragraph: `For when you need a break from your partner but already got a
          babysitter. Now couples can go to different events in similar
          locations and at the same time. A group programming project with Can
          Rozanes, Irene Truong and Jamie Yeung.`,
    icons: [FaHtml5, FaCss3Alt, FaReact, FaSass, SiFirebase],
    svg: laptop,
    svgSub: phone,
    index: 0,
  },
  {
    name: "Adventours",
    paragraph: `For when you need a break from your partner but already got a
          babysitter. Now couples can go to different events in similar
          locations and at the same time. A group programming project with Can
          Rozanes, Irene Truong and Jamie Yeung.`,
    icons: [FaHtml5, FaCss3Alt, FaReact, FaSass, SiFirebase],
    svg: tablet,
    svgSub: phone,
    index: 1,
  },
  {
    name: "Adventours",
    paragraph: `For when you need a break from your partner but already got a
          babysitter. Now couples can go to different events in similar
          locations and at the same time. A group programming project with Can
          Rozanes, Irene Truong and Jamie Yeung.`,
    icons: [FaHtml5, FaCss3Alt, FaReact, FaSass, SiFirebase],
    svg: desktop,
    svgSub: phone,
    index: 2,
  },
];

const Works = () => {
  useEffect(() => {
    const portfolioElements = document.querySelectorAll(".portfolio");
    let viewportHeight;
    let viewportScrollY;

    const showBox = (entries, observer) => {
      // viewportHeight = window.innerHeight;
      // viewportScrollY = window.scrollY;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide");
        }
      });
      // observer.disconnect();
    };

    let options = {
      root: null,
      rootMargin: "0px",
      threshold: [.5, .6, .7, 0.8, 0.9, 1],
    };

    let observer = new IntersectionObserver(showBox, options);

    portfolioElements.forEach((el) => {
      observer.observe(el);
    });
  });

  return (
    <section id="work" className={styles.section}>
      <div className={styles.header}>
        <div></div>
        <h2 className="primaryHeader">Latest Works</h2>
        <div></div>
      </div>
      <div className={styles.portContainer}>
        {portfolio.map((item, index) => {
          return <Portfolio key={index} data={item} />;
        })}
      </div>
    </section>
  );
};

export default Works;
