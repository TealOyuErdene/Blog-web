import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClientApp } from "./components/client/ClientApp";
import { AdminApp } from "./components/admin/AdminApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "loginToken"
)}`;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ClientApp />}></Route>
          <Route path="/admin/*" element={<AdminApp />}></Route>
        </Routes>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
