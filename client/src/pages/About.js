import React from "react";
import StyledTextContainer from "../components/StyledTextContainer";
import BasicPageLayout from "../components/BasicPageLayout";

function About() {
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <StyledTextContainer>
            <h1>About Moodeye</h1>
            <p>
            Moodeye is an application for children who are in therapy. It is designed to guide children and parents through this difficult phase and at the same time help them to better understand and interpret each other.
            </p>
            <p>
            Starting with version 2.0 the entries will be encrypted and completely protected from access, but right now the user can see only himself and his data as long as he is logged in.             </p>

            <p>
            Moodeye is a non-commercial app that was developed as part of a thesis for the Mini Project 2022.
            </p>
            <p>The rights to the idea are held by: Ishita Choudhary</p>
            <p>Version 1.0 | 2022</p>
          </StyledTextContainer>
        </>
      }
    />
  );
}

export default About;
