import React, { useState } from "react";
import useTicTacToe from "../hooks/tic-tac-hooks";

const TicTacToe = () => {
  const {
    board,
    handleClick,
    calculateWinners,
    getStatusMessage,
    resetGameLogic,
  } = useTicTacToe();

  return (
    <>
      <div className="game">
        <div className="status">
          {getStatusMessage()}
          <button className="btn" onClick={resetGameLogic}>
            Reset Game
          </button>
        </div>

        <div className="board">
          {board.map((b, index) => (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
