import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  function addUserHandler(userData) {
    fetch("https://myapp-94507-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(() => {
        navigate("/api/login", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="">
      <SignUpForm onSignUp={addUserHandler} />
    </div>
  );
};

export default SignUp;
