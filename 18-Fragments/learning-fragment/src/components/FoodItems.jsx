import Item from "../Item";

const FoodItems = ({ items }) => {
  //let foodItems = [];
  //let foodItems = ["Dal", "Green vegetable", "Fruit", "Salad", "Milk"];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
