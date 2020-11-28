import React from 'react';
import Tweet from './tweet';

function App() {

return(
  <div className="app">
  <Tweet name="Lucky Joe" message="What a great day, I got a new job!" likes="1200"/>
  <Tweet name="Unlucky Doe" message="Bad luck, I've lost my job today" likes="-1"/>
  </div> //jsx

);
}

export default App;
