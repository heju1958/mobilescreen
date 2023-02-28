import styled from "styled-components";

export const Title = styled.p`
  font-weight: 700;
  color: #999999;
  font-size: 0.8rem;
`;

export const Header = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 50%;
      border: none;
      background: #c4c4c4;
    }

    img:hover {
      cursor: pointer;
    }

    p {
      display: flex;
      gap: 0.5rem;
    }
  }
`;

export const Rating = styled.div`
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

export const Card = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.7rem;
  box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.03);
  border-radius: 10px;

  :hover {
    transform: scale(1.03);
    transition: 0.5s;
    box-shadow: 20px 40px 54px rgba(51, 51, 51, 0.05);
    cursor: pointer;
  }

  .assortment {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 1rem;
      padding: 0;
    }
  }

  div {
    display: flex;
    gap: 1rem;
    justify-content: space-around;

    img {
      width: 3.6rem;
      height: 3.6rem;
      padding: 0.8rem;
    }

    .tech {
      background: bisque;
      border-radius: 10px;
    }

    .sport {
      background: #eaeeff;
      border-radius: 10px;
    }

    .music {
      border-radius: 10px;
      background-color: #f6e5e5;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0;
    }
  }
`;

export const Assortment = styled.div``;
