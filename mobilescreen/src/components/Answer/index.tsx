import { AnswerContainer } from "./style";

const Answer = () => {
  return (
    <>
      <AnswerContainer>
        <div className="empty"></div>
        <div className="correct">
          <div></div>
          <p className="bold">Football</p>
        </div>
        <div>
          <div></div>
          <p className="bold">Basketball</p>
        </div>
        <div className="wrong">
          <div>
            <p>X</p>
          </div>
          <p className="bold">Volleyball</p>
        </div>
        <div>
          <div></div>
          <p className="bold">Shuttlecock</p>
        </div>
        <div className="containerButton">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </AnswerContainer>
    </>
  );
};

export default Answer;
