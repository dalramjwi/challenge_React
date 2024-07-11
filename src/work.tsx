import React from "react";
import { styles } from "./data";
import { idAndChildren } from "./data";

const divMaker = (id: string, children: string | number) => {
  const div = document.createElement("div");
  div.id = id;

  if (typeof children === "object") {
    for (const [childId, grandChildren] of Object.entries(children)) {
      const childDiv = divMaker(childId, grandChildren);
      div.appendChild(childDiv);
    }
  }

  return div;
};

const App = () => {
  return <App />;
};

export default App;
