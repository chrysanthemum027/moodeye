import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function User({ setForm, formData }) {
  const { firstName, lastName, nickName, birthDay } = formData;

  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>Hi, nice to have you here. Let's get to know each other a little.</p>
        </BasicTextCard>
      </div>
      <div>
        <InputField
          label="What is your name?"
          name="firstName"
          value={firstName}
          placeholder="Ishita"
          onChange={setForm}
        />
        <InputField
          label="What is your last name?"
          name="lastName"
          value={lastName}
          placeholder="Choudhary"
          onChange={setForm}
        />
        <InputField
          label="What is your nickname?"
          name="nickName"
          value={nickName}
          placeholder="Ishi"
          onChange={setForm}
        />
        <InputField
          label="When were you born?"
          name="birthDay"
          value={birthDay}
          placeholder="01.01.2000"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/">
          <GoBackButton />
        </Link>
        <Link to="register/userlogin">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}
export default User;

User.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
