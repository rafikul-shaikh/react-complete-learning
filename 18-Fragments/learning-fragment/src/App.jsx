import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <h1>Healthy food</h1>
      <ul class="list-group">
        <li class="list-group-item"> Dal</li>
        <li class="list-group-item">Green vegetable</li>
        <li class="list-group-item">Fruit</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">Milk</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
