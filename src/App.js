import React from "react";
import { NameList } from "./NameList";

const App = () => {
  const names = [];

  return (
    <div>
      <h1>TO DO LIST</h1>
      <NameList names={names} />
    </div>
  );
};

export default App;


