import { useEffect, useRef, useContext, useState, useCallback} from "react";
import Image from "next/image";
import WidthContext from "../../store/width-context";

import heroImage from "../../../public/home-hongkong.jpg";

import styles from "./HeaderHero.module.scss";

const allText = [`Hey, I'm Orion, Web Developer`, `Front-End`, `Back-End`];

let i = 0;
let counter = 1

const typeWriter = (el, index, count) => {
  let speed = 200 - Math.random() * 100;
  let j = 0;
  let fullText;

  if (counter >= 2) {
    el.classList.add(styles.wrap);
  }
  
  fullText = allText[index];
  
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
      typeWriter.bind(null, document.getElementById(`header${counter}`), ++index, counter == 2 ? 9 : 7 ),
      100
    );
  }
};

const calculateBackgroundPercent = (el, elWidth, elDisplacement, screenSlit, operator, eventClientX) => {
  const elPercentageWidth = elWidth /20;
  let num
   
  if (operator === 'greater than') {
    num = elPercentageWidth * 20;

    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth) {
      num = elPercentageWidth * 19;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 2) {
      num = elPercentageWidth * 18;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 3) {
      num = elPercentageWidth * 17;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 4) {
      num = elPercentageWidth * 16;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 5) {
      num = elPercentageWidth * 15;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 6) {
      num = elPercentageWidth * 14;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 7) {
      num = elPercentageWidth * 13;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 8) {
      num = elPercentageWidth * 12;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 9) {
      num = elPercentageWidth * 11;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 10) {
      num = elPercentageWidth * 10;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 11) {
      num = elPercentageWidth * 9;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 12) {
      num = elPercentageWidth * 8;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 13) {
      num = elPercentageWidth * 7;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 14) {
      num = elPercentageWidth * 6;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 15) {
      num = elPercentageWidth * 5;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 16) {
      num = elPercentageWidth * 4;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 17) {
      num = elPercentageWidth * 3;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 18) {
      num = elPercentageWidth * 2;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 19) {
      num = elPercentageWidth * 1;
    }
    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth * 20) {
      num = 0;
    }
  } else if (operator === 'less than') {
    num = elPercentageWidth * 20;

    if (eventClientX <= (elDisplacement - screenSlit * 2) - elPercentageWidth ) {
      num = elPercentageWidth * 19;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - elPercentageWidth * 2 ) {
      num = elPercentageWidth * 18;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 3) ) {
      num = elPercentageWidth * 17;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 4)) {
      num = elPercentageWidth * 16;
    } 
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 5)) {
      num = elPercentageWidth * 15;
    } 
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 6)) {
      num = elPercentageWidth * 14;
    } 
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 7)) {
      num = elPercentageWidth * 13;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 8)) {
      num = elPercentageWidth * 12;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 9)) {
      num = elPercentageWidth * 11;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 10)) {
      num = elPercentageWidth * 10;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 11)) {
      num = elPercentageWidth * 9;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 12)) {
      num = elPercentageWidth * 8;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 13)) {
      num = elPercentageWidth * 7;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 14)) {
      num = elPercentageWidth * 6;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 15)) {
      num = elPercentageWidth * 5;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 16)) {
      num = elPercentageWidth * 4;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 17)) {
      num = elPercentageWidth * 3;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 18)) {
      num = elPercentageWidth * 2;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 19)) {
      num = elPercentageWidth * 1;
    }
    if (eventClientX <= (elDisplacement - screenSlit * 2) - (elPercentageWidth * 20)) {
      num = 0;
    }
  }
  el.style.width = `${num}px`;
}

const HeaderHero = () => {
  const [displayInitialImage, setDisplayInitialImage] = useState(true);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const introRef = useRef(null);
  const introRef2 = useRef(null);
  const introRef3 = useRef(null);
  const { docWidth, introRefRight, introRef2Right, introRef3Left, introRefWidth, introRef2Width, introRef3Width } = useContext(WidthContext);
  
  useEffect(() => {
    const header1 = document.getElementById('header1');
    introRef.current = document.getElementById('intro1');
    introRef2.current = introRef.current.nextElementSibling;
    introRef3.current = document.getElementById("intro3");
    
    setTimeout(typeWriter.bind(null, header1, 0, 29), 3000);
  }, []);

  useEffect(() => {
    const heroBg = document.getElementById('hero');
    leftDivRef.current = document.getElementById(styles.left);
    rightDivRef.current = document.getElementById(styles.right);

    const setDisplayToFalse = () => {
      setDisplayInitialImage(false);
    }

    const imageChangeHandler = async() => {
      setTimeout(() => {
        heroBg.style.backgroundImage = "url(/home-hongkong.jpg)";
      }, 2000);
      setTimeout(setDisplayToFalse, 3000);
    }
    imageChangeHandler();
  })


  const mouseOverHandler = useCallback((event) => {
    const eventTarget = event.target.closest('div');
    const halfScreen = docWidth / 2; 
    let introRefTimeout;
    let intro2RefTimeout;
    let intro3RefTimeout;
    
    if (eventTarget.id === styles.right) {
      const diff = event.clientX - halfScreen;
      const percentDiff = diff / docWidth * 100;
      const screenSlit = halfScreen - introRefRight;
      const screenSlit2 = halfScreen - introRef2Right;

      if (event.clientX >=  introRef2Right + screenSlit2 * 2 ) {
        clearTimeout(intro2RefTimeout);
        intro2RefTimeout = setTimeout(calculateBackgroundPercent(introRef2.current, introRef2Width, introRef2Right, screenSlit2, 'greater than', event.clientX), 500);
        
        if (event.clientX >=  introRefRight + screenSlit * 2 ) {
          clearTimeout(introRefTimeout);
          introRefTimeout = setTimeout(calculateBackgroundPercent(introRef.current, introRefWidth, introRefRight, screenSlit, 'greater than', event.clientX), 500);
        } 
      } else if (event.clientX <= introRef2Right + screenSlit2 * 2) {
        introRef.current.style.removeProperty("width");
        introRef2.current.style.removeProperty("width");
        introRef3.current.style.removeProperty('width');
      }
      
      rightDivRef.current.style.flexBasis = `${50 + percentDiff}%`;
      leftDivRef.current.style.flexBasis = `${50 - percentDiff}%`;
    } else if (eventTarget.id === styles.left) {
      const diff = halfScreen - event.clientX;
      const percentDiff = (diff / docWidth) * 100;
      const screenSlit =  introRef3Left - halfScreen;

      if (event.clientX <= introRef3Left - screenSlit * 2 ) {
        clearTimeout(intro3RefTimeout);
        intro3RefTimeout = setTimeout(
          calculateBackgroundPercent(
            introRef3.current,
            introRef3Width,
            introRef3Left,
            screenSlit,
            "less than",
            event.clientX
          ),
          500
        );
      } else {
        introRef.current.style.removeProperty('width');
        introRef2.current.style.removeProperty('width');
        introRef3.current.style.removeProperty("width");
      }

      leftDivRef.current.style.flexBasis = `${50 + percentDiff}%`;
      rightDivRef.current.style.flexBasis = `${50 - percentDiff}%`;
    } 
  }, [docWidth, introRefWidth , introRef2Width, introRef2Right, introRefRight, introRef3Left, introRef3Width])

  const mouseOutHandler = (event) => {
    leftDivRef.current.style.flexBasis = `50%`;
    rightDivRef.current.style.flexBasis = `50%`;
    introRef.current.style.removeProperty('width');
    introRef2.current.style.removeProperty('width');
    introRef3.current.style.removeProperty("width");
  }

  const dummyMouseEvent = () => {}

  return (
    <div id="hero" className={styles.hero}>
      <div
        onMouseOut={!displayInitialImage ? mouseOutHandler : dummyMouseEvent}
        onMouseMove={!displayInitialImage ? mouseOverHandler : dummyMouseEvent}
        id={styles.left}
      >
        <Image
          src={heroImage}
          alt="my Image"
          layout="fixed"
          objectFit="fill"
          priority
        />
      </div>
      <div
        onMouseOut={!displayInitialImage ? mouseOutHandler : dummyMouseEvent}
        onMouseMove={!displayInitialImage ? mouseOverHandler : dummyMouseEvent}
        id={styles.right}
      >
        {displayInitialImage && (
          <Image
            src={heroImage}
            alt="my Image"
            layout="fixed"
            objectFit="fill"
            priority
          />
        )}
      </div>
      <div id={"intro1"} className={`${styles.intro} ${styles.intro1}`}>
        <h1 id={"header1"} className={`${styles.wrap} ${styles.wrap1}`}></h1>
      </div>
      <div id={"intro2"} className={`${styles.intro} ${styles.intro2}`}>
        <h2 id={"header2"} className={`${styles.wrap2}`}></h2>
      </div>
      <bdo dir='rtl'>
      <div id={"intro3"} className={`${styles.intro} ${styles.intro3}`}>
          <h2 id={"header3"} className={`${styles.wrap3}`}></h2>
      </div>
      </bdo>
    </div>
  );
};

export default HeaderHero;
