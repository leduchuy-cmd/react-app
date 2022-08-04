import React from "react";
import { caculateWinner } from "../../Helpers";
import Cell from "./Cell";

const Board = () => {
  const cells = [null, null, null, "x", "x", "x", null, null, null];
  console.log(caculateWinner(cells));
  return (
    <div className="game-board">
      {Array(9)
        .fill()
        .map((item, index) => (
          <Cell key={index}></Cell>
        ))}
    </div>
  );
};

export default Board;
