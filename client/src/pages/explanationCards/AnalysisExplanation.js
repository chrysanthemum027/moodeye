import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function DoctorsExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Analysis"
            p="At the bottom right you will find the button for the analysis. But it will only be activated after 14 diary entries. That means you have to be patient and write diligently. If that happened, you can track the mood of your last 14 entries here.
            On a scale from 1 to 10, your mood of the last entries is displayed. The order 1-14 shows you how old the entry is. 1 is your newest entry, 14 is your oldest. I will also show you the average of your mood and, if necessary, give you appropriate advice."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default DoctorsExplanation;
