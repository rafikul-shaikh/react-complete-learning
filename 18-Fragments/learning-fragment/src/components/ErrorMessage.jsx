const ErrorMessage = ({ items }) => {
  //let foodItems = ["Dal", "Green vegetable", "Fruit", "Salad", "Milk"];

  return <>{items.length === 0 && <h3>Where is My Food</h3>}</>;
};
export default ErrorMessage;
