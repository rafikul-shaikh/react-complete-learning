import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  return (
    <li className={'${styles["my-item"]}'}>
      <span className={styles["my-span"]}>{foodItem}</span>
    </li>
  );
};
export default Item;
