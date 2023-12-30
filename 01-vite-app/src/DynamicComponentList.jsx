import React from "react";

const DynamicComponentList = () => {
  const myForm = [
    { type: "input", placeholder: "Enter your name" },
    { type: "button", text: "Click Me" },
  ];

  //Expression Evaluation
  return (
    <>
      <p>This is a Paragraph</p>
      {myForm.map((item, index) => {
        if (item.type === "input") {
          return (
            <input
              key={index}
              type={item.type}
              placeholder={item.placeholder}
            ></input>
          );
        }
        if (item.type === "button") {
          return <input key={index} type={item.type} value={item.text} />;
        }
      })}
    </>
  );
};

export default DynamicComponentList;
