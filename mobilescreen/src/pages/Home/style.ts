import styled from "styled-components";

export const Title = styled.p`
  font-weight: 700;
  color: #999999;
  font-size: 0.8rem;
`;

export const TypeQuiz = styled.div`
  margin-top: 1rem;
  background: #fafafd;
  padding: 1rem;
  width: 50%;
  border-radius: 10px;
  margin-bottom: 1rem;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: 0.5s;
    box-shadow: 20px 40px 54px rgba(51, 51, 51, 0.05);
  }

  img {
    width: 3rem;
    background: #ffffff;
    box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.05);
    border-radius: 10px;
    padding: 0.8rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.7rem;
  }

  .bar {
    background: none;
    padding: 0;
    margin-bottom: 0;
    width: 8rem;
  }
`;

export const Method = styled.section`
  display: flex;
  gap: 1rem;
`;

