import "./login.css";
import { useRef } from "react";
export function Login() {
  const divEl = useRef();
  function signUp() {
    divEl.current.classList.add("right-panel-active");
  }
  function signIn() {
    divEl.current.classList.remove("right-panel-active");
  }
  return (
    <>
      <div className="body">
        <div ref={divEl} className="container_login" id="container">
          <div className="form-container sign-up-container">
            <form action="#" className="form">
              <h1 className="h1">Create Account</h1>
              <div className="social-container">
                <a href="#" className="social ">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="span">or use your email for registration</span>
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <button className="btn_login">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#" className="form">
              <h1 className="h1">Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="span">or use your account</span>
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <a href="#" className="a">
                Forgot your password?
              </a>
              <button className="btn_login">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="h1">Welcome Back!</h1>
                <p className="p">
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost btn_login"
                  id="signIn"
                  onClick={signIn}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="h1">Hello, Friend!</h1>
                <p className="p">
                  Enter your personal details and start journey with us
                </p>
                <button
                  className="ghost btn_login"
                  id="signUp"
                  onClick={signUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
