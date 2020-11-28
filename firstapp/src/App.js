import React, {useState} from 'react';
import './App.css';
import Tweet from './tweet'
//making dynamic featurs using useState
function App() {
//Imgaine you get this by fetching some API, that's great,
const [users, setUser] = useState([
  {name: "Lucky Joe", message: "Hi fellas!", likes: "1200"},
  {name: "Unlucky Doe", message: "Hello people.", likes:"-1"}
])
return(
  //you get to automatically map data from fetch to your predefined react component
  <div className="app">
  {users.map(user => <Tweet name={user.name} message={user.message} likes={user.likes} />)}
  </div> //jsx

);
}

export default App;
