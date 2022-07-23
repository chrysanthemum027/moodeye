import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import Diary from "../assets/icons/diaryslim.svg";
import Questionnaire from "../assets/icons/questionslim.svg";
import Medics from "../assets/icons/medicsslim.svg";
import Analyse from "../assets/icons/analysisslim.svg";
import Links from "../assets/icons/at.svg";
import Doctor from "../assets/icons/doctor.svg";
import Help from "../assets/icons/laptop.svg";
import About from "../assets/icons/information.svg";
import Profile from "../assets/icons/user.svg";
import Exit from "../assets/icons/exit.svg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const SideDrawer = styled.nav`
  height: 82.5vh;
  width: 70vw;
  position: absolute;
  transition: transform 0.5s ease-in-out;
  background-color: var(--navigation-main-color);
  z-index: 1;
  top: 10.25vh;
  right: 0;
  border: none;
  border-radius: 5px 0 0 5px;
  box-shadow: -3px 0 6px #00000029;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(103%)")};
`;

const SideDrawerList = styled.ul`
  list-style: none;
  height: 83vh;
  margin: 0;
  margin-left: 10vw;
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  & > li > a {
    text-decoration: none;
    color: var(--link-active-color);
    display: flex;
    align-items: center;
  }
  & > li > a > img {
    width: 4vh;
    padding: 5px 0;
  }
  & > li > a > span {
    padding-left: 10%;
  }
  & > li:last-of-type {
    display: flex;
    align-items: center;
  }
  & > li:last-of-type > img {
    width: 4vh;
    padding: 5px 0;
  }
  & > li:last-of-type > button {
    border: none;
    background: transparent;
    color: var(--button-danger-color);
    padding-left: 10%;
  }
`;

function Drawer({ open, onClick }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function Logout(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await sessionStorage.clear();
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/");
    }
  }

  return (
    <SideDrawer open={open} onClick={() => onClick(!open)}>
      <SideDrawerList>
        <li>
          <Link to="/main/diary">
            <img src={Diary} alt="Diary" />
            <span>Diary</span>
          </Link>
        </li>
        <li>
          <Link to="/main/questionnaire">
            <img src={Questionnaire} alt="Diary Entry" />
            <span>Diary Entry</span>
          </Link>
        </li>
        <li>
          <Link to="/main/medics">
            <img src={Medics} alt="Medics" />
            <span>Medications</span>
          </Link>
        </li>
        <li>
          <Link to="/main/analysis">
            <img src={Analyse} alt="Analyse" />
            <span>Analysis</span>
          </Link>
        </li>
        <li>
          <Link to="/main/doctors">
            <img src={Doctor} alt="Doctor" />
            <span>My Doctors</span>
          </Link>
        </li>
        <li>
          <Link to="/main/profile">
            <img src={Profile} alt="Profile" />
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/main/links">
            <img src={Links} alt="Link" />
            <span>Contacts</span>
          </Link>
        </li>
        <li>
          <Link to="/main/help">
            <img src={Help} alt="Help" />
            <span>Help</span>
          </Link>
        </li>
        <li>
          <Link to="/main/about">
            <img src={About} alt="About" />
            <span>About Moodeye</span>
          </Link>
        </li>
        <li>
          <img src={Exit} alt="Logout" />
          <button onClick={Logout}>Logout</button>
          {loading && <p>Loading...</p>}
          {error && <p>Something bad happened. Please try again.</p>}
        </li>
      </SideDrawerList>
    </SideDrawer>
  );
}

export default Drawer;

Drawer.propTypes = {
  onClick: PropTypes.func,
  open: PropTypes.bool,
};
