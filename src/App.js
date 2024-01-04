import Subscribe from "./components/subscribe";
import { useState } from "react";
import React from "react";
import { Footer } from "./components/footer";
import AddItems from "./components/AddItems";
function App() {
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
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    console.log("del" + id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  const [newItems, setNewItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItems.trim()) return;
    addItem(newItems);
    setNewItem("");
  };
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    console.log(id);
    const addNewItems = { id, name: item, checked: false };
    const listItems = [...items, addNewItems];
    setItems(listItems);
  };
  return (
    <>
      <Subscribe
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></Subscribe>
      <AddItems
        newItems={newItems}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      ></AddItems>
      <Footer length={items.length}></Footer>
    </>
  );
}

export default App;
