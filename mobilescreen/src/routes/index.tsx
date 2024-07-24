import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Quiz from "../pages/Quiz";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default RoutesMain;
