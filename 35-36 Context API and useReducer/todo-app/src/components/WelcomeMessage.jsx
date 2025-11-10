import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext); // this is the one line implementation of below two lines

  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your day</p>
  );
};
export default WelcomeMessage;
