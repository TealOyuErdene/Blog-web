import axios from "axios";
import { useState } from "react";

export function useRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  return {
    username,
    setUsername,
    password,
    setPassword,
  };
}
