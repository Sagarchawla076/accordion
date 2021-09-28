import React, { useState } from "react";
import Accordion from "./Accordion";
import questions from "./Data";
const AccordionList = () => {
  // const [active, setActive] = useState(null);

  const renderQuestions = questions.map((question, i) => {
    return (
      <Accordion
        question={question}
        i={i}
        // active={active}
        // setActive={setActive}
      />
    );
  });

  return <div className="accordion-list">{renderQuestions}</div>;
};

export default AccordionList;
