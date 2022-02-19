import TextComponent from "./textComponent";

import styles from "./Portfolio.module.scss";
import ImageComponent from "./imageComponent";

const Portfolio = ({ data }) => {

  return (
    <>
      {data.index % 2 == 0 ? (
        <div className={styles.portfolio}>
          <TextComponent data={data} index={1} />
          <ImageComponent data={data} index={data.index} />
        </div>
      ) : (
        <div className={styles.portfolio}>
          <ImageComponent data={data} index={2} />
          <TextComponent data={data} index={data.index} />
        </div>
      )}
    </>
  );
}

export default Portfolio;