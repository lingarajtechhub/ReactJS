import React from "react";

export default ({ x, y, name, age, per, employee, arr }) => {
  const hello = (a) => {
    console.log("This is a fat Arrow Function.", a);
  };

  const callFunction = () => {
    hello(23);
  };

  const myList = arr.map((item, index) => {
    return console.log(index, item);
  });

  return (
    <>
      {`Addition - ${x + y}`}
      {`Name: ${name} - Age: ${age}`} <br />
      {per.pfname} {per.plname} <br />
      {employee.empName} <br />
      {employee.empId} <br />
      {employee.empMethod()}
      {hello(12)}
      <button onClick={callFunction}>Click</button>
      {myList}
    </>
  );
};

//export default ES;
