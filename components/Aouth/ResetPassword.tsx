import Image from "next/image";
import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { aouthModalState } from "../../Atoms/AouthModalAtom";
import { auth } from "../../Firebase/clientApp";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const setAuthModalState = useSetRecoilState(aouthModalState);
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await sendPasswordResetEmail(email);
  }
  return (
    <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
      <div className="flex flex-col space-y-4">
        <Image src={"/redditFace.svg"} width={50} height={50} />
        <h2 className="text-center font-semibold">Reset your password</h2>
      </div>
      {sending ? (
        <p>Check your email :)</p>
      ) : (
        <>
          <p className="text-center text-sm">
            Enter the email assosiated with your account and we'll send you a
            reset link.
          </p>
          <input
            type="email"
            placeholder="Email Address"
            className="reddit-input"
            name="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button className="reddit-btn">Reset Your Password</button>
        </>
      )}
      <p className="text-red-600 text-center font-light">
        {error && "This email dos not exist"}
      </p>
      <h2 className="font-bold  text-center pl-2">
        <label
          className="text-blue-500 cursor-pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </label>{" "}
        -{" "}
        <label
          className="text-blue-500 cursor-pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SING UP
        </label>
      </h2>
    </form>
  );
};

export default ResetPassword;
