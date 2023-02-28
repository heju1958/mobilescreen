import { Title, Header, Rating, TypeQuiz, Method, Card } from "./style";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

import alert from "../../assets/alert.svg";
import elipse from "../../assets/elipse.svg";
import read from "../../assets/read.svg";
import speak from "../../assets/speak.svg";
import bar1 from "../../assets/bar1.svg";
import bar2 from "../../assets/bar2.svg";
import tech from "../../assets/tech.svg";
import sport from "../../assets/sport.svg";
import music from "../../assets/music.svg";
import star from "../../assets/star.svg";
import elipse2 from "../../assets/elipse2.svg";

const Home = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header>
        <div className="userData" onClick={() => navigate("/profile")}>
          <img></img>
          <p>
            Hello, <p className="bold">{user?.username}</p>
          </p>
        </div>
        <div>
          <button onClick={() => logout()}>sair</button>
          <img src={alert} alt="icon alert" />
        </div>
      </Header>
      <Rating>
        <img src={elipse} alt="icon elipse" />
        <button className="bold">75%</button>
        <div>
          <p className="bold">Good Result!</p>
          <p className="fontSmall">Share your achievement with your friend</p>
        </div>
        <img src={elipse2} alt="icon elipse" className="elipse" />
      </Rating>
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
      <ul>
        <Card>
          <div>
            <img src={tech} alt="icon tech" className="tech" />
            <div>
              <p className="bold">Technology</p>
              <p className="fontSmall">10 Question</p>
            </div>
          </div>
          <div className="assortment">
            <img src={star} alt="icon star" />
            <p>4.8</p>
          </div>
        </Card>
        <Card onClick={() => navigate("/detail")}>
          <div>
            <img src={sport} alt="icon sport" className="sport" />
            <div>
              <p className="bold">Sport</p>
              <p className="fontSmall">10 Question</p>
            </div>
          </div>
          <div className="assortment">
            <img src={star} alt="icon star" />
            <p>4.8</p>
          </div>
        </Card>
        <Card>
          <div>
            <img src={music} alt="icon music" className="music" />
            <div>
              <p className="bold">Music</p>
              <p className="fontSmall">10 Question</p>
            </div>
          </div>
          <div className="assortment">
            {" "}
            <img src={star} alt="icon star" />
            <p>4.8</p>
          </div>
        </Card>
      </ul>
    </div>
  );
};

export default Home;
