import React from "react";

const jsx = () => {
  const element = <div id="root">hello world</div>;
  const elementR = React.createElement("div", { id: "root" }, "hello world");
  const element2 = (
    <div>
      <span>Hello</span> <span>world</span>
    </div>
  );

  return <div></div>;
};

export default jsx;
