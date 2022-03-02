import { useEffect, useState } from "react";
import Trianglify from "trianglify";

const AppBackground = () => {
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  // useEffect(() => {
  //   setWidth(document.documentElement.clientWidth);
  //   setHeight(document.documentElement.scrollHeight);

  //   const pattern = trianglify({
  //     xColors: ["#38495a", "#1b2735", "#090a0f"],
  //     yColors: "match",
  //     width: width,
  //     height: height,
  //     colorFunction: trianglify.colorFunctions.sparkle(0.2),
  //     cellSize: 50,
  //   });
  //   document.body.prepend(pattern.toSVG());
  //   document.body.firstElementChild.style.position = "absolute";
  //   document.body.firstElementChild.style.top = 0;
  //   document.body.firstElementChild.style.zIndex = -20;

  //   const resetParameters = () => {
  //     setWidth(document.documentElement.clientWidth);
  //     setHeight(document.documentElement.scrollHeight);
  //   };

  //   window.addEventListener("resize", resetParameters);

  //   return () => {
  //     document.body.firstElementChild.remove();
  //     window.removeEventListener("resize", resetParameters);
  //   };
  // }, [width, height]);

  return <></>;
};

export default AppBackground;
