import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
