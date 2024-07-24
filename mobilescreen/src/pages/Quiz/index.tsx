import { useNavigate } from "react-router-dom";
import { Header } from "../Detail/style";
import { Level } from "./style";

import back from "../../assets/back.svg";
import bar3 from "../../assets/bar3.svg";
import time from "../../assets/time.svg";

import Answer from "../../components/Answer";

const Quiz = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header>
        <div>
          <img src={back} alt="icon back" onClick={() => navigate("/detail")} />
          <p className="bold">Technology</p>
        </div>
        <img src={time} alt="icon time" className="time" />
      </Header>
      <Level>
        <img src={bar3} alt="icon bar" />
        <p>Completed 64%</p>
      </Level>
      <p className="bold">The image below is a field image used for?</p>
      <Answer />
    </div>
  );
};

export default Quiz;
