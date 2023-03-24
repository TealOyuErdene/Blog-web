import { useRef, useState } from "react";
import axios from "axios";

export function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerpassword, setRegisterPassword] = useState("");

  function handleRegister() {
    axios
      .post(`http://localhost:8000/users/register`, {
        registerUsername,
        registerpassword,
      })
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
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          {/* <input className="input" type="email" placeholder="Email" /> */}
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={registerpassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button className="btn_login" onClick={handleRegister}>
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
