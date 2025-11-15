import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import User from "./pages/User";
import DynamicUser from "./pages/DynamicUser";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/User" element={<User />} />
          <Route path="/User/:Id" element={<DynamicUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
