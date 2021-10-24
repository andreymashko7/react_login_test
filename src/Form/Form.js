import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <div className="form-success">Форма отправлена!</div>
      )}
    </>
  );
};

export default Form;
