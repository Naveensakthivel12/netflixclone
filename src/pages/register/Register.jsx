import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Register.scss";
import Home from '../home/Home';
export  function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    // setEmail(emailRef.current.value);
    history.push('/home');
    window.location.reload();
  };

  const handleLogin = () => {
    history.push('/login');
    window.location.reload();
  }

  const handleNext = () => {
    setEmail(emailRef.current.value);
  }
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email,username, password });
      history.push("/login");
      
    } catch (err) {}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef}  />
            <button className="registerButton"  onClick={handleNext}>
              Get Started
            </button>
          </div>
        ) : (
          <>
          <form className='input'>
          <input type="username" placeholder="username" ref={usernameRef} required />
            <input type="password" placeholder="password" ref={passwordRef} required />
           <button className="registerButton" onClick={handleStart}>
             <Link to="/home">Start </Link> 
            </button> 
          </form>
            
            </>
        )}
      </div>
    </div>
  );
}