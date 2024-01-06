import Subscribe from "./components/subscribe";
import { useEffect, useState } from "react";
import React from "react";
import AddItems from "./components/AddItems";
import { firebaseApp, useFirebase } from "./Context/Firebase";
import Login from "./components/Login";
import MainContent from "./components/MainContent";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref, get, set, remove, getDatabase } from "firebase/database";
import SignUp from "./components/SignUp";

function App() {
  const [items, setItems] = useState([]); // For main list to display in view
  const [newItems, setNewItem] = useState(""); //To get data from input feild
  const [uid, setUid] = useState(""); //To set userid for data retriving after very state reload
  const [showSubs, setShowSubs] = useState(false); //To change from login to Main screen

  const firebase = useFirebase(); //importing firebase context with signIn and signUp functions

  // For login
  const [userName, setUserName] = useState(""); //To get userId for Login
  const [userPassword, setUserPassword] = useState(""); //To get userPassword for Login
  const onLogin2 = () => {
    firebase.signInUser(userName, userPassword, (user, error) => {
      console.log("onLogin2");
      if (user) {
        console.log("Login successful", user.uid);
        setUid(user.uid);
      } else {
        console.error("Login failed", error);
      }
    });
  };

  // For SignUp
  const [signUpName, setSignUpName] = useState(""); //To get UserName for signUp
  const [signUpPassword, setSignUpPassword] = useState(""); //To get UserPassword for signUp
  const onSignUp = () => {
    firebase.signUpUser(signUpName, signUpPassword, (user, error) => {
      console.log("onSignup");
      if (user) {
        console.log("Login successful", user.uid);
        setUid(user.uid);
      } else {
        console.error("Login failed", error);
      }
    });
  };

  // For check and uncheck list items
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    set(ref(database, uid), listItems);
    localStorage.setItem("todolist", JSON.stringify(listItems));
  };

  // For deleting list items
  const database = getDatabase(firebaseApp);
  // const dataR/ef = ref(database, "yourData");
  const handleDelete = (id) => {
    const dataRef = ref(database, uid);
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    remove(ref(database, uid))
      .then(() => {
        console.log("Remove Success ");
      })
      .catch(() => {
        console.log("Removing Error");
      });
    set(dataRef, updatedItems)
      .then(() => {
        console.log("Data written for Delete operation");
      })
      .catch((error) => {
        console.error("Data written error for delete operation", error);
      });
  };

  //For login
  const onLogin = () => {
    setShowSubs(true);
    // console.log(userName, userPassword);
  };
  const auth = getAuth(firebaseApp);

  async function fetchData(dat) {
    // console.log(dat);
    const dataRef = ref(database, dat);
    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          // console.log("Data:", data);
          setItems(data);
        } else {
          console.log("No data available");
          setItems([]);
        }
      })
      .catch((error) => {
        console.error("Error getting data:", error);
      });
  }
  useEffect(() => {
    // authStat();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowSubs(true);
        setUid(user.uid);
        fetchData(user.uid);
        // localStorage.setItem("uid", JSON.stringify(user.uid));
      } else {
        setShowSubs(false);
      }
    });
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
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
    // console.log(uid);
    var path = uid;
    // console.log(path);
    const dataRef = ref(database, `${path}`);
    setItems(listItems);
    set(dataRef, listItems)
      .then(() => {
        fetchData(path);
        console.log("Data has been successfully written!");
      })
      .catch((error) => {
        console.error("Error writing data:", error);
      });
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
          AddItems={AddItems}
          newItems={newItems}
          setNewItem={setNewItem}
        ></MainContent>
      ) : (
        <>
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
          <SignUp
            onSignUp={onSignUp}
            signUpName={signUpName}
            signUpPassword={signUpPassword}
            setSignUpName={setSignUpName}
            setSignUpPassword={setSignUpPassword}
          ></SignUp>
        </>
      )}
    </>
  );
}

export default App;
