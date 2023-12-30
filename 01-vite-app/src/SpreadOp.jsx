import React from "react";

const SpreadOp = () => {
  const num1 = [1, 2, 3];
  const num2 = [4, 5, 6];
  const num3 = [...num1, ...num2];

  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const [one, two, ...rest] = numbers;

  //Spread Operator with Object
  const vehicle1 = {
    brand: "KIA",
    model: "MN-D-2",
    color: "Red",
  };

  const upDateVehicle = {
    type: "car",
    year: 2022,
    color: "yellow",
  };

  const myUpdateVehicle = { ...vehicle1, ...upDateVehicle };

  console.log(myUpdateVehicle);

  return (
    <div>
      <h3>{num3}</h3>
      <h3>{one}</h3>
      <h3>{two}</h3>
      <h3>{rest}</h3>
    </div>
  );
};

export default SpreadOp;
