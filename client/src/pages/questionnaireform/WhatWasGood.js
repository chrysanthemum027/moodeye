import React from "react";
import PropTypes from "prop-types";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function WhatWasGood({ setForm, formData }) {
  const { whatWasGood } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
          OK, we've done that. There are only 3 questions left.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputFieldTextArea
          label="What was good?"
          name="whatWasGood"
          value={whatWasGood}
          placeholder="What went well today..."
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main/questionnaire/dayInOneWord">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/whatCouldBeBetter">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default WhatWasGood;

WhatWasGood.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
