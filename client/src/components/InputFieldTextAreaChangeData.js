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
  & > textarea {
    border: none;
    border-radius: 5px;
    box-shadow: var(--main-elements-shadow);
    padding: 0.4rem 0.7rem;
    font-family: "Montserrat";
    color: var(--inputfield-text-color);
    align-self: flex-end;
    width: 50%;
    height: 15rem;
    resize: none;
    outline: none;
  }
`;

function InputFieldTextAreaChangeData({ label, type = "text", ...otherProps }) {
  return (
    <InputFieldWrapper>
      <label>{label}</label>
      <textarea type={type} {...otherProps} />
    </InputFieldWrapper>
  );
}

export default InputFieldTextAreaChangeData;

InputFieldTextAreaChangeData.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
