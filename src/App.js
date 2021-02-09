import React, { useState } from "react";
import "./styles/App.css";
import Game from "./components/Game";

function App() {
  const [gameover, setGameover] = useState(false);

  const handleGameover = () => {
    setGameover(!gameover);
  };

  let content = (
    <div className="App">
      <Game handlegameover={handleGameover} />
    </div>
  );

  if (gameover) {
    content = (
      <div className="App">
        <h1>Game Over</h1>
      </div>
    );
  }

  return content;
}

export default App;
