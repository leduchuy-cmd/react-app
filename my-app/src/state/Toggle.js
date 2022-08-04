import React, { useState } from "react";
import "./ToggleStyle.css";

function Toggle() {
  const [on, setOn] = useState(false);
  console.log(on);

  const handleToggle = () => {
    setOn((on) => !on);
  };

  return (
    <div>
      <div className={`toogle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spiner ${on ? "active" : ""}`}></div>
      </div>
      {on ? "On" : "Off"}
    </div>
  );
}

export default Toggle;
