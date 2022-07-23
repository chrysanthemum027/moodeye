import React, { useState } from "react";
import styled from "@emotion/styled";
import Moodster from "../assets/images/moodster.svg";
import { Link, useHistory } from "react-router-dom";
import { fetchUserLogin } from "../api/users";

const LoginWrapper = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-rows: 20% 32% 38% 10%;
  justify-items: center;
  & > h1 {
    font-size: 3rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  & div > input {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    color: var(--inputfield-text-color);
    font-family: "Montserrat";
    padding: 0.5rem 0.5rem;
  }
  & div > span {
    padding: 0.4rem 0;
    font-size: 1.25rem;
  }
  & div > button {
    align-self: center;
    background-color: var(--button-main-color);
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    font-family: "Montserrat";
    color: var(--inputfield-text-color);
    width: 6rem;
    height: 2rem;
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
  & > a {
    color: var(--inputfield-text-color);
    align-content: center;
    font-size: 1.25rem;
  }
`;

function LoginPage() {
  const history = useHistory();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState(false);

  function handleChange(event) {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  }

  async function Login() {
    const newUser = await fetchUserLogin(user.userName);
    if (!newUser) {
      setError(true);
      return;
    }
    if (
      user.password !== newUser.password ||
      user.userName !== newUser.userName
    ) {
      setError(true);
    } else {
      sessionStorage.userID = newUser._id;
      sessionStorage.nickName = newUser.nickName;
      history.push("/main");
    }
  }

  return (
    <LoginWrapper>
      <h1>MOODEYE</h1>
      <img src={Moodster} alt="Logo" />
      <div>
      <span>Username</span>
        <input
          name="userName"
          placeholder="chrysanthemum"
          onChange={handleChange}
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          onChange={handleChange}
        />
        <br/>
        <button type="submit" onClick={Login}>
          LOGIN
        </button>
      </div>
      <Link to="/register">NEW HERE? SIGN IN...</Link>
      {error && <p>INCORRECT USERNAME OR PASSWORD!</p>}
    </LoginWrapper>
  );
}

export default LoginPage;
