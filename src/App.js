import React from "react";
import "./App.css";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/search"></Route>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
