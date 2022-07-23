import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function MoodsterExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Moodeye"
            p="If you click me in the top bar, I will take you straight back to the main page. Try it out right away once you have read through all the functions."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default MoodsterExplanation;
