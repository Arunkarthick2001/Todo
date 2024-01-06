import Subscribe from "./components/subscribe";
import { useEffect, useState } from "react";
import React from "react";
import AddItems from "./components/AddItems";
import { firebaseApp, useFirebase } from "./Context/Firebase";
import Login from "./components/Login";
import MainContent from "./components/MainContent";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, get, set, remove, getDatabase } from "firebase/database";

function App() {
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const docRef = doc(firestore, "Notes", "WdCr9xEzN6lDvdLVyNWn");
  //     const docSnap = getDoc(docRef);
  //     console.log((await docSnap).data());
  //   }
  //   fetchData();
  // }, []);
  const [items, setItems] = useState([]);

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
  const database = getDatabase(firebaseApp);
  // const dataR/ef = ref(database, "yourData");
  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    remove(ref(database, uid))
      .then(() => {
        console.log("rmv suc");
      })
      .catch((error) => {
        console.log("errr");
      });
    set(dataRef, updatedItems)
      .then(() => {
        console.log("Data has been successfully written!");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
    // setItems([]);
  };

  // const handleDelete = async (nameToDelete) => {
  //   try {
  //     // Get a snapshot of the data
  //     const snapshot = await get(dataRef);

  //     // Iterate through the snapshot
  //     snapshot.forEach((childSnapshot) => {
  //       const key = childSnapshot.key;
  //       const item = childSnapshot.val();

  //       // Check the condition
  //       if (item.id === nameToDelete) {
  //         // Delete the item
  //         const itemRef = ref(dataRef, key);
  //         remove(itemRef)
  //           .then(() => {
  //             console.log(
  //               "Item has been successfully deleted from the database!"
  //             );
  //           })
  //           .catch((error) => {
  //             console.error("Error deleting item:", error);
  //           });
  //       }
  //     });
  //   } catch (error) {
  //     console.error("Error getting data:", error);
  //   }
  // };
  // For adding new list items

  const [newItems, setNewItem] = useState("");

  //importing firebase context
  const firebase = useFirebase();

  //For login
  const [showSubs, setShowSubs] = useState(false);
  const onLogin = () => {
    setShowSubs(true);
    // console.log(userName, userPassword);
  };
  const [uid, setUid] = useState("");
  const auth = getAuth(firebaseApp);
  // const db = getDatabase(firebaseApp);

  const dataRef = ref(database, "zDlQJ7PshngNFEiPa1HeMMLcXO43");
  async function fetchData() {
  //  var path = JSON.parse(localStorage.getItem("uid"));
    console.log(uid)
    const dataRef = ref(database, "zDlQJ7PshngNFEiPa1HeMMLcXO43");
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          console.log("Data:", data);
          setItems(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowSubs(true);
        fetchData();
        setUid(user.uid);
        console.log(uid + "ehdgf");
        localStorage.setItem("uid", JSON.stringify(user.uid));
        // ...
      } else {
        setShowSubs(false);
      }
    });
   
  }, []);
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const onLogin2 = () => {
    firebase.signInUser(userName, userPassword, (user, error) => {
      console.log("onLogin2");
      if (user) {
        // Handle successful login (user is not null)
        console.log("Login successful", user.uid);
        setUid(user.uid);
        // Call any other functions or set state as needed
      } else {
        // Handle login error (user is null, and error contains the error message)
        console.error("Login failed", error);
        // Display an error message or take appropriate actions
      }
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const dataRef = ref(db, uid);

    // Write the data to the specified location

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
    // setItems(listItems);
    set(dataRef, listItems)
      .then(() => {
        console.log("Data has been successfully written!");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
    fetchData();
  };
  return (
    <>
      {/* <button onClick={writeData}>write</button> */}
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
        <Login
          onLogin={onLogin}
          uid={uid}
          setUid={setUid}
          userName={userName}
          userPassword={userPassword}
          setUserName={setUserName}
          setUserPassword={setUserPassword}
          onLogin2={onLogin2}
        ></Login>
      )}
    </>
  );
}

export default App;
