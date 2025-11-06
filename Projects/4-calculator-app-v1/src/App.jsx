import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input id="display" type="text" />
      <div>
        <button id="buttons-container">c</button>{" "}
      </div>
    </div>
  );
}

export default App;
