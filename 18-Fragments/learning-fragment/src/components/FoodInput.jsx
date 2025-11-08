import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  //   const handleOnChange = () => {
  //     console.log(event.target.value);
  //   };

  return (
    <input
      type="text"
      placeholder="Enter your food here "
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
    />
  );
};
export default FoodInput;
