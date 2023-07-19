import React from "react";
import { NameList } from "./NameList";

const App = () => {
  const names = [];

  return (
    <div>
      <a href="https://totdo-list-uing-react.vercel.app/?vercelToolbarCode=Czpd6t-OHcSxRPv">
        <h1>TO DO LIST</h1>
      </a>

      <NameList names={names} />
    </div>
  );
};

export default App;
