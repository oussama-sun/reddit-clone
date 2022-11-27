import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { aouthModalState } from "../../Atoms/AouthModalAtom";
import { auth } from "../../Firebase/clientApp";
import AouthInput from "./AouthInput";

const AouthModal = () => {
  const [isOpen, setIsOpen] = useRecoilState(aouthModalState);
  const [user, loading, error] = useAuthState(auth);
  function handelClose() {
    setIsOpen((prev) => ({
      ...prev,
      open: false,
    }));
  }
  useEffect(() => {
    if (user) handelClose();
  }, [user]);

  return (
    <>
      {isOpen.open ? (
        <div
          className={`z-50 absolute inset-0 bg-opacity-30 ${
            isOpen.open ? "flex" : "hidden"
          } items-center justify-center bg-black`}
        >
          <div className="absolute w-2/3 p-7 flex flex-col items-center space-y-4 rounded-lg bg-white">
            <div className="flex w-full flex-grow items-center justify-end">
              <i
                onClick={handelClose}
                className="fa-solid fa-xmark p-2 rounded-md transition duration-200 active:scale-90 hover:shadow-lg cursor-pointer border-2"
              ></i>
            </div>
            <div className="flex min-w-fit items-center">
              <h1 className="text-2xl flex-grow text-center font-semibold">
                {isOpen.view === "login"
                  ? "Login"
                  : isOpen.view === "signup"
                  ? "Sing Up"
                  : isOpen.view === "resetPassword" && "Reset Password"}
              </h1>
            </div>
            <AouthInput />
          </div>
        </div>
      ) : (
        <div onClick={handelClose} className="reddit-btn ml-2 md:hidden">
          Aouth
        </div>
      )}
    </>
  );
};

export default AouthModal;
