import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const { authInfo, methods } = useAuth();
  const { handleCreateUserWithEmailAndPassword } = methods;
  const { sentEmail } = authInfo;
  const getName = (e) => {
    const name = e.target.value;
    setUserName(name);
    console.log(name);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleCreateUserWithEmailAndPassword(email, password, userName);
    //handleUpdateProfile(userName)

    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <input
          onBlur={getName}
          placeholder="Enter name"
          type="text"
          name="name"
        />
        <input placeholder="Enter email" type="email" name="email" />
        <input placeholder="Enter password" type="password" name="password" />
        <input type="submit" value="REGISTER" />
        {sentEmail && (
          <h4>
            Varification email will send to your account. Please varify first
            and then <Link to={"/login"}>Login</Link>
          </h4>
        )}
      </form>
    </div>
  );
};

export default Register;
