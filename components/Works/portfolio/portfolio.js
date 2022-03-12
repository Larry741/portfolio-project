import TextComponent from "./textComponent";

import styles from "./Portfolio.module.scss";
import ImageComponent from "./imageComponent";

const Portfolio = ({ data }) => {

  return (
    <>
      {data.index % 2 == 0 ? (
        <div id="portfolio1" className={`${styles.portfolio} portfolio ${styles.portfolio1}`}>
          <TextComponent data={data} index={1} />
          <ImageComponent data={data} index={data.index} />
        </div>
      ) : (
        <div id='portfolio2' className={`${styles.portfolio} portfolio ${styles.portfolio2}`}>
          <ImageComponent data={data} index={2} />
          <TextComponent data={data} index={2} />
        </div>
      )}
    </>
  );
}

export default Portfolio;