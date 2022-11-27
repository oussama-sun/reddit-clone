import Image from "next/image";
import React, { ReactHTMLElement, useState } from "react";
import { useSetRecoilState } from "recoil";
import { aouthModalState } from "../../Atoms/AouthModalAtom";
import { auth } from "../../Firebase/clientApp";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { FIREBASE_ERRORS } from "../../Firebase/errors";
const SignUp = () => {
  const setAuthModalState = useSetRecoilState(aouthModalState);
  const [SignUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [FormError, setFormError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [SingInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (FormError) setFormError("");

    if (SignUpForm.password !== SignUpForm.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    createUserWithEmailAndPassword(SignUpForm.email, SignUpForm.password);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
      <button
        onClick={() => SingInWithGoogle()}
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
      <input
        onChange={onChange}
        type="password"
        placeholder="Confirm Password"
        className="reddit-input"
        name="confirmPassword"
        required
      />
      {
        <p className="text-red-600 text-center font-light">
          {error
            ? FIREBASE_ERRORS[error.message as keyof typeof FIREBASE_ERRORS]
            : FormError}
        </p>
      }
      <button
        className={`reddit-btn  ${loading && "transition-all bg-blue-400 "}`}
        type="submit"
      >
        {loading ? (
          <i className="fas fa-sync animate-spin text-white"></i>
        ) : (
          "Sing Up"
        )}
      </button>
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
          className="font-bold text-blue-500 pl-2 cursor-pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          <label className="text-black">Already a redditer?</label>
          LOG IN
        </h2>
      </div>
    </form>
  );
};

export default SignUp;
