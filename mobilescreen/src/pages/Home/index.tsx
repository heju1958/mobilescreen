import { Title, TypeQuiz, Method } from "./style";

import read from "../../assets/read.svg";
import speak from "../../assets/speak.svg";
import bar1 from "../../assets/bar1.svg";
import bar2 from "../../assets/bar2.svg";

import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Card from "../../components/Card";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Rating />
      <Title>Recent Quiz</Title>
      <Method>
        <TypeQuiz>
          <img src={read} alt="icon read" />
          <p className="bold">Reading</p>
          <p className="fontSmall">You completed 65%</p>
          <img className="bar" src={bar1} alt="icon bar" />
        </TypeQuiz>
        <TypeQuiz>
          <img src={speak} alt="icon speak" />
          <p className="bold">Speaking</p>
          <p className="fontSmall">You completed 85%</p>
          <img className="bar" src={bar2} alt="icon bar" />
        </TypeQuiz>
      </Method>
      <Title>Popular Quiz</Title>
      <Card />
    </div>
  );
};

export default Home;
