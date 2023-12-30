import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const Main = () => {
  return (
    <div>
      <p>This is main paragraph - {10 + 10}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Main />
  </React.StrictMode>
);

//npm i react@latest react-dom@latest

/*
Before
import ReactDOM from 'react-dom'
ReactDOM.render(<App />),document.getElementById('root));

After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElelemtById('root));
root.render(<App />);
*/
/*
Basic Concepts Of JS
====================
Classes
Arrow Function
Variables let,var,const
Array Method like .map()
Destructuring
Modules
Ternary Operator (?:)
Spread Operator
*/
