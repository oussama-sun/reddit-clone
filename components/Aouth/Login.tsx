import Image from "next/image";
import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { aouthModalState } from "../../Atoms/AouthModalAtom";
import { auth } from "../../Firebase/clientApp";
import { FIREBASE_ERRORS } from "../../Firebase/errors";
const Login = () => {
  const setAuthModalState = useSetRecoilState(aouthModalState);
  const [LoginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gloading, gError] = useSignInWithGoogle(auth);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signInWithEmailAndPassword(LoginForm.email, LoginForm.password);
  }
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
      <button
        onClick={() => signInWithGoogle()}
        className="reddit-btn-Login flex justify-around items-center"
      >
        <Image src={"/googlelogo.png"} width={20} height={20} />
        Continue With Google
      </button>
      <button className="reddit-btn-Login">Some Other Provider</button>
      <h1 className="text-gray-500 w-full text-center">OR</h1>
      <input
        onChange={onChange}
        type="email"
        placeholder="Email Address"
        className="reddit-input"
        name="email"
        required
      />
      <input
        onChange={onChange}
        type="password"
        placeholder="Password"
        className="reddit-input"
        name="password"
        required
      />
      <button className="reddit-btn" type="submit">
        Log in
      </button>
      <p className="text-red-600 text-center font-light">
        {error &&
          FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]}
      </p>
      <p className="text-red-600 text-center font-light">
        {gError &&
          FIREBASE_ERRORS[gError.message as keyof typeof FIREBASE_ERRORS]}
      </p>
      <div className="flex flex-col text-center">
        <p className="font-light text-xs">
          Forgot Your Password?{" "}
          <label
            className="text-blue-500 cursor-pointer"
            onClick={() =>
              setAuthModalState((prev) => ({
                ...prev,
                view: "resetPassword",
              }))
            }
          >
            Reset
          </label>
        </p>
        <h2
          className="font-bold  text-blue-500 pl-2 cursor-pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          <label className="text-black">New hear? </label>
          SING UP
        </h2>
      </div>
    </form>
  );
};

export default Login;
