import { MdDeleteOutline } from "react-icons/md";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  // let todoName = "Buy Milk";
  // let todoDate = "03/11/25";
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate} </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger my-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
