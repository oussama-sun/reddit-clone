import React from "react";
import { useSetRecoilState } from "recoil";
import { aouthModalState } from "../../Atoms/AouthModalAtom";

const AouthBtn = () => {
  const setAouthModalState = useSetRecoilState(aouthModalState);
  return (
    <div className="hidden md:flex space-x-2 mx-2">
      <button
        onClick={() => setAouthModalState({ open: true, view: "login" })}
        className="reddit-btn"
      >
        Log in
      </button>
      <button
        onClick={() => setAouthModalState({ open: true, view: "signup" })}
        className="reddit-btn-outline"
      >
        Sign Up
      </button>
    </div>
  );
};

export default AouthBtn;
