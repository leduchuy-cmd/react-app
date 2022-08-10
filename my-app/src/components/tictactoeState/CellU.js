import React from "react";

const CellU = ({ value, onClick, className }) => {
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default CellU;
