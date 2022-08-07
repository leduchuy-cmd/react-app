import React, { useState } from "react";
import { caculateWinner } from "../../Helpers";
import Board from "./Board";
import "./GameStyle.css";

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
    name: "teo",
  });
  const winner = caculateWinner(state.board);

  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    state.setBoard(Array(9).fill(null));
    state.setXIsNext(true);
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="game-winner">{winner ? ` Winner is ${winner}` : ""}</div>
      <button className="btn-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
