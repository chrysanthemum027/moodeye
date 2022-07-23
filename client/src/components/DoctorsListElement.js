import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import InfoElementWrapper from "./InfoElementWrapper";
import { Link } from "react-router-dom";

const DoctorsListWrapper = styled.div`
  background: var(--card-background-color);
  border: none;
  box-shadow: var(--main-elements-shadow);
  border-radius: 5px;
  margin: 10px 0;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  & div:last-of-type,
  & div:last-of-type > a {
    align-self: flex-end;
    padding: 1rem 0 0.5rem;
    color: var(--button-proceed-color);
  }
`;

function DoctorsListElement({
  firstName,
  lastName,
  street,
  zipAndLocation,
  phone,
  mail,
  officeHours,
  id,
}) {
  return (
    <DoctorsListWrapper>
      <InfoElementWrapper>
        <span>First name:</span>
        <span>{firstName}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Last name:</span>
        <span>{lastName}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Street:</span>
        <span>{street}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Zip and location:</span>
        <span>{zipAndLocation}</span>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Phone number:</span>
        <a href={`tel:${phone}`}>{phone}</a>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Mail:</span>
        <a href={`mailto:${mail}`}>{mail}</a>
      </InfoElementWrapper>
      <InfoElementWrapper>
        <span>Office hours:</span>
        <span>{officeHours}</span>
      </InfoElementWrapper>
      <div>
        <Link to={`/main/doctors/change/${id}`}>
          Edit or delete...
        </Link>
      </div>
    </DoctorsListWrapper>
  );
}

export default DoctorsListElement;

DoctorsListElement.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  street: PropTypes.string,
  zipAndLocation: PropTypes.string,
  phone: PropTypes.string,
  mail: PropTypes.string,
  officeHours: PropTypes.string,
  id: PropTypes.string,
};
