import NavbarAdmin from "./navbarAdmin";
import { Route, Routes } from "react-router-dom";
import { ArticlesNew } from "./articlesNew";
import { Articles } from "./articles";
import { Categories } from "./categories";

import { useState } from "react";
import axios from "axios";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    axios
      .post(`http://localhost:8000/users/login`, {
        username,
        password,
      })
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleLogin}>
          Нэвтрэх
        </button>
      </div>
    </>
  );
}

export function AdminApp() {
  if (!localStorage.getItem("loginToken")) {
    return <Login />;
  }

  return (
    <>
      <NavbarAdmin />
      {/* <Sidebar /> */}
      <div style={{ maxWidth: 1000, margin: "2rem auto" }}>
        <Routes>
          <Route path="/categories" element={<Categories />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={<ArticlesNew />} />
          <Route path="/articles/change" element={<ArticlesNew />} />
        </Routes>
      </div>
    </>
  );
}
