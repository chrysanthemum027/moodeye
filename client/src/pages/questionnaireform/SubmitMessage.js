import React from "react";
import styled from "@emotion/styled";
import Moodster from "../../assets/images/moodster.svg";
import { Link } from "react-router-dom";

const SubmitCard = styled.div`
  background: var(--card-background-color);
  color: var(--text-color-normal);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  margin: 0.5rem 0 0;
  padding: 1rem 1rem;
  height: 80%;
  grid-area: 2 / 2 / 3 / 3;
  text-align: center;
  & > a > button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
    margin-top: 3rem;
  }
  & > img {
    margin-top: 3rem;
    width: 400px;
    height: auto;
    margin: auto;
  }
`;

function SubmitMessage() {
  return (
    <SubmitCard>
      <span>
      Thank you for your entry. I wrote everything down and saved it. Do you want to have a look around?
      </span>
      <Link to="/main">
        <button>Back to main page</button>
      </Link>
      <img src={Moodster} alt="moodeye"></img>
    </SubmitCard>
  );
}

export default SubmitMessage;
