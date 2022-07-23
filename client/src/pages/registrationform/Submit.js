import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import Moodster from "../../assets/images/moodster.svg";
import { useHistory } from "react-router-dom";
import { fetchUserLogin, postNewUser } from "../../api/users";

const SubmitCard = styled.div`
  background: var(--card-background-color);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  box-shadow: var(--main-elements-shadow);
  padding: 1rem;
  height: 80%;
  grid-area: 2 / 2 / 3 / 3;
  text-align: center;
  & button {
    border: none;
    background: transparent;
    color: var(--button-proceed-color);
    margin-top: 1rem;
  }
  & span {
    color: var(--button-danger-color);
    margin-top: 1rem;
  }
  & > img {
    margin-top: 1rem;
  }
  & button > span {
    color: var(--text-color-attention);
  }
`;

function Submit({ setForm, formData }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorExistingUser, setErrorExistingUser] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const existingUser = await fetchUserLogin(formData.userName);
      if (existingUser) {
        setErrorExistingUser(true);
        return;
      }
      await postNewUser(formData);
      formData.firstName = "";
      formData.lastName = "";
      formData.nickName = "";
      formData.birthDay = "";
      formData.userName = "";
      formData.password = "";
      formData.repeatPassword = "";
      formData.moodsterName = "";
      setLoading(false);
      history.push("/");
    } catch (error) {
      console.error(error);
      setError(true);
    }
  }

  return (
    <SubmitCard>
      <p>
      Thank you {formData.nickName}! If you send the registration now,
        {formData.moodsterName} takes care of everything else and you can log in to have a look at the app at your leisure.
      </p>
      <button disabled={loading} type="submit" onClick={handleSubmit}>
      Send registration and login...
      </button>
      {errorExistingUser && (
        <>
          <span>THIS USERNAME IS ALREADY TAKEN!</span>
          <button
            onClick={() => {
              history.push("/register/userlogin");
            }}
          >
            <span>Click here to change username</span>
          </button>
        </>
      )}
      {error && (
        <p>Unfortunately, this did not work. Please try again</p>
      )}
      <img src={Moodster} alt="moodster"></img>
    </SubmitCard>
  );
}

export default Submit;

Submit.propTypes = {
  formData: PropTypes.object,
  setForm: PropTypes.func,
};
