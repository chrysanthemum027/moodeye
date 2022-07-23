import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ReviewCard = styled.div`
  background: var(--card-background-color);
  color: var(--text-color-normal);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  padding: 1rem 1rem;
  height: 80%;
  grid-area: 2 / 2 / 3 / 3;
  & > div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    color: var(--text-color-attention);
    text-align: center;
  }
  & > div > div:first-of-type > span:first-of-type {
    color: var(--text-color-attention);
  }
  & > div > div > a,
  > a {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
    text-align: center;
  }
  & > div > div {
    display: flex;
    justify-content: space-between;
    color: var(--text-color-normal);
  }
  & > h2 {
    font-size: 1.2rem;
  }
`;

function Review({ formData }) {
  const {
    firstName,
    lastName,
    nickName,
    birthDay,
    userName,
    password,
    passwordRepeat,
    moodsterName,
  } = formData;

  let info;
  if (
    firstName === "" ||
    lastName === "" ||
    nickName === "" ||
    birthDay === "" ||
    userName === "" ||
    password === "" ||
    passwordRepeat === "" ||
    moodsterName === ""
  ) {
    info = (
      <>
        <div>
        You seem to have forgotten some data. Please look through the registration again from the beginning and fill in all fields.
        </div>
        <Link to="/register">Click here to check everything...</Link>
      </>
    );
  } else if (password !== passwordRepeat) {
    info = (
      <>
        <div>Your password does not match. Please check this.</div>
        <Link to="/register/userlogin">Edit...</Link>
      </>
    );
  } else {
    info = (
      <>
        <h2>Let us check your data</h2>
        <div>
          <div>
            <span>User data</span>
            <Link to="/register">Edit...</Link>
          </div>
          <div>
            <span>First name:</span> <span>{firstName}</span>
          </div>
          <div>
            <span>Last name:</span> <span>{lastName}</span>
          </div>
          <div>
            <span>Nickname:</span> <span>{nickName}</span>
          </div>
          <div>
            <span>Date of birth:</span> <span>{birthDay}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Login data</span>
            <Link to="/register/userlogin">Edit...</Link>
          </div>
          <div>
            <span>User name:</span> <span>{userName}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Moodeye</span>
            <Link to="/register/moodster">edit...</Link>
          </div>
          <div>
            <span>My name is:</span> <span>{moodsterName}</span>
          </div>
        </div>
        <Link to="/register/submit">Go to registration now...</Link>
      </>
    );
  }

  return <ReviewCard>{info}</ReviewCard>;
}

export default Review;

Review.propTypes = {
  formData: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  nickName: PropTypes.string,
  birtDay: PropTypes.string,
  userName: PropTypes.string,
  password: PropTypes.string,
  moodsterName: PropTypes.string,
};
