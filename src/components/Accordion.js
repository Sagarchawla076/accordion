import React, { useState } from "react";

const Accordion = ({ question, i }) => {
  const { id, title, info } = question;
  // const activee = question.id === active ? "" : "hidden";
  const [hidden, setHidden] = useState(true);
  const active = hidden ? "hidden" : "";
  const activeIcon = hidden ? "+" : "-";
  return (
    <div className="accordion ">
      <div className="accordion__heading">
        <div className="accordion__heading--question">{title}</div>
        <div
          className="accordion__heading--icon"
          onClick={() => setHidden(!hidden)}
        >
          <span>{activeIcon}</span>
        </div>
      </div>
      <div className={`accordion__text ${active}`}>{info}</div>
    </div>
  );
};
export default Accordion;
