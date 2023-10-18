import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    // login({ email, password }, dispatch);
    history.push('/home');
    window.location.reload();
  };
  const handleSignup = (e) => {
    history.push('/');
    window.location.reload();
  }
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix?
            <button className="loginButton" style={{backgroundColor:"transparent",fontSize:"1rem"}} onClick={handleSignup}>
            Sign up now.
          </button>
          </span>

        </form>
      </div>
    </div>
  );
}