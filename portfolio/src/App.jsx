
import './App.css';
import {useState} from "react";
function App() {
  const [counter, setCounter] = useState([0]);
  return (
    <div className="App">
       <h1>My Portfolio</h1>
      <h2>Raoji: {counter}</h2>
   <button onClick={() => {
     setCounter(counter +1); 
   }}>counter</button>
    </div>
  );
}

export default App;
