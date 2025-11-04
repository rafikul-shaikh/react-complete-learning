function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "03/11/25";
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate} </div>
        <div className="col-2">
          <button type="button" class="btn btn-danger my-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem1;
