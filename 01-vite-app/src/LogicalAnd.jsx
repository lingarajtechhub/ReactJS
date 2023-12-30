import React from "react";

const LogicalAnd = () => {
  const x = 4;
  return (
    <div>
      {x >= 5 && <h1>x is not gte 5</h1>}
      {x > 5 ? <p>True</p> : <p>False</p>}
    </div>
  );
};

export default LogicalAnd;
