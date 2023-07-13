import React, { useState } from "react";
import "./register.css";
import { validEmail, validateEmail, passwordCheck, strongPassword } from "../Login/validator";
import { house } from "../../components/Home/images";

const Register = () => {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [code, setCode] = useState("");
  const [choice, setChoice] = useState("");
  const [terms, setTerms] = useState('');
  const secCode = new RegExp(/8675/)

  const onButtonClick = () => {
    if (
      uname === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      code === "" ||
      choice === "" ||
      terms === ""
    ) {
      alert("please fill all fields");
    } else {
      password !== confirmPassword || !validEmail.test(email) || !strongPassword.test(password) || !secCode.test(code) || terms === ""
        ? console.log("error")
        : console.log(
            `username: ${uname}, email: ${email}, password: ${password}, confirm password: ${confirmPassword}, code: ${code}, choice: ${choice}`
          );
    }
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
          <a href="/" style={{ color: "#7e7e7e" }}>
            Pages
          </a>
          <span>My Account</span>
        </nav>
      </header>
      <main className="main-container">
        <div className="left-container">
          <h1>Create an Account</h1>
          <p>
            Already have an account?
            <span style={{ color: "#3bb77e" }}>Login</span>
          </p>
          <div className="register-form">
            <input
              type="text"
              name="username"
              placeholder="Username*"
              required
              onChange={(e) => setUname(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
             <div className={`username ${validateEmail(email)}`}>
              enetr a valid email
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password*"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={passwordCheck(password)}>
              {passwordCheck(password)}
              <hr />{" "}
            </div>
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm Password*"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPassword !== ""
              ? password !== confirmPassword
                ? "Password mismatch"
                : ""
              : ""}
            <div className="security-code">
              <input
                type="text"
                placeholder="Security Code *"
                name="code"
                onChange={(e) => setCode(e.target.value)}
              />
              <span>
                <b className="text-new">8</b>
                <b className="text-hot">6</b>
                <b className="text-sale">7</b>
                <b className="text-best">5</b>
              </span>
            </div>
            {!secCode.test(code) ? <div style={{color:'#7e7e7e', fontSize:'14px', marginBottom:'5px'}}>please meatch the security code</div>: ''}
            <div className="choice">
              <input
                type="radio"
                id="1"
                name="option"
                value="I am a customer"
                onChange={(e) => setChoice(e.target.value)}
              />
              <label htmlFor="1">I am a customer</label>
              <br />
              <input
                type="radio"
                id="2"
                name="option"
                value="I am a vendor"
                onChange={(e) => setChoice(e.target.value)}
              />
              <label htmlFor="2">I am a vendor</label>
            </div>
            <div className="chk-form">
              <label>
                <input type="checkbox" name="checkbox" onChange={(e) => e.target.checked ? setTerms('checked') : setTerms('')}/>I agree to terms &
                Policy.
              </label>
              <a href="/" style={{ color: "#3bb77e", fontWeight: "600" }}>
                Learn more
              </a>
            </div>
            <button
              type="submit"
              className="btn"
              name="login"
              onClick={onButtonClick}
            >
              Submit & Register
            </button>
            <p className="text-muted">
              <strong>Note:</strong>Your personal data will be used to support
              your experience throughout this website, to manage access to your
              account, and for other purposes described in our privacy policy
            </p>
          </div>
        </div>
        <div className="right-container">
          <div className="">
            <a href="/" className="social-login facebook-login">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-facebook.svg"
                alt=""
              />
              <span>Continue with Facebook</span>
            </a>
            <a href="/" className="social-login google-login">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-google.svg"
                alt=""
              />
              <span>Continue with Google</span>
            </a>
            <a href="/" className="social-login apple-login">
              <img
                src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/logo-apple.svg"
                alt=""
              />
              <span>Continue with Apple</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
