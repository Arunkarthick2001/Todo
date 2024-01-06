import React from "react";

const Login = ({
  onLogin2,
  userName,
  setUserName,
  userPassword,
  setUserPassword,
}) => {
  return (
    <>
      <div className="row">
        <div className=" col-md-7 offset-md-4  ">
          <h1 className=" bg-body-tertiary text-black">Login Page</h1>

          <input
            type="text"
            className="input-group form-control bg-body-secondary border border-secondary  mt-4 w-50"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="input-group form-control bg-body-secondary border border-secondary  mt-4 w-50"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button
            className="mt-4 col-md-4 offset-md-1 btn btn-outline-info fw-bold fs-4"
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
