import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data/users.json";

const LoginForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const navigate = useNavigate();

  function loginHandler(e) {
    // e.preventDefault();
    // const enteredEmail = emailInputRef.current.value;
    // const enteredPassword = passwordInputRef.current.value;
    // const currentUser = {
    //   email: enteredEmail,
    //   password: enteredPassword,
    // };
    // if (data.includes(enteredEmail)) {
    //   navigate("/api/success", { replace: true });
    // } else {
    //   return;
    // }
  }

  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [inputText, setInputText] = useState("Show");

  const passwordStatus = (event) => {
    setPasswordInput(event.target.value);
  };

  function checkBoxHandler() {
    if (passwordType === "password") {
      setPasswordType("text");
      setInputText("Hide");
      return;
    }
    setPasswordType("password");
    setInputText("Show");
  }

  //   const navigate = useNavigate();
  //   function loginHandler() {
  //     navigate("/api/success", { replace: true });
  //   }

  return (
    <div className="container p-3 text-center" style={{ marginTop: "8rem" }}>
      <h1 className="display-6 mb-5">Login Page</h1>
      <form className="form-floating" onSubmit={loginHandler}>
        <div className="row mb-4">
          <div className="col-3 align-self-center">
            <label htmlFor="email" className="form-label h3">
              Email
            </label>
          </div>
          <div className="col-9">
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="email@email.com"
              aria-describedby="email"
              ref={emailInputRef}
            />
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-3 align-self-center">
            <label htmlFor="password" className="form-label h3">
              Password
            </label>
          </div>
          <div className="col-8">
            <input
              type={passwordType}
              className="form-control form-control-lg"
              id="password"
              placeholder="Enter Password"
              onChange={passwordStatus}
              ref={passwordInputRef}
            />
          </div>
          <div className="col-1 align-self-center">
            <input
              htmlFor="password"
              type="checkbox"
              id="password1"
              className="btn-check"
              value={passwordInput}
              onChange={checkBoxHandler}
              autoComplete="off"
            />
            <label className="btn btn-warning btn-sm" htmlFor="password1">
              {inputText}
            </label>
          </div>
        </div>
        <div className="row mb-4 align-items-center justify-content-center">
          <div className="d-grid col-5">
            <Link
              to="/api/signup"
              style={{
                color: "Blue",
                fontWeight: "bold",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Create a new Account
            </Link>
          </div>
          <div className="d-grid col-6">
            <button type="submit" className="btn btn-primary btn-lg">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
