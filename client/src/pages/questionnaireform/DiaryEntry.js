import React from "react";
import PropTypes from "prop-types";
import InputFieldTextArea from "../../components/InputFieldTextArea";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function DiaryEntry({ setForm, formData }) {
  const { diaryEntry } = formData;
  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>
          We're almost done now, but I really want to hear more about your day that you haven't told me yet.
          </p>
        </BasicTextCard>
      </div>
      <div>
        <InputFieldTextArea
          label="Your diary entry:"
          name="diaryEntry"
          value={diaryEntry}
          placeholder="What else can you tell me?"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/main/questionnaire/whatCouldBeBetter">
          <GoBackButton />
        </Link>
        <Link to="/main/questionnaire/reviewandsubmit">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default DiaryEntry;

DiaryEntry.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
