import styled from "styled-components";

export const Header = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    margin-right: 0.5rem;
  }

  .time {
    background: #e1f1f2;
    color: white;
    border: 6px solid #e1f1f2;
    border-radius: 16px;
  }
`;

export const CardDetail = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.7rem;
  box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.03);
  border-radius: 10px;

  .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      margin-top: 0.5rem;
    }

    img {
      width: 2.4rem;
      height: 2.4rem;
      padding: 0.5rem;
      background: #fef4d1;
      border-radius: 50%;
    }
  }
`;


