/* eslint-disable react/no-unescaped-entities */

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <div></div>
        <h2>Contact Me</h2>
        <div></div>
      </div>
      <div className={styles.body}>
        <p>
          I'm interested in freelance opportunities - especially ambitious or
          large projects, <br />
          However if you have other request or need help, don't hesitate to hit
          me up!
        </p>
        <form className={styles.form}>
          <div className={`${styles.control} ${styles.invalid}`}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className={`${styles.control} ${styles.invalid}`}>
            <label htmlFor="email">E-Mail Address</label>
            <input type="text" id="email" placeholder="E-Mail Address" />
          </div>
          <div className={`${styles.control} ${styles.invalid}`}>
            <label htmlFor="password">Message</label>
            <textarea id="password" required placeholder="Message"></textarea>
          </div>
          <div>
            <button>Send message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
