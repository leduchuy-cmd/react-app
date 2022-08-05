import React from "react";
import { caculateWinner } from "../../Helpers";
import Cell from "./Cell";

const Board = (props) => {
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onclick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
