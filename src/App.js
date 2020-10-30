import React from "react";
import CardList from "./CardList";
import { characters } from "./characters";
import Searchbox from "./Searchbox";

const App = () => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CardList characters={characters} />;
    </div>
  );
};
export default App;
