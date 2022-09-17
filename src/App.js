import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/header/index";
import Board from "./components/board/index";
import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
