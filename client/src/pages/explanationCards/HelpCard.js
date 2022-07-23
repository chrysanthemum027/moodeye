import React from "react";
import styled from "@emotion/styled";
import NavButtonUpArrow from "../../components/NavButtonUpArrow";
import NavButtonDownArrow from "../../components/NavButtonDownArrow";
import { Link } from "react-router-dom";
import Moodster from "../../assets/images/moodster.svg";

const HelpContainer = styled.div`
  background-color: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:first-of-type,
  & > div:last-of-type {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0.5rem;
  }
  & > div:nth-of-type(2) {
    padding: 0 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function HelpCard() {
  return (
    <HelpContainer>
      <div>
        <NavButtonUpArrow description={"Call Button"} to={"/main/help/callbutton"} />
        <NavButtonUpArrow description={"Moodeye"} to={"/main/help/moodster"} />
        <NavButtonUpArrow description={"Menu"} to={"/main/help/menue"} />
      </div>
      <div>
        <p>
          Hello {sessionStorage.nickName},
          <br /> let me show you how the app works. click on
          the area that interests you and I'll tell you what's up
          hidden behind. When you're done, click me and you
          go straight to the home page.
        </p>
        <Link to="/main">
          <img src={Moodster} alt={Moodster} />
        </Link>
      </div>
      <div>
        <NavButtonDownArrow
          description={"Diary Entry"}
          to={"/main/help/questionnaire"}
        />
        <NavButtonDownArrow description={"Diaries"} to={"/main/help/diary"} />
        <NavButtonDownArrow
          description={"Medications"}
          to={"/main/help/medics"}
        />
        <NavButtonDownArrow
          description={"Analysis"}
          to={"/main/help/analysis"}
        />
      </div>
    </HelpContainer>
  );
}

export default HelpCard;
