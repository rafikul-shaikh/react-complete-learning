import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //let foodItems = [];
  let foodItems = ["Ruti", "Dal", "Green vegetable", "Fruit", "Salad", "Milk"];

  return (
    <>
      <h1>Healthy food</h1>
      {foodItems.length === 0 && <h3>Where is My Food</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
