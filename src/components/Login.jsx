import React, { useState } from "react";
import { useFirebase } from "../Context/Firebase";
import { signOut } from "firebase/auth";

const Login = ({ onLogin }) => {
  const firebase = useFirebase();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const onLogin2 = () => {
    firebase.signInUser(userName, userPassword, (user, error) => {
      console.log("onLogin2");
      if (user) {
        // Handle successful login (user is not null)
        console.log("Login successful", user);
        // Call any other functions or set state as needed
      } else {
        // Handle login error (user is null, and error contains the error message)
        console.error("Login failed", error);
        // Display an error message or take appropriate actions
      }
    });
  };
  return (
    <>
      <heading>
        <h1 className="text-center bg-body-tertiary text-black">Login Page</h1>
      </heading>
      <input
        type="text"
        className="input-group mt-4 w-50"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        className="input-group mt-4 w-50"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button
        onClick={() => {
          onLogin2();
        }}
      >
        Login
      </button>
    </>
  );
};

export default Login;
