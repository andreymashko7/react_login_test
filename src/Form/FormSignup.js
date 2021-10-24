import React, { useState, useEffect } from "react";

const FormSignup = ({ submitForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("E-mail не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;

      case "password":
        setPasswordDirty(true);
        break;

      default:
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный e-mail");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 12) {
      setPasswordError("Пароль должен быть длиннее 3 и меньше 12 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="container">
      <form className="authorization">
        <h1 className="authorization__header">Авторизация</h1>
        {emailDirty && emailError && (
          <div className="email-error">{emailError}</div>
        )}
        <input
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blurHandler(e)}
          type="text"
          name="email"
          placeholder="Введите e-mail"
        />
        {passwordDirty && passwordError && (
          <div className="password-error">{passwordError}</div>
        )}
        <input
          onChange={(e) => {
            passwordHandler(e);
          }}
          value={password}
          onBlur={(e) => blurHandler(e)}
          type="password"
          name="password"
          placeholder="Введите пароль"
        />
        <button
          disabled={!formValid}
          onClick={submitForm}
          className="authorization__btn"
          type="submit"
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
