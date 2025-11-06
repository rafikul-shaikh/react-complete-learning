import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //let foodItems = [];
  let foodItems = ["Dal", "Green vegetable", "Fruit", "Salad", "Milk"];

  return (
    <>
      <h1 className="food-heading">Healthy food</h1>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </>
  );
}

export default App;
