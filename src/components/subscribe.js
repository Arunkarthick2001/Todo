// import { Button } from "bootstrap";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
const Subscribe = () => {
  const [Name, setName] = useState({ text: "Subscribe", count: 0 });
  const [count, setCount] = useState(0);
  function changeState() {
    if (Name.text === "Subscribe") {
      setName({ text: "Unsubscribe" });
    } else {
      setName({ text: "Subscribe" });
    }
    setCount(count + 1);
  }

  const [items, setItems] = useState([
    { id: 1, name: "Arun", Dept: "ECE", checked: false },
    {
      id: 2,
      name: "Karthick",
      Dept: "ECE",
      checked: false,
    },
    { id: 3, name: "Elakkya", Dept: "ECE", checked: false },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  return (
    <>
      <h1 className="bg-primary text-center">Hello to Youtube</h1>
      <p className="bg-secondary d-inline-flex p-2 fs-3 fw-bolder text-decoration-underline">
        Welcome to Arunkarthick Youtube channel
      </p>
      <br></br>
      <button
        onClick={changeState}
        className="p-1 fs-3 btn btn-primary border bottom-100"
      >
        {Name.text}
      </button>
      <p className="fs-3 text-dark-emphasis text-bg-info">{count}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label>{item.name}</label>
            <MdDeleteOutline role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </>
  );
};
export default Subscribe;
