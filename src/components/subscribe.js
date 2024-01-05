// import { Button } from "bootstrap";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { getDatabase, ref, set } from "firebase/database";
// import { app } from "../firebase";
import { firebaseApp, useFirebase } from "../Context/Firebase";
import { getAuth, signOut } from "firebase/auth";

// const db = getDatabase(app);

const Subscribe = ({
  items,
  handleCheck,
  handleDelete,
  Name,
  setName,
  changeState,
}) => {
  // const putData = () => {
  //   setCount((count) => count + 1);
  //   console.log(count);
  //   set(ref(db, "users/subs"), count);
  // };
  const auth = getAuth(firebaseApp);
  return (
    <>
      <h1 className="bg-primary text-center"> Todo List</h1>
      <p className="bg-secondary d-inline-flex p-2 fs-3 fw-bolder text-decoration-underline">
        Welcome to Arunkarthick Youtube channel
      </p>
      <br></br>
      <button
        onClick={changeState}
        className="p-1 fs-3 btn btn-primary border bottom-100 mb-4 ms-4"
      >
        {Name.text}
      </button>
      {/* <p className="fs-3 text-dark-emphasis text-bg-info">{count}</p> */}
      {items.length ? (
        <ul className="list list-group">
          {items.map((item) => (
            <li key={item.id} className="list list-group-item">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
                className=" form-check-input"
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
      <button onClick={() => signOut(auth)}>Logout</button>
    </>
  );
};

Subscribe.defaultProps = {
  title: "Todo List",
};
export default Subscribe;
