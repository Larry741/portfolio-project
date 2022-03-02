import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import heroImage from "../../../public/home-hongkong.jpg";

import styles from "./HeaderHero.module.scss";

const totalText = [`Hey, I'm Orion, Web Developer`, `Front End`, `Back End`];

let i = 0;
let counter = 1

const typeWriter = (el, index, count) => {
  let speed = 200 - Math.random() * 100;
  let j = 0;
  let fullText;

  if (counter >= 2) {
    el.classList.add(styles.wrap);
  }
  
  fullText = totalText[index];
   
  let text = fullText.slice(0, i+1)
  
  if (i <= fullText.length - 1) {
    if (el.id == "header1") {
      if (i <= 4) {
        el.innerHTML = `<span>${text}</span>`;
        i++;
        j++;
      } else if (i <= 13) {
        el.innerHTML = `<span>${text.slice(0, 4)}</span><br />
                        <span>${text.slice(4)}</span>`;
        i++;
        j++;
      } else if (i > 13) {
        el.innerHTML = `<span>${text.slice(0, 4)}</span><br />
                        <span>${text.slice(4, 15)}</span><br />
                        <span>${text.slice(16)}</span>`;
        i++;
        j++;
      }
    } else if (el.id !== "header1") {
      el.innerText = text;
      i++;
      j++;
    }

    setTimeout(typeWriter.bind(null, el, index, count), speed);
  }

  if (fullText === text && index < 3 && j === 0 && i == count) {
    i = 0
    ++counter
    if (el.classList.contains(styles.wrap)) {
      el.classList.remove(styles.wrap);
    }
    setTimeout(
      typeWriter.bind(null, document.getElementById(`header${counter}`), ++index, 9),
      100
    );
  }
};

const HeaderHero = () => {
  const docWidthRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  
  useEffect(() => {
    const header1 = document.getElementById('header1');
    docWidthRef.current = document.documentElement.clientWidth;
    leftDivRef.current = document.getElementById(styles.left);
    rightDivRef.current = leftDivRef.current.nextElementSibling;
    
    setTimeout(typeWriter.bind(null, header1, 0, 29), 500);
  
    // return () => {
    //   clearTimeout(typing);
    // }
  }, []);

  const mouseOverHandler = (event) => {
    const eventTarget = event.target.closest('div');

    const halfScreen = docWidthRef.current / 2; 
    
    if (eventTarget.id === styles.right) {
      const diff = event.clientX - halfScreen;
      const percentDiff = diff / docWidthRef.current * 100;

      rightDivRef.current.style.flexBasis = `${50 + percentDiff}%`;
      leftDivRef.current.style.flexBasis = `${50 - percentDiff}%`;
    } else if (eventTarget.id === styles.left) {
      const diff = halfScreen - event.clientX;
      const percentDiff = (diff / docWidthRef.current) * 100;

      leftDivRef.current.style.flexBasis = `${50 + percentDiff}%`;
      rightDivRef.current.style.flexBasis = `${50 - percentDiff}%`;
    }
  }

  const mouseOutHandler = (event) => {
    leftDivRef.current.style.flexBasis = `50%`;
    rightDivRef.current.style.flexBasis = `50%`;
  }

  return (
    <div id="hero" className={styles.hero}>
      <div onMouseOut={mouseOutHandler} onMouseMove={mouseOverHandler} id={styles.left}>
        <Image src={heroImage} alt='my Image'  layout='fixed' objectFit="fill" />
      </div>
      <div onMouseOut={mouseOutHandler} onMouseMove={mouseOverHandler} id={styles.right}>
      </div>
      <div id={styles.intro}>
        <h1 id={"header1"} className={`${styles.wrap} ${styles.wrap1}`}></h1>
      </div>
      <div id={styles.intro2}>
        <h2 id={"header2"} className={`${styles.wrap2}`}></h2>
      </div>
      <div id={styles.intro3}>
        <h2 id={"header3"} className={`${styles.wrap3}`}></h2>
      </div>
    </div>
  );
};

export default HeaderHero;
