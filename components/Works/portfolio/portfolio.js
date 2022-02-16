
import Image from "next/image";
import Link from "next/link";

import styles from "./Portfolio.module.scss";
import image from "../../../public/table.png";

const Portfolio = ({ data, index}) => {

  return (
    <>
      {index % 2 == 0 ? (
        <div className={styles.portfolio}>
          <div className={styles.control}>
            <h3>{data.name}</h3>
            <div className={styles.textControl}>
              <p>{data.paragraph}</p>
              <div className={styles.iconControl}></div>
              {data.icons.map((Icon, index) => {
                return <Icon key={index} />;
              })}
            </div>
            <div className={styles.buttonControl}>
              <div>
                <Link href="#">
                  <a>View Project</a>
                </Link>
                <Link href="#">
                  <a>View Github</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.imageControl}>
            <Image src={image} alt="work image" width={390} height={330} />
          </div>
        </div>
      ) : (
        <div className={styles.portfolio}>
          <div className={styles.imageControl}>
            <Image src={image} alt="work image" width={390} height={330} />
          </div>
          <div className={styles.control2}>
            <h3>{data.name}</h3>
            <div className={styles.textControl}>
              <p>{data.paragraph}</p>
              <div className={styles.iconControl}></div>
              {data.icons.map((Icon, index) => {
                return <Icon key={index} />;
              })}
            </div>
            <div className={styles.buttonControl}>
              <div>
                <Link href="#">
                  <a>View Project</a>
                </Link>
                <Link href="#">
                  <a>View Github</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Portfolio;