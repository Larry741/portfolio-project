import Image from "next/image";

import styles from "./ImageComponent.module.scss";

const ImageComponent = ({data}) => {

  let classes;
  if (data.index == 0) {
    classes = styles.imageControl1;
  } else if (data.index == 1) {
    classes = styles.imageControl2;
  } else  {
    classes = styles.imageControl3;
  }

  return (
    <div className={classes}>
      <Image
        src={data.svg}
        alt="work image"
        // layout="responsive"
        // width={480}
        // height={280}
      />
      <div className={styles.secondaryContainer}>
        <Image src={data.svgSub} alt="work image" width={120} height={170} />
      </div>
    </div>
  );
};

export default ImageComponent;