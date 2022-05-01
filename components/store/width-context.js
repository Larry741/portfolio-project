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

      setDocWidth(latestDocWidth + scrollBarWidth);
      setDocHeight(latestDocHeight > docHeight ? latestDocHeight :  latestDocHeight - docHeightDiff);
      setIntroRefRight(intro1.getBoundingClientRect().right);
      setIntroRefWidth(intro1.getBoundingClientRect().width);
    };

    window.addEventListener("resize", resetWidthFunction);

    return () => {
      window.removeEventListener("resize", resetWidthFunction);
    };
  }, [docHeight]);

  return (
    <WidthContext.Provider
      value={{
        docWidth,
        docHeight,
        introRefRight,
        introRefWidth,
      }}
    >
      {props.children}
    </WidthContext.Provider>
  );
};

export default WidthContext;
