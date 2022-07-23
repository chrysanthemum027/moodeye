import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function MenueExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Menu"
            p="The menu is at the top right.
            Here you will find all the points that can be controlled in the app. Feel free to click through, you can't break anything and when you're done, you can easily find your way back here via the help."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default MenueExplanation;
