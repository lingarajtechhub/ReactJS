import React from "react";

const AgeValidate = () => {
  const checkAge = (e) => {
    e.preventDefault();
    let age = e.target.value;
    if (age >= 18) {
      //console.log("Eligible For Voting.");
      document.getElementById("demo1").innerHTML = "Eligible For Voting.";
    } else {
      //console.log("Not Eligible For Voting.");
      document.getElementById("demo2").innerHTML = "Not Eligible For Voting.";
    }
  };

  return (
    <div>
      <h4 id="demo1"></h4>
      <h4 id="demo2"></h4>
      <input
        type="number"
        onKeyUp={checkAge}
        name="age"
        placeholder="Enter The Age"
      />
    </div>
  );
};

export default AgeValidate;
