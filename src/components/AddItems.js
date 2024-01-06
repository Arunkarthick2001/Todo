import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { firebaseApp } from "../Context/Firebase";

const AddItems = ({ newItems, setNewItem, handleSubmit }) => {
  const auth = getAuth(firebaseApp);
  return (
    <>
      <form className="form form-control">
        <label className="pe-2 mt-3 fs-2">Enter task</label>
        <input
          className="input input-group input-group-text"
          autoFocus
          id="task"
          type="text"
          placeholder="Enter ur toto task"
          required
          value={newItems}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <div className="row">
          <div className="col-md-7 offset-md-4 mt-2">
            <button
              type="submit "
              className="btn btn-dark mt-2 w-50 align-content-center"
              onClick={handleSubmit}
            >
              <FaPlus className="border border-primary-subtle" size={30} />
            </button>
          </div>
        </div>
      </form>
      <button onClick={() => signOut(auth)}>Logout</button>
    </>
  );
};

export default AddItems;
