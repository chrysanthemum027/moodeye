import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { postNewDiaryEntry } from "../../api/diary";
import { Link, useHistory } from "react-router-dom";

const ReviewCard = styled.div`
  background: var(--card-background-color);
  color: var(--text-color-normal);
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  margin: 0.5rem 0 0;
  padding: 1rem;
  grid-area: 2 / 2 / 3 / 3;
  height: 90%;
  & > h2 {
    font-size: 1.2rem;
  }
  & > div {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    text-align: center;
  }
  & a,
  button {
    color: var(--button-proceed-color);
    text-align: center;
    border: none;
    background: transparent;
  }
  & > div > div {
    color: var(--text-color-attention);
    display: flex;
    justify-content: space-between;
  }
  & > div > div > span {
    text-align: left;
  }
  & > div > div > a {
    text-align: right;
  }
  & > div > span {
    align-self: flex-end;
    width: 100%;
    padding: 1rem 0 0;
    color: var(--text-color-normal);
    text-align: right;
  }
  button:last-of-type {
    padding: 1rem;
  }
`;

function Review({ setForm, formData }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const userID = sessionStorage.getItem("userID");
  const date = new Date();

  const newDiaryEntry = {
    mood: formData.mood,
    dayInOneWord: formData.dayInOneWord,
    whatWasGood: formData.whatWasGood,
    whatCouldBeBetter: formData.whatCouldBeBetter,
    diaryEntry: formData.diaryEntry,
    userID,
    date:
      date.getUTCFullYear() +
      "/" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + date.getUTCDate()).slice(-2) +
      " " +
      ("0" + date.getHours()).slice(-2) +
      ":" +
      ("0" + date.getMinutes()).slice(-2),
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      await postNewDiaryEntry(newDiaryEntry);
      formData.mood = "5";
      formData.dayInOneWord = "";
      formData.whatWasGood = "";
      formData.whatCouldBeBetter = "";
      formData.diaryEntry = "";
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      history.push("/main/questionnaire/submitmessage");
    }
  }

  let info;
  if (
    formData.dayInOneWord === "" ||
    formData.whatWasGood === "" ||
    formData.whatCouldBeBetter === "" ||
    formData.diaryEntry === ""
  ) {
    info = (
      <>
        <div>
        You seem to have missed something. Please look again and fill in the fields.
        </div>
        <Link to="/main/questionnaire">
        Click here to check everything...
        </Link>
      </>
    );
  } else {
    info = (
      <>
        <h2>Let's take a quick look</h2>
        <div>
          <div>
            <span>Your mood:</span>
            <Link to="/main/questionnaire">To edit...</Link>
          </div>
          <span>{formData.mood} of 10</span>
        </div>
        <div>
          <div>
            <span>Your word:</span>
            <Link to="/main/questionnaire/dayInOneWord">To edit...</Link>
          </div>
          <span>{formData.dayInOneWord}</span>
        </div>
        <div>
          <div>
            <span>What went well today:</span>
            <Link to="/main/questionnaire/whatWasGood">To edit...</Link>
          </div>
          <span>{formData.whatWasGood}</span>
        </div>
        <div>
          <div>
            <span>What would be better:</span>
            <Link to="/main/questionnaire/whatCouldBeBetter">
            To edit...
            </Link>
          </div>
          <span>{formData.whatCouldBeBetter}</span>
        </div>
        <div>
          <div>
            <span>Diary entry:</span>
            <Link to="/main/questionnaire/diaryEntry">To edit...</Link>
          </div>
          <span>{formData.diaryEntry}</span>
        </div>
        <button disabled={loading} type="submit" onClick={handleSubmit}>
        Send
        </button>
        {error && (
          <p>Unfortunately this did not work. Please try again.</p>
        )}
      </>
    );
  }

  return <ReviewCard>{info}</ReviewCard>;
}

export default Review;

Review.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
  mood: PropTypes.string,
  dayInOneWord: PropTypes.string,
  whatWasGood: PropTypes.string,
  whatCouldBeBetter: PropTypes.string,
  diaryEntry: PropTypes.string,
};
