import styled from "styled-components";

export const MsgErro = styled.div`
  width: 20rem;
  display: flex;
  font-family: "Inter", sans-serif;
  font-size: x-small;
  font-weight: bold;
`;

export const Form = styled.form`
  @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@200;400&family=Inter:wght@300;400;500;700&family=Montserrat:wght@400;700&family=Nunito:wght@700&family=Poppins:ital,wght@0,200;0,500;1,300&family=Righteous&family=Roboto+Slab&family=Roboto:wght@100;400&family=Sarala&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 22.813rem;
  width: 22rem;
  gap: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  img {
    width: 12rem;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  label {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    width: 20rem;
  }

  input,
  select {
    width: 20rem;
    height: 2.813rem;
    padding-left: 0.813rem;
    border: none;
    background: #ecf9e7;
    border-radius: 20px;
  }

  .formButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15.313rem;
    height: 3.188rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
  }

  .containerNewUser {
    width: 100%;
    margin-top: 3rem;
    border-top: 1px solid var(--blue-1);
    border-radius: 4px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: normal;
    }

    button {
      border: var(--blue-1);
      background: var(--blue-1);
      height: 3rem;
      width: 100%;
    }
    button:hover {
      border: 1px solid var(--blue-1);
      background: white;
      color: var(--blue-1);
    }

    img {
      width: 10rem;
      margin-top: 1rem;
      margin-right: 3rem;
    }
  }
`;
