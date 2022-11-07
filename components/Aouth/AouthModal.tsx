import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { aouthModalState } from "../../Atoms/AouthModalAtom";
import AouthInput from "./AouthInput";

const AouthModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(aouthModalState);
  function handelClick() {
    setIsOpen((prev) => ({
      ...prev,
      open: !prev.open,
    }));
  }
  return (
    <>
      {isOpen.open ? (
        <div
          className={`z-50 absolute inset-0 bg-opacity-30 ${
            isOpen ? "flex" : "hidden"
          } items-center justify-center bg-black`}
        >
          <div className="absolute p-5 rounded-lg bg-white">
            <div className="flex flex-row w-60 justify-between items-center">
              <h1 className="text-2xl font-semibold">
                {isOpen.view === "login"
                  ? "Lgin"
                  : isOpen.view === "signup"
                  ? "Sing Up"
                  : isOpen.view === "resetPassword" && "Reset Password"}
              </h1>
              <i
                onClick={handelClick}
                className="fa-solid fa-xmark p-2 rounded-md transition duration-200 active:scale-90 hover:shadow-lg cursor-pointer border-2"
              ></i>
            </div>
            {/* <div>
              <AouthInput />
            </div> */}
          </div>
        </div>
      ) : (
        <div onClick={handelClick} className="reddit-btn ml-2 md:hidden">
          Aouth
        </div>
      )}
    </>
  );
};

export default AouthModal;
