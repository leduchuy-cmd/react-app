import React, { useState } from "react";
import { caculateWinnerU } from "./HelperU";
import BoardU from "./BroadU";
import "./GameStyle.css";

const GameU = () => {
  const [boardU, setBoardU] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winnerU = caculateWinnerU(boardU);

  const handClickU = () => {};
  return (
    <div>
      <BoardU cellU={boardU} onClick={handClickU}></BoardU>
    </div>
  );
};

export default GameU;
