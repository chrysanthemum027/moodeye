import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StyledTextContainer from "../components/StyledTextContainer";
import BasicPageLayout from "../components/BasicPageLayout";
import { Link } from "react-router-dom";
import Moodster from "../assets/images/moodster.svg";
import Loading from "./LoadingPage";

function Welcome({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function setUserNickName() {
      try {
        const nickName = sessionStorage.getItem("nickName");
        setUser(nickName);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    setUserNickName();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <p>Hello {user}!</p>
            <p>I am happy that you are here!</p>
          </StyledTextContainer>
          <StyledTextContainer>
            <p>
            Let's write today's diary entry right away.
              <Link to="/main/questionnaire">Click here...</Link>
            </p>
            <p>
              <Link to="/main/help">
                <span>
                If you want me to explain how the app works, click just on top of me
                </span>
                <img src={Moodster} alt="Logo" />
              </Link>
            </p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Welcome;

Welcome.propTypes = {
  children: PropTypes.element,
};
