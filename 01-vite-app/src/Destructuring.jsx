import React from "react";

const Destructuring = () => {
  const cars = ["bmw", "audi", "kia"];

  const [x, y, z] = cars;

  function calculate(a, b) {
    const add = a + b;
    const sub = a - b;
    const mul = a * b;
    const divi = a / b;

    return [add, sub, mul, divi];
  }

  const [add, sub, mul, divi] = calculate(2, 3);

  return (
    <div>
      <h1>
        {x}-{y}-{z}
      </h1>
      <ol>
        <li>{add}</li>
        <li>{sub}</li>
        <li>{mul}</li>
        <li>{divi}</li>
      </ol>
    </div>
  );
};

export default Destructuring;
