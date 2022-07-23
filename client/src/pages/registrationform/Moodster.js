import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function Moodster({ setForm, formData }) {
  const { moodsterName } = formData;

  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
          You did a great job. But I have one last request. I want a name also.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputField
          label="What should I be called?"
          name="moodsterName"
          value={moodsterName}
          placeholder="Moody"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/register/userlogin">
          <GoBackButton />
        </Link>
        <Link to="/register/review">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default Moodster;

Moodster.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
