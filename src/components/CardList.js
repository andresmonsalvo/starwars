import React from "react";
import Card from "./Card";

const CardList = ({ characters }) => {
  return (
    <div>
      {characters.map((user, i) => {
        return (
          <Card
            key={i}
            name={characters[i].name}
            homeworld={characters[i].homeworld}
            species={characters[i].species}
          />
        );
      })}
    </div>
  );
};

export default CardList;
