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
      <div className="row">
        <div className="align-center col-md-7 offset-md-4  ">
          <h1 className=" bg-body-tertiary text-black">Login Page</h1>

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
            className="mt-4 col-md-4 offset-md-1"
            onClick={() => {
              onLogin2();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
