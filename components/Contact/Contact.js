/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useEffect } from "react";
import useInput from "../Hooks/use-Input";
// import Loader from "../Ui/Loader";

import MapContact from "./MapContact";

import styles from "./Contact.module.scss";

const contactArray = [
  { key: "Phone:", value: "+2347068399842",  },
  { key: "Email:", value: "kosimbanefo@gmail.com" },
  { key: "Website:", value: "www.kosimbanefo.dev" },
  { key: "Address:", value: "Lagos Nigeria" },
]

const displayMessage = (color, message, duration, messageRef) => {
  messageRef.current.style.color = color;
  messageRef.current.innerText = message;

  setTimeout(() => {
    messageRef.current.innerText = "";
  }, duration);
};

const Contact = () => {
  const [loading, setIsLoading] = useState(false);
  const messageRef = useRef(null);
  const {
    enteredValue: enteredName,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputIsTouched: nameIsTouched,
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
    inputIsTouched: emailIsTouched,
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
    inputIsTouched: commentIsTouched,
    inputRef: commentInputRef,
    labelRef: commentLabelRef,
    inputBlurHandler: commentInputBlurHandler,
    valueChangeHandler: commentValueChangeHandler,
    reset: resetComment,
  } = useInput((value) => value.length > 3);

  useEffect(() => {
    const iconFeature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat([3.4219, 6.4281])),
      name: "Somewhere near Lagos",
    });

    const map = new ol.Map({
      target: "map",
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM(),
        }),
        new ol.layer.Vector({
          source: new ol.source.Vector({
            features: [iconFeature],
          }),
          style: new ol.style.Style({
            image: new ol.style.Icon({
              anchor: [0, 48],
              anchorXUnits: "fraction",
              anchorYUnits: "pixels",
              src: "https://openlayers.org/en/latest/examples/data/icon.png",
            }),
          }),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([3.4219, 6.4281]),
        zoom: 6,
      }),
    });

    return () => {
      document.getElementById('map').innerHTML = '';
    }
  })

  const formIsValid = emailIsValid && nameIsValid && commentIsValid;

  const inputfocusHandler = (event) => {
    if (event.target.id === "message") {
      event.target.previousElementSibling.id = `${styles["label-focus1"]}`;
      return;
    }
    event.target.previousElementSibling.id = `${styles["label-focus"]}`;
  };

  const submitformHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) return
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3000/api/mail", {
        method: "post",
        body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          message: enteredComment,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.log(response);
        throw new Error("Couldn't send Email.");
      }

      const resData = await response.json();

      resetComment();
      resetEmail();
      resetName();
      displayMessage("green", resData.message, 5000, messageRef);
    } catch (err) {
      displayMessage("red", err.message, 5000, messageRef);
    }
    setIsLoading(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.header}>
        <div></div>
        <h2 className="primaryHeader">Contact Me</h2>
        <div></div>
      </div>

      <div className={styles.body}>
        <div className={styles.mapContainer}>
          <div id="map" className={`map ${styles.map}`}></div>
          <div className={styles.mapContact}>
            {contactArray.map((obj, idx) => {
              return <MapContact key={idx} obj={obj} />;
            })}
          </div>
        </div>
      </div>
      <div className={styles.formBody}>
        <div className={styles.formContainer}>
          <div className={styles.formPlaceHolder}></div>
          <div className={styles.containerControl}>
            <div className={styles.formControl}>
              <div className={styles.para}>
                <span className="tertiaryText">|| Get In Touch</span>
                <h3 className="secondaryHeader">
                  If you have any project. Contact me.
                </h3>
                <p className="secondaryText">
                  I'm interested in freelance opportunities - especially
                  ambitious or large projects, <br />
                  However if you have other request or need help, don't hesitate
                  to hit me up!
                </p>
              </div>
              <form onSubmit={submitformHandler} className={`${styles.form} `}>
                <div className={styles.inputControl}>
                  <div
                    className={`${styles.control} ${
                      nameIsInvalid && styles.invalid
                    }`}
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
                </div>
                <div
                  className={`${styles.control2} ${
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
                    rows="8"
                    required
                    ref={commentInputRef}
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className={styles.buttonControl}>
                  <button className="buttonText" disabled={loading}>
                    Send message
                  </button>
                  {<span className={styles.message} ref={messageRef}></span>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
