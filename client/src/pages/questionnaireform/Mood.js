import React from "react";
import PropTypes from "prop-types";
import SliderInputField from "../../components/SliderInput";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function Mood({ setForm, formData }) {
  const { mood } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
          Great, let's get started right away. I have a few questions for you. With the slider under the smileys you can give me the respond.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <SliderInputField
          type="range"
          min="1"
          max="10"
          label="How are you today?"
          name="mood"
          value={mood}
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/dayInOneWord">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default Mood;

Mood.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
