import react, { useEffect, useState } from "react";

const WidthContext = react.createContext({
  docWidth: 0,
  docHeight: 0,
  introRefRight: 0,
  introRef2Right: 0,
  resetWidth: () => {},
});

export const WidthContextProvider = (props) => {
  const [docWidth, setDocWidth] = useState(1);
  const [docHeight, setDocHeight] = useState(1);
  const [introRefRight, setIntroRefRight] = useState(0);
  const [introRef2Right, setIntroRef2Right] = useState(0);
  const [introRef3Left, setIntroRef3Left] = useState(0);
  const [introRefWidth, setIntroRefWidth] = useState(0);
  const [introRef2Width, setIntroRef2Width] = useState(0);
  const [introRef3Width, setIntroRef3Width] = useState(0);

  useEffect(() => {
    const intro1 = document.getElementById('intro1');
    const intro2 = document.getElementById('intro2');
    const intro3 = document.getElementById("intro3");

    setDocWidth(document.documentElement.clientWidth);
    setDocHeight(document.documentElement.scrollHeight);
    setIntroRefRight(intro1.getBoundingClientRect().right);
    setIntroRef2Right(intro2.getBoundingClientRect().right);
    setIntroRef3Left(intro3.getBoundingClientRect().left);
    setIntroRefWidth(intro1.getBoundingClientRect().width);
    setIntroRef2Width(intro2.getBoundingClientRect().width);
    setIntroRef3Width(intro3.getBoundingClientRect().width);


    const resetWidthFunction = () => {
      setDocWidth(document.documentElement.clientWidth);
      setDocHeight(document.documentElement.scrollHeight);
      setIntroRefRight(intro1.getBoundingClientRect().right);
      setIntroRef2Right(intro2.getBoundingClientRect().right);
      setIntroRef3Left(intro3.getBoundingClientRect().left);
      setIntroRefWidth(intro1.getBoundingClientRect().width);
      setIntroRef2Width(intro2.getBoundingClientRect().width);
      setIntroRef3Width(intro3.getBoundingClientRect().width);
    };

    window.addEventListener("resize", resetWidthFunction);

    return () => {
      window.removeEventListener("resize", resetWidthFunction);
    };
  }, [])

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

    // const pattern = trianglify({
    //   xColors: ["#38495a", "#1b2735", "#090a0f"],
    //   yColors: ["#090a0f", "#1b2735", "#38495a"],
    //   width: docWidth,
    //   height: docHeight,
    //   colorFunction: radialGradient(gradientRadius),
    //   // colorFunction: trianglify.colorFunctions.sparkle(0.2)
    //   cellSize: 80,
    //   strokeWidth: 50,
    // });
    // document.body.prepend(pattern.toSVG());
    // document.body.firstElementChild.style.position = "absolute";
    // document.body.firstElementChild.style.top = 0;
    // document.body.firstElementChild.style.zIndex = -20;

    // return () => {
    //   document.body.firstElementChild.remove();
    // }
  }, [docWidth, docHeight])

  const resetWidthHandler = (width) => {
    setWidth(width);
  }

  return (
    <WidthContext.Provider
      value={{
        docWidth,
        docHeight,
        introRefRight,
        introRef2Right,
        introRef3Left,
        introRefWidth,
        introRef2Width,
        introRef3Width,
        resetWidth: resetWidthHandler,
      }}
    >
      {props.children}
    </WidthContext.Provider>
  );
};

export default WidthContext;
