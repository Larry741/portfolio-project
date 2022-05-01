import Link from "next/link";

import styles from "./TextComponent.module.scss";

const TextComponent = ({data, index}) => {

  const control2 = index == 1 ? styles.control1 : styles.control2;
  

  return (
    <div className={`${styles.control} ${control2}`}>
      <h3 className="secondaryHeader">{data.name}</h3>
      <div className={styles.textControl}>
        <p className="secondaryText">{data.paragraph}</p>
        <div className={styles.iconControl}>
          {data.icons.map((Icon, index) => {
            return <Icon key={index} />;
          })}
        </div>
      </div>
      <div className={styles.buttonControl}>
        <div className="buttonText">
          <Link href="#">
            <a>View Project</a>
          </Link>
          <Link href="#">
            <a>View Github</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TextComponent;