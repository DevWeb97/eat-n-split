import React from "react";
import Button from "./Button";

function Friend({ infos }) {
  const { id, name, image, balance } = infos;
  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balance < 0 && (
        <p className="red">
          You owe {name} {Math.abs(balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}$
        </p>
      )}
      {balance === 0 && <p>{name} and you are even</p>}

      <Button className="button">Select</Button>
    </li>
  );
}

export default Friend;
