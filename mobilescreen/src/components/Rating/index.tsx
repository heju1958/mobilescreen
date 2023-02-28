import { RatingContainer } from "./style";
import elipse2 from "../../assets/elipse2.svg";
import elipse from "../../assets/elipse.svg";

const Rating = () => {
  return (
    <RatingContainer>
      <img src={elipse} alt="icon elipse" />
      <button className="bold">75%</button>
      <div>
        <p className="bold">Good Result!</p>
        <p className="fontSmall">Share your achievement with your friend</p>
      </div>
      <img src={elipse2} alt="icon elipse" className="elipse" />
    </RatingContainer>
  );
};

export default Rating;
