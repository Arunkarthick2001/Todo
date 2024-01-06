// import { Button } from "bootstrap";
import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Subscribe = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      <h1 className="bg-primary text-center"> Todo List</h1>
      <p className="bg-secondary d-inline-flex p-2 fs-3 fw-bolder text-decoration-underline">
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
