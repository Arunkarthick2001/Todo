import Subscribe from "./components/subscribe";
import { useEffect, useState } from "react";
import React from "react";
import { Footer } from "./components/footer";
import AddItems from "./components/AddItems";
import { firebaseApp, useFirebase } from "./Context/Firebase";
import Login from "./components/Login";
import MainContent from "./components/MainContent";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "sample1", Dept: "ECE", checked: false },
  ]);

  // for Subscribe and unsubscribe
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

  // For check and uncheck list items
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  // For deleting list items
  const handleDelete = (id) => {
    console.log("del" + id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  // For adding new list items

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

  //importing firebase context
  const firebase = useFirebase();

  //For login
  const [showSubs, setShowSubs] = useState(false);
  const onLogin = () => {
    setShowSubs(true);
    // console.log(userName, userPassword);
  };
  const auth = getAuth(firebaseApp);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowSubs(true);
        // ...
      } else {
        setShowSubs(false);
      }
    });
  });

  const writeData = async () => {
    console.log("write  innnn");
    const result = await addDoc(collection(firestore, "Notes"), {
      name: "Arun",
      checked: false,
    });
    console.log(result);
  };
  return (
    <>
      <button onClick={writeData}>write</button>
      {showSubs ? (
        <MainContent
          Subscribe={Subscribe}
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          handleSubmit={handleSubmit}
          changeState={changeState}
          Name={Name}
          setName={setName}
          AddItems={AddItems}
          newItems={newItems}
          setNewItem={setNewItem}
        ></MainContent>
      ) : (
        <Login onLogin={onLogin}></Login>
      )}
    </>
  );
}

export default App;
