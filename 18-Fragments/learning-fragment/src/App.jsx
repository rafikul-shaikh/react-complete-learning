import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let [foodItems, setFoodItems] = useState([]);
  //let [textToShow, setTextState] = useState();

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      console.log("Food value entered is :" + newFoodItem);
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
        <ErrorMessage items={foodItems}></ErrorMessage>
      </Container>
    </>
  );
}

export default App;
