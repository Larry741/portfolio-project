/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from "react";
import useInput from "../Hooks/use-Input";
import Loader from "../Ui/Loader";

import styles from "./Contact.module.scss";

const displayMessage = (color, message, duration, messageRef) => {
  messageRef.current.style.color = color;
  messageRef.current.innerText = message;

  setTimeout(() => {
    messageRef.current.innerText = '';
  }, duration)
}

const Contact = () => {
  const [loading, setIsLoading] = useState(false);
  const messageRef = useRef(null);
  const {
    enteredValue: enteredName,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputRef: nameInputRef,
    labelRef: nameLabelRef,
    inputBlurHandler: nameInputBlurHandler,
    valueChangeHandler: nameValueChangeHandler,
    reset: resetName,
  } = useInput((value) => value.length > 3);
  const {
    enteredValue: enteredEmail,
    inputIsValid: emailIsValid,
    inputIsInvalid: emailIsInvalid,
    inputRef: emailInputRef,
    labelRef: emailLabelRef,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailValueChangeHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    enteredValue: enteredComment,
    inputIsValid: commentIsValid,
    inputIsInvalid: commentIsInvalid,
    inputRef: commentInputRef,
    labelRef: commentLabelRef,
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

  const submitformHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/mail', {
        method: 'post',
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          message: enteredComment
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        console.log(response);
        throw new Error('Couldn\'t send Email.')
      }

      const resData = await response.json();

      resetComment();
      resetEmail();
      resetName();
      displayMessage('green', resData, 5000, messageRef);
    } catch (err) {
      displayMessage('red', err.message, 5000, messageRef);
    }
    setIsLoading(false);
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <div></div>
        <h2>Contact Me</h2>
        <div></div>
      </div>
      <div className={styles.body}>
        <div>
          <p>
            I'm interested in freelance opportunities - especially ambitious or
            large projects, <br />
            However if you have other request or need help, don't hesitate to
            hit me up!
          </p>
          <form onSubmit={submitformHandler} className={styles.form}>
            <div
              className={`${styles.control} ${nameIsInvalid && styles.invalid}`}
            >
              <label htmlFor="name" ref={nameLabelRef}>
                Name
              </label>
              <input
                onFocus={inputfocusHandler}
                onChange={nameValueChangeHandler}
                onBlur={nameInputBlurHandler}
                required
                ref={nameInputRef}
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div
              className={`${styles.control} ${
                emailIsInvalid && styles.invalid
              }`}
            >
              <label htmlFor="email" ref={emailLabelRef}>
                E-Mail Address
              </label>
              <input
                onFocus={inputfocusHandler}
                onChange={emailValueChangeHandler}
                onBlur={emailInputBlurHandler}
                required
                ref={emailInputRef}
                type="text"
                id="email"
                placeholder="E-Mail Address"
              />
            </div>
            <div
              className={`${styles.control} ${
                commentIsInvalid && styles.invalid
              }`}
            >
              <label htmlFor="message" ref={commentLabelRef}>
                Message
              </label>
              <textarea
                onFocus={inputfocusHandler}
                onChange={commentValueChangeHandler}
                onBlur={commentInputBlurHandler}
                id="message"
                required
                ref={commentInputRef}
                placeholder="Message"
              ></textarea>
            </div>
            <div className={styles.buttonControl}>
              <button disabled={!formIsValid || loading}>
                Send message{loading && <Loader />}
              </button>
              {<span className={styles.message} ref={messageRef}></span>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
