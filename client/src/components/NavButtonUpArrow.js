import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import UpArrow from "../assets/icons/uparrow.svg";
import { Link } from "react-router-dom";

const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: transparent;
  color: var(--text-color-normal);
  & > span {
    font-size: 0.7rem;
  }
`;

function NavButtonUpArrow({ description, to }) {
  return (
    <Link to={to}>
      <ButtonWrapper>
        <img src={UpArrow} alt="Up arrow" />
        <span>{description}</span>
      </ButtonWrapper>
    </Link>
  );
}

export default NavButtonUpArrow;

NavButtonUpArrow.propTypes = {
  description: PropTypes.string,
  to: PropTypes.string,
};
