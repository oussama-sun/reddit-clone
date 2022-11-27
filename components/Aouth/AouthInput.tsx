import React from "react";
import { useRecoilValue } from "recoil";
import { aouthModalState } from "../../Atoms/AouthModalAtom";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";

const AouthInput = () => {
  const modalState = useRecoilValue(aouthModalState);
  return (
    <div>
      {modalState.view === "login" ? (
        <Login />
      ) : modalState.view === "signup" ? (
        <SignUp />
      ) : modalState.view === "resetPassword" ? (
        <ResetPassword />
      ) : null}
    </div>
  );
};

export default AouthInput;
