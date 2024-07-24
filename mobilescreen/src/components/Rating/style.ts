import styled from "styled-components";

export const RatingContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  align-items: center;
  background-color: #dbf3ff;
  height: 7rem;
  display: flex;
  gap: 1rem;
  border-radius: 10px;

  .elipse {
    margin-top: 3rem;
    position: absolute;
    margin-left: 18rem;
  }

  img {
    position: absolute;
    margin-left: 1rem;
  }

  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  img:hover {
    animation: roll 2s;
    transform: rotate(10deg);
  }

  button {
    margin-left: 1rem;
    width: 5.3rem;
    height: 5rem;
    border-radius: 50%;
    border: 10px solid white;
    background-color: #dbf3ff;
    color: var(--text);
    font-size: 13px;

    @media (max-width: 375px) {
      width: 5.8rem;
    }
    @media (max-width: 330px) {
      width: 7.2rem;
    }
  }

  p {
    padding: 0.4rem;
    width: 70%;
  }
`;
