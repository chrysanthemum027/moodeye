import React from "react";
import PropTypes from "prop-types";
import InputField from "../../components/InputField";
import GoBackButton from "../../components/GoBackButton";
import NextButton from "../../components/NextButton";
import FormPageWrapper from "../../components/FormPageWrapper";
import BasicTextCard from "../../components/BasicTextCard";
import { Link } from "react-router-dom";

function UserLogin({ setForm, formData }) {
  const { nickName, userName, password, passwordRepeat } = formData;

  return (
    <FormPageWrapper>
      <div>
        <BasicTextCard>
          <p>Super, {nickName}! Let's set your login details now.</p>
        </BasicTextCard>
      </div>
      <div>
        <InputField
          label="Your username?"
          name="userName"
          value={userName}
          placeholder="ishi027"
          onChange={setForm}
        />
        <InputField
          type="password"
          label="Your password?"
          name="password"
          value={password}
          placeholder="Password"
          onChange={setForm}
        />
        <InputField
          type="password"
          label="Please repeat once"
          name="passwordRepeat"
          value={passwordRepeat}
          placeholder="Password"
          onChange={setForm}
        />
      </div>
      <div>
        <Link to="/register">
          <GoBackButton />
        </Link>
        <Link to="/register/moodster">
          <NextButton />
        </Link>
      </div>
    </FormPageWrapper>
  );
}

export default UserLogin;

UserLogin.propTypes = {
  setForm: PropTypes.func,
  formData: PropTypes.object,
};
