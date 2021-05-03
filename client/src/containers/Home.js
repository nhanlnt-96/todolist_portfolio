import React from "react";
import { withRouter } from "react-router";

const Home = () => {
  return (
    <div className="home">
      <h1>hello this is homepage</h1>
    </div>
  );
};

export default withRouter(Home);
