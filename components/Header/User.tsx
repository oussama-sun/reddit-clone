import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../Firebase/clientApp";

const User = () => {
  return (
    <div className="ml-3">
      <button className="reddit-btn" onClick={() => signOut(auth)}>
        LogOut
      </button>
    </div>
  );
};

export default User;
