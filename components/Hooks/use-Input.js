import { useRef, useState } from "react";

import styles from './use-input.module.scss';

const useInput = (validationFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const inputRef = useRef('');
  const labelRef = useRef('');

  const inputIsValid = validationFn(enteredValue);
  const inputIsInvalid = !inputIsValid && inputIsTouched;

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
    if (event.target.value == "") {
      event.target.previousElementSibling.removeAttribute('id');
    }
  };

  const valueChangeHandler = (event) => {
    console.log(event.target.value)
    if (event.target.previousElementSibling.id != styles["label-focus"]) {
      event.target.previousElementSibling.id = styles["label-focus"];
    }
    setEnteredValue(event.target.value);
  };

  const reset = () => {
    inputRef.current.value = '';
    labelRef.current.removeAttribute('id');
    setEnteredValue("");
    setInputIsTouched(false);
  };

  return {
    enteredValue,
    inputIsValid,
    inputIsInvalid,
    inputIsTouched,
    inputRef,
    labelRef,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
