import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const hanleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const hanleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName(""); //to blank todo name after typing
    setDueDate(""); //to blank due date after typing
  };

  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your name here "
            value={todoName}
            onChange={hanleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={hanleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success  my-button"
            onClick={handleAddButtonClicked}
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
