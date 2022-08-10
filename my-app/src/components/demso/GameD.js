import React, { useState } from "react";

const GameD = () => {
  const [count, setCount] = useState(1);

  const handIncrease = () => {
    setCount(count + 1);
  };
  const handDecrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handIncrease}>Click up</button>
      <button onClick={handDecrease}>Click down</button>
    </div>
  );
};

export default GameD;
