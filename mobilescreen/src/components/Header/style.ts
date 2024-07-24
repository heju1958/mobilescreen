import styled from "styled-components";

export const HeaderContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-right: 1rem;
    height: 2rem;
    width: 3rem;
  }

  .userData {
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