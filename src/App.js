import {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  //hook
  const [counter, setCounter] = useState(0);

 useEffect(() => {
  //not allowed
  //counter = 100;

  alert('You\'ve changed the counter to: ' + counter);
 }, [counter]); 
  return (
    <div className="App">
      <button onClick={() => {setCounter((prevCount) => prevCount - 1)}}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {setCounter((prevCount) => prevCount + 1)}}>+</button>
    </div>
  );
}

export default App;
