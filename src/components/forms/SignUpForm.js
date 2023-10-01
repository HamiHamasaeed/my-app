import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./SignUpForm.module.css";

const SignUpForm = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();
  const passwordInputRef = useRef();

  function signUpHandler(e) {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const userData = {
      name: enteredName,
      email: enteredEmail,
      city: enteredCity,
      phone: enteredPhone,
      password: enteredPassword,
    };

    props.onSignUp(userData);
  }
  const navigate = useNavigate();
  function loginHandler() {
    navigate("/api/login", { replace: true });
  }

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, passwordState] = useState("");
  const [inputText, setInputText] = useState("Show Password");
  const passwordChange = (evnt) => {
    passwordState(evnt.target.value);
  };

  function checkboxHandler() {
    if (passwordType === "password") {
      setPasswordType("text");
      setInputText("Hide Password");
      return;
    }
    setPasswordType("password");
    setInputText("Show Password");
  }
  return (
    <div className="container">
      <h1 className="display-6 mb-5 text-center">Sign Up Page</h1>
      <form className="form-floating" onSubmit={signUpHandler}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label h3">
            Full Name
          </label>
          <input
            type="text"
            className="form-control form-control-lg "
            id="fullName"
            aria-describedby="fullName"
            ref={nameInputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email1" className="form-label h3">
            Email
          </label>
          <input
            type="email"
            className="form-control form-control-lg"
            id="email"
            aria-describedby="emailHelp"
            ref={emailInputRef}
          />
          <div id="email" className={classes.promis}>
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label h3">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="phone"
            aria-describedby="phoneNumber"
            ref={phoneInputRef}
          />
        </div>
        <div>
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-6">
                <label className={classes.choose}>Choose City:</label>
              </div>
              <div className="col-6">
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label="Large select example"
                  ref={cityInputRef}
                >
                  <option value="Sulaymaniyah">Sulaymaniyah</option>
                  <option value="Erbil">Erbil</option>
                  <option value="Halabja">Halabja</option>
                  <option value="Ranya">Ranya</option>
                  <option value="Duhok">Duhok</option>
                  <option value="Kirkuk">Kirkuk</option>
                  <option value="Zaxo">Zaxo</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <label htmlFor="password" className="form-label h3">
              Password
            </label>
            <div className="col align-self-center">
              <input
                type={passwordType}
                className="form-control form-control-lg"
                id="password"
                value={passwordInput}
                onChange={passwordChange}
                ref={passwordInputRef}
              />
            </div>
            <div className="col-2">
              <input
                htmlFor="password"
                type="checkbox"
                id="password1"
                className="btn-check"
                onChange={checkboxHandler}
                autoComplete="off"
              />
              <label className="btn btn-warning btn-sm" htmlFor="password1">
                {inputText}
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2 col-9 mx-auto">
              <button type="submit" className="btn btn-success">
                Sign Up
              </button>
            </div>
          </div>
          <div className="col">
            <div className="d-grid gap-2 col-9 mx-auto">
              <button
                onSubmit={loginHandler}
                type="action"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
