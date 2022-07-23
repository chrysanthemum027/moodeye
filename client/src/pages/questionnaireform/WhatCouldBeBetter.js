import React from "react";
import PropTypes from "prop-types";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function WhatCouldBeBetter({ setForm, formData }) {
  const { whatCouldBeBetter } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
          Great. Let's think a little bit about the next question and then you can hit the keys.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputFieldTextArea
          label="What could be better?"
          name="whatCouldBeBetter"
          value={whatCouldBeBetter}
          placeholder="This could have gone better..."
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main/questionnaire/whatWasGood">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/diaryEntry">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default WhatCouldBeBetter;

WhatCouldBeBetter.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
