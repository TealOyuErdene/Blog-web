import "./main.css";
import { useRef, useState } from "react";
import axios from "axios";
import { useRegister } from "./useRegister";
export function User() {
  const divEl = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = useRegister()
  function signUp() {
    divEl.current.classList.add("right-panel-active");
  }
  function signIn() {
    divEl.current.classList.remove("right-panel-active");
  }

  function handleLogin() {
    axios
      .post(`http://localhost:8000/users/login`, { username, password })
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          const { token } = data;
          localStorage.setItem("loginToken", token);
          window.location.reload();
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

  function handleRegister() {
    axios
      .post(`http://localhost:8000/users/register`, { username, password })
      .then((res) => {
        const { data, status } = res;
        //   if (status === 200) {
        //     const { token } = data;
        //     localStorage.setItem("loginToken", token);
        //     window.location.reload();
        //   }
      })
      .catch(({ response, code }) => {
        const { data } = response;
        alert(data.message);
      });
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
              <input className="input" type="text" placeholder="Name" />
              <input className="input" type="email" placeholder="Email" />
              <input className="input" type="password" placeholder="Password" />
              <button className="btn_login">Sign Up</button>
            </form>
          </div>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                className="input"
                type="password"
                placeholder="Нууц үг"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
