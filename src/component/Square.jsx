import React from 'react';

const Square = ({value,game}) => {
  // console.log(value);
  return <button  className="button" onClick={game}>{value}</button>;
};

export default Square;
