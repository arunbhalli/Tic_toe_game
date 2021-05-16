import React from 'react';
import Square from './Square';
const Board = ({board, handleSquareClick}) => {
  const renderSquare = (position) => {
    return (
      <Square
        value={board[position]}
        game={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div>
      <div>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
