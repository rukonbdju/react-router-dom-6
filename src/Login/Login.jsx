import React, { useContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [varify, setVarify]=useState(true)
  const {authInfo,methods} = useAuth();
  const { handleSignInWithPopUp, handleSignInWithEmailAndPassword } = methods;
  const { user } = authInfo;
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    handleSignInWithEmailAndPassword(email, password);
    
    e.target.reset();
    if(!user?.emailVerified) {
        setVarify(false)
        return;
    };
    navigate
  };

  const getEmail = (e) => {
    const email = e.target.value;
    console.log(email);
  };


  let from = location.state?.from?.pathname || "/";
  //console.log(from);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Welcome back</h1>
        <input
          onBlur={getEmail}
          placeholder="Enter email"
          type="email"
          name="email"
        />
        <input placeholder="Enter password" type="password" name="password" />
        <input type="submit" value="LOGIN" />
        <p>
          Forget password? <small><Link to={'/resetPassword'}>Click here</Link></small>
        </p>
        <p>
          New user? <small><Link to={'/register'}>Create a new account</Link></small>
        </p>
            {!varify && <p>Please cheak your email and varify first</p>}
      </form>
      <div>
        <button onClick={() => handleSignInWithPopUp("google")}>Google</button>
        <button onClick={() => handleSignInWithPopUp("facebook")}>
          Facebook
        </button>
        <button onClick={() => handleSignInWithPopUp("github")}>Github</button>
      </div>
    </div>
  );
};

export default Login;
