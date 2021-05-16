import Board from './component/Board';
import React, { useState } from 'react';
import winnerLogic from './component/winnerLogic'
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNet] = useState(false);
 const winner = winnerLogic(board)
 const message = winner ? `Winner is ${winner}`: `Next player is ${isXNext ? 'X' :'0'}`
  const handleSquareClick = (position) => {
    if(board[position] || winner){
      return
    }
    setBoard((prev)  => {  

      return prev.map((square, pos) => {
        if (pos === position) {
          return  isXNext ? 'X' : '0'
        }
        return square;
      });
    });
    setIsXNet( (prev) => !prev)
  };

  return (
    <>
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>

      <Board  board={board} handleSquareClick={handleSquareClick}/>
    </>
  );
}

export default App;
