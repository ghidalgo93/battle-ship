import React from "react";
import "./styles/App.css";
import Game from "./components/Game";

function App() {
  let content = (
    <div className="App">
      <Game />
    </div>
  );

  return content;
}

export default App;
