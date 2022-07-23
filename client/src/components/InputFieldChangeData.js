import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const InputFieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > label {
    background: transparent;
    border: none;
    border-radius: 5px;
    padding: 0.4rem 0;
  }
  & > input {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    padding: 0.4rem 0.7rem;
    font-family: "Montserrat";
    color: var(--inputfield-text-color);
    align-self: flex-end;
    width: 50%;
  }
`;

function InputFieldChangeData({ label, type = "text", ...otherProps }) {
  return (
    <InputFieldWrapper>
      <label>{label}</label>
      <input type={type} {...otherProps} />
    </InputFieldWrapper>
  );
}

export default InputFieldChangeData;

InputFieldChangeData.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
