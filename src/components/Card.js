import React from "react";

const Card = ({ name, homeworld, species }) => {
  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={"https://robohash.org/1++?100*100"} />
      <div>
        <h2>{name}</h2>
        <p>{homeworld}</p>
        <p>{species}</p>
      </div>
    </div>
  );
};

export default Card;
