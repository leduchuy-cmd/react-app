import React from "react";
import CellU from "./CellU";

const BroadU = (props) => {
  return (
    <div className="game-boardU">
      {props.cellU.map((item, index) => (
        <CellU
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></CellU>
      ))}
    </div>
  );
};

export default BroadU;
