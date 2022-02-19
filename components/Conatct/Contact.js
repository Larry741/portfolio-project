/* eslint-disable react/no-unescaped-entities */
import useInput from "../Hooks/use-Input";

import styles from "./Contact.module.scss";

const Contact = () => {
  const {
    enteredValue: enteredName,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputBlurHandler: nameInputBlurHandler,
    valueChangeHandler: nameValueChangeHandler,
    reset: resetName,
  } = useInput((value) => value.length > 3);
  const {
    enteredValue: enteredEmail,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailValueChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    enteredValue: enteredComment,
    inputIsValid: commentIsValid,
    inputIsInvalid: commentIsInvalid,
    inputBlurHandler: commentInputBlurHandler,
    valueChangeHandler: commentValueChangeHandler,
    reset: resetComment,
  } = useInput((value) => value.length > 3);

  const formIsValid = emailIsValid && nameIsValid && commentIsValid;

  const inputfocusHandler = (event) => {
    if (event.target.id === 'message') {
      event.target.previousElementSibling.id = `${styles["label-focus1"]}`;
      return;
    }
    event.target.previousElementSibling.id = `${styles["label-focus"]}`;
  };

  const submitformHandler = (event) => {
    event.preventDefault();

    
  }

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
        <form onSubmit={submitformHandler} className={styles.form}>
          <div className={`${styles.control} ${ nameIsInvalid && styles.invalid}`}>
            <label htmlFor="name">Name</label>
            <input
              onFocus={inputfocusHandler}
              onChange={nameValueChangeHandler}
              onBlur={nameInputBlurHandler}
              required
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className={`${styles.control} ${emailIsInvalid && styles.invalid}`}>
            <label htmlFor="email">E-Mail Address</label>
            <input
              onFocus={inputfocusHandler}
              onChange={emailValueChangeHandler}
              onBlur={emailInputBlurHandler}
              required
              type="text"
              id="email"
              placeholder="E-Mail Address"
            />
          </div>
          <div className={`${styles.control} ${commentIsInvalid && styles.invalid}`}>
            <label htmlFor="message">Message</label>
            <textarea
              onFocus={inputfocusHandler}
              onChange={commentValueChangeHandler}
              onBlur={commentInputBlurHandler}
              id="message"
              required
              placeholder="Message"
            ></textarea>
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
