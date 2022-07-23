import React from "react";
import BasicPageLayout from "../components/BasicPageLayout";
import StyledTextContainer from "../components/StyledTextContainer";
import styled from "@emotion/styled";

const LinksHeadline = styled.h2`
  color: var(--text-color-attention);
`;

function Links() {
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <h1>Useful contact points</h1>
          </StyledTextContainer>
          <StyledTextContainer>
            <LinksHeadline>Number against grief</LinksHeadline>
            <p>
              <span>
              Number against grief
                <br />
                Circular Rd.
                <br />
                UP 251001
              </span>
              <span>Monday to Saturday from 2 pm to 8 pm</span>
              <a
                href="https://www.nummergegenkummer.de/kinder-und-jugendtelefon.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Homepage
              </a>
              <a href="7055948079">Phone</a>
              <a href="7055948079">Landline</a>
              <a href="ishitachoudhary270900@gmail.com">Mail</a>
            </p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default Links;
