import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function CallButtonExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Emergency call"
            p="If you press the button at the top left you can be connected immediately to the telephone counseling service. The people there always have an open ear for you and your problems. So you don't have to be afraid to call them when you're feeling down and you don't have anyone to talk to."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default CallButtonExplanation;
