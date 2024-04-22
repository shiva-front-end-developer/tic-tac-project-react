import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const WINNIG_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinners = (currentBoard) => {
    for (let i = 0; i < WINNIG_PATTERNS.length; i++) {
      const [a, b, c] = WINNIG_PATTERNS[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinners(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "❌" : "⭕";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinners(board);
    if (winner) return `Player ${winner} Wins !`;
    if (!board.includes(null)) return `It is a Draw !`;
    return `Player ${isXNext ? "❌" : "⭕"} turn`;
  };

  const resetGameLogic = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return {
    board,
    handleClick,
    calculateWinners,
    getStatusMessage,
    resetGameLogic,
  };
};

export default useTicTacToe;
