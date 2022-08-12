import React, { useState } from "react";
import { caculateWinnerU } from "./HelperU";
import BoardU from "./BroadU";
import "./GameStyle.css";

const GameU = () => {
  const [boardU, setBoardU] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  // const [state, setState] = useState({
  //   boardU: Array(9).fill(null),
  //   xIsNext: true,
  //   nameU: "Teo",
  // });
  const winnerU = caculateWinnerU(boardU);

  const handClickU = (index) => {
    const boardCopyU = [...boardU];
    if (winnerU || boardCopyU[index]) return; // điều này này là nếu đã winner rồi thì không được nhấn nữa và nếu ô đó đã nhấn rồi cũng không được nhấn lại
    boardCopyU[index] = xIsNext ? "X" : "O";
    setBoardU(boardCopyU);
    setXIsNext((xIsNext) => !xIsNext);
    // setState({
    //   ...state,
    //   boardU: boardCopyU,
    //   xIsNext: !state.xIsNext,
    // });
  };
  const handResetGame = () => {
    setBoardU(Array(9).fill(null));
    setXIsNext(true);
  };
  return (
    <div>
      <BoardU cellU={boardU} onClick={handClickU}></BoardU>
      <div className="game-winner">{winnerU ? `winner is ${winnerU}` : ""}</div>
      <button onClick={handResetGame}>RESET GAME</button>
    </div>
  );
};

export default GameU;
