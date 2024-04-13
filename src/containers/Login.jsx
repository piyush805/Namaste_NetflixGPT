import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMG } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.config.lang);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const signInLogic = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      setErrorMessage(null);
    } catch (error) {
      const { code, message } = error;
      return setErrorMessage(code + " - " + message);
    }
  };

  const signUpLogic = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      await updateProfile(userCredential.user, {
        displayName: nameRef.current.value,
      });
      const user = auth.currentUser; // get updated user
      const { email, displayName, uid } = user;
      dispatch(addUser({ email, displayName, uid }));
      setErrorMessage(null);
    } catch (error) {
      const { code, message } = error;
      return setErrorMessage(code + " - " + message);
    }
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!emailValue || !passwordValue)
      return setErrorMessage("Please enter email and password");

    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      signInLogic();
    } else {
      signUpLogic();
    }
  };

  return (
    <div className="bg-black h-[100%] w-full overflow-hidden">
      <Header />
      <div>
        <img
          src={BACKGROUND_IMG}
          alt="logo"
          className="opacity-50 relative z-0 w-screen h-screen object-cover"
        />
      </div>
      <form className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-[30%] absolute top-4 px-8 sm:px-12 md:px-16 py-12 bg-black/75 z-50 my-8 sm:my-20 h-screen  mx-auto right-0 left-0 text-white rounded sm:h-[90%] text-sm sm:text-md md:text-lg">
        <h1 className="font-semibold  mb-8 text-xl sm:text-2xl md:text-3xl">
          {" "}
          {isSignInForm
            ? `${lang[selectedLanguage].signIn}`
            : `${lang[selectedLanguage].signUp}`}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder={`${lang[selectedLanguage].fullName}`}
            className="p-4 my-2 w-full border-gray-500 border bg-gray-700/25 rounded"
            y
            ref={nameRef}
          />
        )}
        <input
          type="text"
          placeholder={`${lang[selectedLanguage].email}`}
          className="p-4 my-2 w-full border-gray-500 border bg-gray-700/25 rounded"
          y
          ref={emailRef}
        />

        <input
          type="password"
          placeholder={`${lang[selectedLanguage].password}`}
          className="p-4 my-2 w-full border-gray-700 border-2 bg-gray-700/25 rounded-md"
          ref={passwordRef}
        />
        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
        <button
          className="font-semibold p-2 my-2 bg-red-600 w-full rounded active:bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm
            ? `${lang[selectedLanguage].signIn}`
            : `${lang[selectedLanguage].signUp}`}
        </button>
        <div className="mt-16 sm:mt-20 md:mt-36 text-sm sm:text-md md:text-lg ">
          <span className="text-gray-400">
            {isSignInForm
              ? `${lang[selectedLanguage].newToNetflix}`
              : `${lang[selectedLanguage].alreadyRegistered}`}
          </span>
          {""}
          <span
            className=" ml-2 md:hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? `${lang[selectedLanguage].signUp}`
              : `${lang[selectedLanguage].signIn}`}
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
