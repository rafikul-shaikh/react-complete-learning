import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveITems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveITems(newItems);
  };
  //let foodItems = [];
  //let foodItems = ["Dal", "Green vegetable", "Fruit", "Salad", "Milk"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
