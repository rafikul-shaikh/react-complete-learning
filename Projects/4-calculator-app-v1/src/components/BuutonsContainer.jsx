import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.button}>c</button>
      <button className={styles.button}>1</button>
      <button className={styles.button}>2</button>
      <button className={styles.button}>3</button>
      <button className={styles.button}>4</button>
    </div>
  );
};
export default ButtonsContainer;
