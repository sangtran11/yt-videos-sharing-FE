import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import NotFound from "./components/NotFound/NotFound";
import ShareVideos from "./components/YoutubeVideos/ShareVideos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/enter-url" element={<ShareVideos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
