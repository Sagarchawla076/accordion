import React from "react";
import AccordionList from "./AccordionList";
import Heading from "./Heading";
import "../styles/main.scss";
const App = () => {
  return (
    <div className="container">
      <Heading />
      <AccordionList />
    </div>
  );
};
export default App;
