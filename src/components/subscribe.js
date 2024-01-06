// import { Button } from "bootstrap";
import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { firebaseApp } from "../Context/Firebase";
const Subscribe = ({ items, handleCheck, handleDelete }) => {
  const auth = getAuth(firebaseApp);
  return (
    <>
      <div className="row bg-primary">
        <div className="col col-sm-6">
          <h1 className="bg-primary p-1"> Todo List</h1>
        </div>
        <div className="col col-sm-1 offset-5">
          <button
            className="btn btn-secondary mt-2"
            onClick={() => signOut(auth)}
          >
            Logout
          </button>
        </div>
      </div>
      <p className="bg-secondary d-inline-flex p-2 fs-3 mt-1 fw-bolder text-decoration-underline">
        Welcome to TODO List created By ArunKarthick
      </p>
      <br></br>

      {items.length ? (
        <ul className="list list-group">
          {items.map((item) => (
            <li key={item.id} className="list list-group-item">
              <input
                size={60}
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
                className="form form-check-label"
              />
              <label
                onDoubleClick={() => handleCheck(item.id)}
                style={
                  item.checked
                    ? {
                        textDecoration: "line-through",
                        color: "grey",
                        fontWeight: "lighter",
                      }
                    : { fontWeight: "bolder" }
                }
                className="fs-3 ps-4"
              >
                {item.name}
              </label>
              <MdDeleteOutline
                size={30}
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
                className="ms-4"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text text-center fs-4 fw-bolder">No list itmes found</p>
      )}
    </>
  );
};

Subscribe.defaultProps = {
  title: "Todo List",
};
export default Subscribe;
