import React from "react";

const Child = ({ sendData }) => {
  const dataSendFromChild = () => {
    sendData("Data From Child");
  };

  return (
    <div>
      <button onClick={dataSendFromChild}>Send Data To Parent</button>
    </div>
  );
};

export default Child;
