import React from "react";
import { useFirebase } from "../Context/Firebase";

const Login = ({
  onLogin2,
  uid,
  setUid,
  userName,
  setUserName,
  userPassword,
  setUserPassword,
}) => {
  const firebase = useFirebase();

  return (
    <>
      <h1 className="text-center bg-body-tertiary text-black">Login Page</h1>

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
