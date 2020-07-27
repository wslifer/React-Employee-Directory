import React from "react";
import { BrowerserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={DirContainer} />
      </div>
    </Router>
  );
}

export default App;
