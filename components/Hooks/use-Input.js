import { useRef, useState } from "react";

const useInput = (validationFn) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const inputRef = useRef('');
  const labelRef = useRef('');

  const inputIsValid = validationFn(enteredValue);
  const inputIsInvalid = !inputIsValid && inputIsTouched;

  const inputBlurHandler = (event) => {
    setInputIsTouched(true);
    if (enteredValue == "") {
      event.target.previousElementSibling.removeAttribute('id');
    }
  };

  const valueChangeHandler = (event) => {
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
    inputRef,
    labelRef,
    inputBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
