import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItems = ({ newItems, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <>
      <form className="form form-control" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col col-sm-2">
            <label className="pe-2 fs-3 f">Enter task here</label>
          </div>
          <div className="col-md-4 mt-2">
            <input
              className="input input-group form-control-sm "
              autoFocus
              ref={inputRef}
              id="task"
              type="text"
              placeholder="Enter ur todo task"
              required
              value={newItems}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </div>
          <div className="col-md-4 ">
            <button
              type="submit "
              className="btn btn-primary mt-2 fw-bolder w-100 align-content-center"
              onClick={() => inputRef.current.focus()}
            >
              Add <FaPlus className="border border-primary-subtle" size={20} />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItems;
