import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItems = ({ newItems, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <>
      <form className="form form-control" onSubmit={handleSubmit}>
        <label className="pe-2 fs-3">Enter task</label>
        <div className="row">
          <div className="col-md-4 mt-2">
            <input
              className="input input-group form-control-sm "
              autoFocus
              ref={inputRef}
              id="task"
              type="text"
              placeholder="Enter ur toto task"
              required
              value={newItems}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </div>
          <div className="col-md-4 ">
            <button
              type="submit "
              className="btn btn-primary mt-2 w-100 align-content-center"
              onClick={() => inputRef.current.focus()}
            >
              <FaPlus className="border border-primary-subtle" size={20} />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItems;
