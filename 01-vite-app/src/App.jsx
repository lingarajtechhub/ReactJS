import Welcome from "./Welcome";
import ES from "./ES.jsx";
import DynamicComponentList from "./DynamicComponentList.jsx";
import Parent from "./Parent.jsx";
import Events from "./Events.jsx";
import AgeValidate from "./AgeValidate.jsx";
import LogicalAnd from "./LogicalAnd.jsx";
import Destructuring from "./Destructuring.jsx";
import SpreadOp from "./SpreadOp.jsx";

function App() {
  var a = 10;
  var b = 20;
  let name = "Qwerty";
  let age = 23;
  const person = { pfname: "Rahul", plname: "Kumar" };

  class Employee {
    empName = "";
    empId = 0;

    constructor(id, name) {
      this.empId = id;
      this.empName = name;
    }

    empMethod() {
      console.log("This is a Class Employee Method.");
    }
  }

  const emp = new Employee(4234, "Mohit Kumar");

  const myArray = ["qwerty", 75, 9, "keypard"]; //key index

  return (
    <div>
      <SpreadOp />
      <Welcome />
      <DynamicComponentList></DynamicComponentList>
      <Events />
      <AgeValidate />
      <br></br>
      <LogicalAnd />
      <Destructuring />
      <ES
        x={a}
        y={b}
        name={name}
        age={age}
        per={person}
        employee={emp}
        arr={myArray}
      />
      {console.log("hello World")}

      <br />
      <Parent></Parent>
    </div>
  );
}

export default App;

//Destructuring makes easy to extract only what is needed.
/*

const vehicles = ['mustang', 'f-20', 'bmw'];
const car = vehicles[0];
const car2 = vehicles[1];
const car3 = vehicles[2];

const [car, car2, car3] = vehicles;

when destructuring arrays the order that variables are declared is important.

const vehicles = ['mustang', 'f-20', 'bmw'];
const [car, , car2] = vehicles;

destructuring comes inhandy when a function returns an array;

function calculation(a,b){
  const add = a+b;
  const sub = a-b;
  const multi = a*b;
  const divide = a/b;

  return [add,sub,multi, devide];
}

const [add, sub, multi, divide] = calculation(2,3);


Spread Operator - (...) allows us to quickly copy all or part of an 
existing array or object into another array or object.


const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [...num1,...num2];


const numbers = [1,2,3,4,5,6,7];
const [one,two,...rest] = numbers;
*/
