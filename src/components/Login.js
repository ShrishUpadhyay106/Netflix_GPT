import { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, userAvatar } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const Email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    //validate the form

    // console.log(Email.current.value);
    const message = CheckValidData(Email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    //sign in sign up logic
    if (!isSignInForm) {
      //sign up
      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:userAvatar,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src={BG_IMG}
          alt="Logo"
        />
      </div>
      <form
        onClick={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75"
      >
        <h1 className="font-bold text-2xl py-4 ">
          {isSignInForm ? "Sign In" : "sign Up"}{" "}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}

        <input
          ref={Email}
          type="text"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <p className="text-red-500 ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h3 className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to NetFlix? SignUp Now"
            : "Already registered? SignIn Now.."}
        </h3>
      </form>
    </div>
  );
};
export default Login;
