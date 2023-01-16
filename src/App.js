import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientApp } from "./components/client/ClientApp";
import { AdminApp } from "./components/admin/AdminApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ClientApp />}></Route>
          <Route path="/admin/*" element={<AdminApp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
