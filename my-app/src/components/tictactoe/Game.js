import React, { useReducer, useState } from "react";
import { caculateWinner } from "../../Helpers";
import Board from "./Board";
import "./GameStyle.css";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// immutable không thể chỉnh sửa
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      // console.log("it working");
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;

      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));

      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      break;
  }
  return state;
};
const Game = () => {
  // const
  const [state, dispatch] = useReducer(gameReducer, initialState);

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   name: "teo",
  // });
  const winner = caculateWinner(state.board);

  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
      payload: {},
      // state.setBoard(Array(9).fill(null));
      // state.setXIsNext(true);
    });
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
