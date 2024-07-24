import { RulesContainer } from "./style";
import { useNavigate } from "react-router-dom";

const Rules = () => {
  const navigate = useNavigate();
  return (
    <>
      <RulesContainer>
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
      </RulesContainer>
    </>
  );
};

export default Rules;
