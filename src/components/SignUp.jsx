import React from "react";

const SignUp = ({
  onSignUp,
  signUpName,
  signUpPassword,
  setSignUpName,
  setSignUpPassword,
}) => {
  return (
    <>
      <div className="row">
        <div className="align-center col-md-7 offset-md-4 ">
          <h1 className="bg-body-tertiary text-black">Signup </h1>

          <input
            type="text"
            className="input-group mt-4 w-50"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
          />
          <input
            type="password"
            className="input-group mt-4 w-50"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <button
            className="col-md-4 offset-md-1 mt-4"
            onClick={() => {
              onSignUp();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
