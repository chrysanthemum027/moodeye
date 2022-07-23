import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function MedicsExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Medications"
            p="You can find your medication here. You can save, edit, delete them all, search for names and of course you can also enter when you have to take which of them. Before I forget: In the menu bar you will also find a category for doctors, where you can do the same with all your doctors."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default MedicsExplanation;
