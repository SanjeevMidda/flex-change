import { useState } from "react";
import "./index.css";

function App() {
  const [status, setStatus] = useState(true);

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <div
        className="container"
        style={{
          transform: `rotate(${status ? "0deg" : "90deg"})`,
        }}
      >
        <div className="square">
          <div className="circleOne"></div>
        </div>
        <div className="square">
          <div className="circleTwo"></div>
        </div>
        <div className="square">
          <div className="circleThree"></div>
        </div>
        <div className="square">
          <div className="circleFour"></div>
        </div>
        <div className="square">
          <div className="circleFive"></div>
        </div>
      </div>

      <footer>
        <h3>circles</h3>
      </footer>
    </div>
  );
}

export default App;
