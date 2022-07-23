import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function DiaryExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Diary"
            p="You can find the diary here.
            Every entry you make is saved here and is available for you to read later. In the diary you can search all your entries by date and if you click on details you will see your complete diary entry. I'm looking forward to what you have to tell me."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default DiaryExplanation;
