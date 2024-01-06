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
      <h1 className="text-center bg-body-tertiary text-black">Aignup Page</h1>

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
        onClick={() => {
          onSignUp();
        }}
      >
        Login
      </button>
    </>
  );
};

export default SignUp;
