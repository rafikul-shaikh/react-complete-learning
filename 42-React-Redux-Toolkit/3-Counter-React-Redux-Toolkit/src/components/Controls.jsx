import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    // console.log("increment called");
    dispatch(counterActions.increment());
    //dispatch({ type: "INCREAMENT" });
  };
  const handleDecrement = () => {
    // console.log("decrement called");
    dispatch(counterActions.decrement());
    //dispatch({ type: "DECREAMENT" });
  };
  const PrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={PrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center counter-row ">
        <input
          type="text"
          placeholder="Enter your number here "
          ref={inputElement}
        />
        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
