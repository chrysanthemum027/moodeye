import React from "react";
import { useHistory } from "react-router-dom";
import ExplanationContent from "../../components/ExplanationContent";
import BasicPageLayout from "../../components/BasicPageLayout";

function QuestionnaireExplanation() {
  let history = useHistory();
  return (
    <BasicPageLayout
      childrenMainSection={
        <>
          <ExplanationContent
            h1="Diary entry"
            p="Every time you want to make a new diary entry, all you have to do is press the button on the bottom left and I'll start asking the questions. You should make an entry every day. But if you want to write to me more often, that's ok too. I enjoy listening to you and am happy when you tell me about your day."
            onClick={history.goBack}
          />
        </>
      }
    />
  );
}

export default QuestionnaireExplanation;
