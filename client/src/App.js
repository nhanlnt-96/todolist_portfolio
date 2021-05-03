import React from "react";
import RouterOutlet from "./routes/RouterOutlet";
import { Col } from "antd";

import "./styles/rwd.css";
import "./styles/App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Col xs={24} sm={24} md={24} lg={20} className="container">
        <RouterOutlet />
      </Col>
    </div>
  );
}

export default App;
