import Link from "next/link";
import { useRef, useEffect } from "react";

import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "./HeaderLinks.module.scss";

const HeaderLinks = () => {
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    aboutRef.current = document.getElementById('about');
    workRef.current = document.getElementById("work");
    contactRef.current = document.getElementById("contact");
  })

  const scrollTo = (event) => {
    const eventTarget = event.target.innerText;

    console.log(eventTarget);
    if (eventTarget === "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (eventTarget === "Work") {
      workRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (eventTarget === "Contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logobox}></div>
      <div className={styles.navLinks}>
        <span onClick={scrollTo}>About</span>
        <span onClick={scrollTo}>Work</span>
        <span onClick={scrollTo}>Contact</span>
        <span>Resume</span>
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