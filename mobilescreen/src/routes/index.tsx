import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Quiz from "../pages/Quiz";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default RoutesMain;
