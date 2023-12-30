import React from "react";
import Child from "./Child";

const Parent = () => {
  const receiveDataFromChild = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Child sendData={receiveDataFromChild} />
    </div>
  );
};

export default Parent;
