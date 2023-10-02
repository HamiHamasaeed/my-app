import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  function addUserHandler(userData) {
    Axios.post("http://localhost:8000/api/signup", userData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/api/login", { replace: true });
  }

  return (
    <div className="">
      <SignUpForm onSignUp={addUserHandler} />
    </div>
  );
};

export default SignUp;
