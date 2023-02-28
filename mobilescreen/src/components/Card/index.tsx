import { CardContainer } from "./style";
import { useNavigate } from "react-router-dom";

import tech from "../../assets/tech.svg";
import sport from "../../assets/sport.svg";
import music from "../../assets/music.svg";
import star from "../../assets/star.svg";

const Card = () => {
  const navigate = useNavigate();

  return (
    <ul>
      <CardContainer>
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
      </CardContainer>
      <CardContainer onClick={() => navigate("/detail")}>
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
      </CardContainer>
      <CardContainer>
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
      </CardContainer>
    </ul>
  );
};

export default Card;
