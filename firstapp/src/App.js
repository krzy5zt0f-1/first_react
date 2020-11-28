import React, {useState} from 'react';
import './App.css';
//making dynamic featurs using useState
function App() {
const [isRed, setRed] = useState(false);
const [count, setCount] = useState(0);
//function to change the count
const increment =() => {
  setCount(count + 1);
}
//function to change the colour of the count
const colour = () =>{
  setRed(!isRed);
}
return(
  <div className="app">
  <button onClick={increment}>Increment</button>
  <button onClick={colour}>Change colour</button>
  <h1 className={isRed ? "red" : ""}>{count}</h1>
  </div> //jsx

);
}

export default App;
