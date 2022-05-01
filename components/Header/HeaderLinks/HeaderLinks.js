import Image from "next/image";
import { useRef, useEffect, useState } from "react";

import styles from "./HeaderLinks.module.scss";
import logo from '../../../public/down.jpg';

const HeaderLinks = () => {
  const [showfirstNav, setShowfirstNav] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();
  const navBarRef = useRef()

  useEffect(() => {
    aboutRef.current = document.getElementById('about');
    workRef.current = document.getElementById("work");
    contactRef.current = document.getElementById("contact");
    navBarRef.current = document.getElementById("navbar");
    const y = aboutRef.current.getBoundingClientRect().top

    const checkHeight = (height) => {
      if (height > 10) {
        setShowfirstNav(true);
        setIsLoading(false);
      } else if (height < 10) {
        setShowfirstNav(false);
        setIsLoading(false);
      }
    }

    checkHeight(y);

    let timer;
    let debounceSpeed;
    const showNav = (event) => {
      const y = aboutRef.current.getBoundingClientRect().top;
      if ( Math.abs(y) > 100) {
        debounceSpeed = 1000;
      } else {
        debounceSpeed = null
      }
      clearTimeout(timer);
      
      timer = setTimeout(checkHeight.bind(null, y), debounceSpeed ? debounceSpeed : 10)
    }
    

    document.addEventListener("scroll", showNav);

    // const showNav = (entries, observer) => {
    //   entries.forEach((entry) => {
    //     const y = entry.boundingClientRect.y;
    //     console.log(entry.intersectionRatio);
    //     if (entry.intersectionRatio > .88 && y < 0) {
    //       // navBarRef.current.classList.add(styles.solid);
    //       setShowfirstNav(false)
    //     }
    //     if (entry.intersectionRatio < 0.88 && y > 0) {
    //       setShowfirstNav(true)
    //       // navBarRef.current.classList.remove(styles.solid);
    //     }
    //   });
    // };

    // let options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: [.88, 1],
    // };

    // let observer = new IntersectionObserver(showNav, options);

    // observer.observe(aboutRef.current);
  }, [])

  const scrollTo = (event) => {
    const eventTarget = event.target.innerText;

    console.log(eventTarget);
    if (eventTarget === "About") {
      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (eventTarget === "Portfolio") {
      workRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (eventTarget === "Contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const stickyNavbar = () => {

  }

  const content = (
    <>
      {!isLoading ? (
        <>
          <div className={styles.logobox}>
            <Image
              src={logo}
              alt="logo"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.navLinks}>
            <span onClick={scrollTo} className="tertiaryText">
              About
            </span>
            <span onClick={scrollTo} className="tertiaryText">
              Portfolio
            </span>
            <span onClick={scrollTo} className="tertiaryText">
              Contact
            </span>
            <span className="tertiaryText">Resume</span>
          </div>
        </>
      ) : null}
    </>
  );

  return (
    <>
      {showfirstNav ? (
        <div id="navbar" className={`${styles.navbar} ${styles.navbar1}`}>
          {content}
        </div>
      ) : (
        <div id="navbar" className={`${styles.navbar} ${styles.navbar2}`}>
          {content}
        </div>
      )}
    </>
  );
}

export default HeaderLinks;