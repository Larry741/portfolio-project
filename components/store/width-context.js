import react, { useEffect, useRef, useState } from "react";

const WidthContext = react.createContext({
  docWidth: 0,
  docHeight: 0,
  introRefRight: 0,
  resetWidth: () => {},
});

export const WidthContextProvider = (props) => {
  const [docWidth, setDocWidth] = useState(1);
  const [docHeight, setDocHeight] = useState(1);
  const [introRefRight, setIntroRefRight] = useState(0);
  const [introRefWidth, setIntroRefWidth] = useState(0);

  useEffect(() => {
    const intro1 = document.getElementById('intro1');

    setDocWidth(document.documentElement.clientWidth);
    setDocHeight(document.documentElement.scrollHeight);
    setIntroRefRight(intro1.getBoundingClientRect().right);
    setIntroRefWidth(intro1.getBoundingClientRect().width);

    const resetWidthFunction = () => {
      const latestDocHeight = document.documentElement.scrollHeight;
      const latestDocWidth = window.innerWidth;

      let docHeightDiff = Math.abs(docHeight - latestDocHeight);

      var scrollBarWidth = window.innerWidth - document.documentElement.offsetWidth;
      console.log(window.innerWidth, document.documentElement.offsetWidth, document.body.clientWidth);

      setDocWidth(latestDocWidth + scrollBarWidth);
      setDocHeight(latestDocHeight > docHeight ? latestDocHeight :  latestDocHeight - docHeightDiff);
      setIntroRefRight(intro1.getBoundingClientRect().right);
      setIntroRefWidth(intro1.getBoundingClientRect().width);
    };

    window.addEventListener("resize", resetWidthFunction);

    return () => {
      window.removeEventListener("resize", resetWidthFunction);
    };
  },)

  useEffect(() => {
    const radialGradient = (radius) => ({centroid, xScale}) => {
      const distanceFromCenter = Math.sqrt(
        Math.pow(docWidth / 2 - centroid.x, 2) + Math.pow(docHeight / 2 - centroid.y, 2)
      );
      return(xScale(distanceFromCenter / radius))
    }

    // figure out the gradient radius required to cover the image dimensions:
    const gradientRadius = Math.sqrt(
      Math.pow(docWidth / 2, 2) + Math.pow(docHeight / 2, 2)
    );

     console.log(docWidth);

    const pattern = trianglify({
      xColors: ["#38495a", "#1b2735", "#090a0f"],
      yColors: ["#090a0f", "#1b2735", "#38495a"],
      width: docWidth,
      height: Math.abs(docHeight - 10),
      colorFunction: radialGradient(gradientRadius),
      // colorFunction: trianglify.colorFunctions.sparkle(0.2)
      cellSize: 70,
    });
    
    document.body.prepend(pattern.toSVG());
    document.body.firstElementChild.style.position = "absolute";
    document.body.firstElementChild.style.top = 0;
    document.body.firstElementChild.style.zIndex = -20;

    return () => {
      document.body.firstElementChild.remove();
    }
  }, [docWidth, docHeight])

  // const resetWidthHandler = (width) => {
  //   setDocWidth(width);
  // }

  return (
    <WidthContext.Provider
      value={{
        docWidth,
        docHeight,
        introRefRight,
        introRefWidth,
        // resetWidth: resetWidthHandler,
      }}
    >
      {props.children}
    </WidthContext.Provider>
  );
};

export default WidthContext;
