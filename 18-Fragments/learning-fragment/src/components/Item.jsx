import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  // const handleBuyButtOnClicked = () => {
  //   console.log(`${foodItem} being bought`);
  // };
  return (
    <li
      className={`${styles["my=item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["my-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
