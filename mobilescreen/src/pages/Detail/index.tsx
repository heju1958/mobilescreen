import { useNavigate } from "react-router-dom";
import { Header, CardDetail, Rules } from "../Detail/style";
import { Card } from "../Home/style";

import back from "../../assets/back.svg";
import points from "../../assets/points.svg";
import star from "../../assets/star.svg";
import sport from "../../assets/sport.svg";
import question from "../../assets/question.svg";
import hour from "../../assets/hour.svg";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Header>
        <div>
          <img src={back} alt="icon back" onClick={() => navigate("/home")} />
          <p className="bold">Detail Quiz</p>
        </div>
        <img src={points} alt="icon points" />
      </Header>
      <Card>
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
      <CardDetail>
        <p className="bold">Brief explanation about this quiz</p>
        <div className="info">
          <img src={question} alt="icon question" />
          <div>
            <p className="bold">10 Question</p>
            <p className="fontSmall">10 point for a correct answer</p>
          </div>
        </div>
      </CardDetail>
      <CardDetail>
        <div className="info">
          <img src={hour} alt="icon hour" />
          <div>
            <p className="bold">1 hour 20 min</p>
            <p className="fontSmall">10 point for a correct answer</p>
          </div>
        </div>
      </CardDetail>
      <Rules>
        <p className="bold">
          Please read the text below carefully so you can understand it
        </p>
        <li>
          10 point awarded for a correct answer and no marks for a incorrect
          answer
        </li>
        <li>Tap on options to select the correct answer</li>
        <li>
          Click submit if you are sure you want to complete all the quizzes
        </li>
        <button onClick={() => navigate("/quiz")}>Get Started</button>
      </Rules>
    </div>
  );
};

export default Detail;
