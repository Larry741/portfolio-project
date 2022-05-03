import { useEffect, useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import WidthContext from "../../store/width-context";

import heroImage from "../../../public/home-hongkong.jpg";

import styles from "./HeaderHero.module.scss";

const allText = `Hey, I'm Orion, Front-End Developer`;
const dynText = ["Back-End", "Blockchain", "Front-End"];

let i = 0;
let count = 0

const typeWriter = (el) => {
  let speed = 200 - Math.random() * 100;
  let j = 0;

  let text = allText.slice(0, i + 1);

  if (i <= allText.length - 1 &&  count == 0) {
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
                        <span  id=${styles.dynText}>${text.slice(
          16,
          25
        )}</span> <span>${text.slice(26)}</span>`;
        i++;
        j++;

      }
    }

    if (i === allText.length) {
      el.classList.remove(styles.wrap);
      return typeWriter2();
    }
    
    setTimeout(typeWriter.bind(null, el), speed);
  }
};

let prevCount
let oldText;
let oldTextLength;
let newText;
let newTextLength
let counter = 0;
let add = 1;

const typeWriter2 = () => {
  const spanEl = document.getElementById(`${styles.dynText}`);
  if (spanEl) {
    spanEl.className = styles.wrap;
  }

  const reduceString = (string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const slicedString = string.slice(0, string.length - 1);

        resolve(slicedString);
      }, 50);
    });
  };

  const increaseString = (string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const slicedString = string.slice(0, add);

        add++;
        resolve(slicedString);
      }, 50);
    });
  };

  const iterate = async () => {
    if (counter == 3) {
      counter = 0;
    } 


    if (counter == 0) prevCount = 2;
    if (counter == 1) prevCount = 0;
    if (counter == 2) prevCount = 1;

    if (!oldText) {
      oldText = dynText[prevCount];
      oldTextLength = oldText.length;
    }

    for (i = 0; i <= oldTextLength; i++) {
      const reducedString = await reduceString(oldText);
      oldText = reducedString;
      spanEl.innerText = reducedString;
    }

    if (!newText) {
      newText = dynText[counter]
      newTextLength = newText.length;
    }
    
    for (i = 0; i <= newTextLength; i++) {
      const increasedString = await increaseString(newText);
      spanEl.innerText = increasedString;
    }
    
    add = 0;
    counter = counter + 1;
    oldText = null;
    newText = null;
    setTimeout(() => {
      iterate();
    }, 5000)
  };

  setTimeout(() => {
    iterate();
  }, 5000);
};

const calculateBackgroundPercent = (
  el,
  elWidth,
  elDisplacement,
  screenSlit,
  operation,
  eventClientX
) => {
  const elPercentageWidth = elWidth / 20;
  let num;

  // el.style.opacity = 1;

  if (operation === "greater than") {
    num = elPercentageWidth * 20;

    if (eventClientX >= elDisplacement + screenSlit * 2 + elPercentageWidth) {
      num = elPercentageWidth * 19;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 2
    ) {
      num = elPercentageWidth * 18;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 3
    ) {
      num = elPercentageWidth * 17;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 4
    ) {
      num = elPercentageWidth * 16;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 5
    ) {
      num = elPercentageWidth * 15;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 6
    ) {
      num = elPercentageWidth * 14;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 7
    ) {
      num = elPercentageWidth * 13;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 8
    ) {
      num = elPercentageWidth * 12;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 9
    ) {
      num = elPercentageWidth * 11;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 10
    ) {
      num = elPercentageWidth * 10;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 11
    ) {
      num = elPercentageWidth * 9;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 12
    ) {
      num = elPercentageWidth * 8;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 13
    ) {
      num = elPercentageWidth * 7;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 14
    ) {
      num = elPercentageWidth * 6;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 15
    ) {
      num = elPercentageWidth * 5;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 16
    ) {
      num = elPercentageWidth * 4;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 17
    ) {
      num = elPercentageWidth * 3;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 18
    ) {
      num = elPercentageWidth * 2;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 19
    ) {
      num = elPercentageWidth * 1;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 20
    ) {
      num = 0;
    }
    if (
      eventClientX >=
      elDisplacement + screenSlit * 2 + elPercentageWidth * 21
    ) {
      num = 0;
      // el.style.opacity = 0;
    }
  }
  el.style.width = `${num}px`;
};

const HeaderHero = () => {
  const [displayInitialImage, setDisplayInitialImage] = useState(true);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const introRef = useRef(null);
  const {
    docWidth,
    introRefRight,
    introRefWidth,
  } = useContext(WidthContext);

  useEffect(() => {
    const header1 = document.getElementById("header1");
    const intro = document.querySelectorAll(`.${styles.intro}`);
    introRef.current = intro[0];

    setTimeout(typeWriter.bind(null, header1), 3000);
  }, [])

  useEffect(() => {
    const intro = document.querySelectorAll(`.${styles.intro}`);
    introRef.current = intro[0];
    const heroBg = document.getElementById("hero");
    leftDivRef.current = document.getElementById(styles.left);
    rightDivRef.current = document.getElementById(styles.right);

    const setDisplayToFalse = () => {
      setDisplayInitialImage(false);
    };

    const imageChangeHandler = async () => {
      setTimeout(() => {
        heroBg.style.backgroundImage = "url(/home-hongkong.jpg)";
      }, 2000);
      setTimeout(setDisplayToFalse, 3000);
      setTimeout(() => {
        intro.forEach((el) => {
          el.style.opacity = "1";
        });
      }, 2500);
    };

    imageChangeHandler();
  })

  const mouseOverHandler = useCallback(
    (event) => {
      const eventTarget = event.target.closest("div");
      const halfScreen = docWidth / 2;
      let introRefTimeout;
      
      if (eventTarget.id === styles.right) {
        // const diff = event.clientX - halfScreen;
        const percentDiff = (event.clientX - halfScreen / docWidth) * 100;
        const screenSlit = halfScreen - introRefRight;

        if (event.clientX >= introRefRight + screenSlit * 2) {
          
          clearTimeout(introRefTimeout);
          introRefTimeout = setTimeout(
            calculateBackgroundPercent(
              introRef.current,
              introRefWidth,
              introRefRight,
              screenSlit,
              "greater than",
              event.clientX
            ),
            500
          );
        } else if (event.clientX <= introRefRight + screenSlit * 2) {
          introRef.current.style.removeProperty("width");
        }

        rightDivRef.current.style.flexBasis = `${50 + percentDiff}%`;
        leftDivRef.current.style.flexBasis = `${50 - percentDiff}%`;
      } else if (eventTarget.id === styles.left) {
        // const diff = halfScreen - event.clientX;
        const percentDiff = (halfScreen - event.clientX / docWidth) * 100;

        leftDivRef.current.style.flexBasis = `${50 + percentDiff}%`;
        rightDivRef.current.style.flexBasis = `${50 - percentDiff}%`;
      }
    },
    [docWidth, introRefWidth, introRefRight]
  );

  const mouseOutHandler = (event) => {
    leftDivRef.current.style.flexBasis = `50%`;
    rightDivRef.current.style.flexBasis = `50%`;
    introRef.current.style.removeProperty("width");
  };

  const dummyMouseEvent = () => {};

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
      <div id={"intro1"} className={`${styles.intro}`}>
        <h1 id={"header1"} style={{margin: 0 + 'px'}} className={`${styles.wrap} mainHeader`}></h1>
      </div>
      <div className={styles.socials}>
        <Link href='#'><a><FaTwitter /></a></Link>
        <Link href='#'><a><FaLinkedinIn /></a></Link>
        <Link href='#'><a><FaGithub /></a></Link>
        <Link href='#'><a><FaInstagram /></a></Link>
      </div>
    </div>
  );
};

export default HeaderHero;
