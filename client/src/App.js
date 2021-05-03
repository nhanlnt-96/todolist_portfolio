import React from "react";
import RouterOutlet from "./routes/RouterOutlet";

import "./styles/rwd.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <RouterOutlet />
      </div>
    </div>
  );
}

export default App;
