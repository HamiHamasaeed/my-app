import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const users = [];
  const navigate = useNavigate();

  function addUserHandler(userData) {
    const user = JSON.stringify(userData);
    users.push(user);
    navigate("/api/login", { replace: true });
    console.log(users);
  }

  return (
    <div className="">
      <h1> </h1>
      <SignUpForm onSignUp={addUserHandler} />
    </div>
  );
};

export default SignUp;
