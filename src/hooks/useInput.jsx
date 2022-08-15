import { useState } from "react";

const useInput = (inputValidatoin) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const validation = inputValidatoin(inputValue);
  const isValid = isTouched && !validation;


  return [inputValue, setInputValue ,setIsTouched, isValid];
};

export { useInput };
