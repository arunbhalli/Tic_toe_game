import React from 'react';

const Square = ({value}) => {
  // console.log(value);
  return <button onClick={()=>{
    console.log(value)
  }}>{value}</button>;
};

export default Square;
