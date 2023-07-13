import React, { useState } from "react";
import { house } from "../../components/Home/images";
import { validEmail, validateEmail, passwordCheck } from "./validator";
import "./login.css";

const Login = () => {
  const secCode = new RegExp(/8675/);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");

  const onPasswordChange = (e) => setPass(e.target.value);
  const onNameChange = (e) => setEmail(e.target.value);

  const OnButtonClick = () => {
    passwordCheck(pass) === "strong" &&
      validEmail.test(email) &&
      code === "8675"
      ? console.log(`email : ${email}, password : ${pass}`)
      : console.log("failed");
  };
  return (
    <>
      <header>
        <nav className="route-header">
          <a href="/">
            <img src={house} alt="home" />
            <p>Home</p>
          </a>
          <span></span>
          <a href="/">Pages</a>
          <span>My Account</span>
        </nav>
      </header>
      <main className="main-body">
        <div className="left-img-container">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/page/login-1.png"
            alt="login-img"
          />
        </div>
        <div className="right-form-container">
          <div className="headings">
            <h1>Login</h1>
            <p>
              Don't have an account?{" "}
              <span style={{ color: "#3bb77e" }}>Create Here</span>
            </p>
          </div>
          <div className="login-form">
            <input
              type="text"
              placeholder="Username or Email *"
              name="username"
              required={true}
              onChange={onNameChange}
            />
            <div className={`username ${validateEmail(email)}`}>
              enetr a valid email
            </div>
            <input
              type="password"
              placeholder="Your Password *"
              name="password"
              onChange={onPasswordChange}
              required
            />

            <div className={passwordCheck(pass)}>
              {passwordCheck(pass)}
              <hr />{" "}
            </div>

            <div className="security-code">
              <input
                type="text"
                placeholder="Security Code *"
                name="code"
                onChange={(e) => setCode(e.target.value)}
                pattern={secCode}
              />
              <span>
                <b className="text-new">8</b>
                <b className="text-hot">6</b>
                <b className="text-sale">7</b>
                <b className="text-best">5</b>
              </span>
            </div>
              {!secCode.test(code) ? <div style={{color:'#7e7e7e', fontSize:'14px', marginBottom:'5px'}}>please meatch the security code</div>: ''}
            <div className="chk-form">
              <label>
                <input type="checkbox" name="checkbox" />
                Remember me
              </label>
              <a href="/">Forget password?</a>
            </div>
            <button
              type="btn"
              className="btn"
              name="login"
              onClick={OnButtonClick}
            >
              Login
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
