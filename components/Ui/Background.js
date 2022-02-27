
import styles from './Background.module.scss';

const Background = () => {

  return (
    <div id={styles.background}>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
    </div>
  );
}

export default Background;