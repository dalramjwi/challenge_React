import React from "react";
import { styles } from "./data";
import { idAndChildren } from "./data";
import { styleObjMaker } from "./data";
const divMaker = (id: string, children: string | number | object) => {
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
const AllMaker = () => {
  const fragment = document.createDocumentFragment();
  for (const [id, children] of Object.entries(idAndChildren)) {
    const div = divMaker(id, children);
    fragment.appendChild(div);
  }
  document.body.appendChild(fragment);
  return null;
};
const App = () => {
  return <AllMaker />;
};

export default App;
