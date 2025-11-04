function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row my-row">
        <div className="col-6">
          <input type="text" placeholder="Enter your name here " />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success  my-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
