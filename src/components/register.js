import { useState } from "react";
import axios from "axios";

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/register`, {
        username,
        password,
      })
      .then((res) => {
        // const { data, status } = res;
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
      <div style={{ width: 200, margin: "2em auto" }}>
        <input
          className="form-control"
          placeholder="Хэрэглэгчийн нэр"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control"
          placeholder="Нууц үг"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleRegister}>
          Бүртгүүлэх
        </button>
      </div>
    </>
  );
}
