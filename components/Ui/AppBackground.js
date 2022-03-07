import { useContext, useEffect } from "react";
import WidthContext from "../store/width-context";

const AppBackground = () => {
  const { docWidth, docHeight} = useContext(WidthContext);

  useEffect(() => {
    // setWidth(document.documentElement.clientWidth);
    // setHeight(document.documentElement.scrollHeight);
    // const pattern = trianglify({
    //   xColors: ["#38495a", "#1b2735", "#090a0f"],
    //   yColors: "match",
    //   width: docWidth,
    //   height: docHeight,
    //   colorFunction: trianglify.colorFunctions.sparkle(0.2),
    //   cellSize: 50,
    // });
    // document.body.prepend(pattern.toSVG());
    // document.body.firstElementChild.style.position = "absolute";
    // document.body.firstElementChild.style.top = 0;
    // document.body.firstElementChild.style.zIndex = -20;
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}; 

export default AppBackground;
