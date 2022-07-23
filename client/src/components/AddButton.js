import React from "react";
import styled from "@emotion/styled";
import Plus from "../assets/icons/plus.svg";
import PropTypes from "prop-types";

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  color: var(--text-color-dark);
  & > span {
    padding: 1rem;
    margin: 0;
  }
  & > img {
    width: 2rem;
  }
`;

function AddButton({ onClick, description }) {
  return (
    <Button onClick={onClick}>
      <span>{description}</span>
      <img src={Plus} alt="Plus sign" />
    </Button>
  );
}

export default AddButton;
AddButton.propTypes = {
  onClick: PropTypes.func,
  description: PropTypes.string,
};
