import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      placeholder="Type here "
      value={displayValue}
      readOnly
    />
  );
};
export default Display;
