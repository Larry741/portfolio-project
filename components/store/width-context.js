import react, { useEffect, useState } from "react";

const WidthContext = react.createContext({
  docWidth: 0,
  docHeight: 0,
  introRefRight: 0,
  introRef2Right: 0,
  resetWidth: () => {},
});

export const WidthContextProvider = (props) => {
  const [docWidth, setDocWidth] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
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
      document.body.firstElementChild.remove();
      window.removeEventListener("resize", resetWidthFunction);
    };
  }, [])

  useEffect(() => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.scrollHeight);
    const pattern = trianglify({
      xColors: ["#38495a", "#1b2735", "#090a0f"],
      yColors: "match",
      width: docWidth,
      height: docHeight,
      colorFunction: trianglify.colorFunctions.sparkle(0.2),
      cellSize: 50,
    });
    document.body.prepend(pattern.toSVG());
    document.body.firstElementChild.style.position = "absolute";
    document.body.firstElementChild.style.top = 0;
    document.body.firstElementChild.style.zIndex = -20;
  }, [])

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
