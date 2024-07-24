import styled from "styled-components";

export const CardContainer = styled.div`
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
