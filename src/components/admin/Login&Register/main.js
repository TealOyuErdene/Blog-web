import "./main.css";
import { useRef, useState } from "react";
import axios from "axios";
import { Register } from "./register";

export function User() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginpassword, setLoginPassword] = useState("");

  const divEl = useRef();
  function signUp() {
    divEl.current.classList.add("right-panel-active");
  }
  function signIn() {
    divEl.current.classList.remove("right-panel-active");
  }

  function handleLogin() {
    axios
      .post(`http://localhost:8000/users/login`, {
        loginUsername,
        loginpassword,
      })
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          // const { token } = data;
          // localStorage.setItem("loginToken", token);
          // window.location.reload();
        }
      })
      .catch(({ response, code }) => {
        // if (response.status === 401) {
        //   alert("Нууц үг буруу байна");
        // } else {
        //   alert(code);
        // }
      });
  }

  return (
    <>
      <div className="body">
        <div ref={divEl} className="container_login" id="container">
          <Register />
          <div className="form-container sign-in-container">
            <form action="#" className="form">
              <h1 className="h1">Log in</h1>
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

              <input
                className="input"
                type="text"
                placeholder="Нэвтрэх нэр"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
              />
              <input
                className="input"
                type="password"
                placeholder="Нууц үг"
                value={loginpassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
              <a href="#" className="a">
                Forgot your password?
              </a>
              <button className="btn_login" onClick={handleLogin}>
                Log In
              </button>
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
                  Log In
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
