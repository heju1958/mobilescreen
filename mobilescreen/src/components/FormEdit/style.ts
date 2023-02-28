import styled from "styled-components";

export const ProfileInfo = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  height: 12rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: none;
    background: #c4c4c4;
  }

  button {
    height: 2rem;
    width: 8rem;
    border: none;
    background: #ff6d62;
  }

  button:hover {
    background-color: white;
    border: 1px solid #ff6d62;
    color: #ff6d62;
  }
`;
