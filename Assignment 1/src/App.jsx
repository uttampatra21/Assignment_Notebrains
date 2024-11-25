import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
