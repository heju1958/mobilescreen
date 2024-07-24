import styled from "styled-components";

export const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 3rem;
    box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.05);
    border-radius: 10px;

    div {
      margin-left: 1rem;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #d4d4d4;
      border-radius: 50%;
    }
  }

  .correct {
    display: flex;
    border: 1px solid #219653;
  }

  .wrong {
    background: #f7e5e5;

    div {
      background: #ff6967;
      border: none;

      p {
        font-weight: bold;
        color: #f7e5e5;
        margin-left: 0.4rem;
      }
    }
  }

  .empty {
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-radius: 10px;
    background: #c4c4c4;
    width: 100%;
    height: 10rem;
  }

  .containerButton {
    display: flex;
    margin-top: 3rem;
    background: none;
    width: 100%;
    gap: 1rem;

    button {
      width: 50%;
      height: 3rem;
      padding: 1rem;
    }
  }
`;
