import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./routes/Layout";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import LoginRoute from "./routes/Loginroute";
import React from "react";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={600} style={{ zIndex: "9999999" }} />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<LoginRoute element={<Profile />} />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
