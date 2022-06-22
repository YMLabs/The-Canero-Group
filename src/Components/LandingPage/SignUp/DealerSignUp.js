import React, { useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

function DealerSignUp() {
  const auth = getAuth();
  const googleAuthProvider = new GoogleAuthProvider();
  const facebookAuthProvider = new FacebookAuthProvider();
  const initialBuyerInfo = {
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassowrd: "",
    role:"dealer"
  };
  const [dealerCredentials, setDealerCredentials] = useState(initialBuyerInfo);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setDealerCredentials({
      ...dealerCredentials,
      [name]: value,
    });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((response) => {
        console.log("Register Successfull!");
        console.log(response);
        toast.success("Register succesful");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Sign up failed: ", error.message);
      });
  };

  const signUpUsingEmailAndPassword = () => {
    if (dealerCredentials.password === dealerCredentials.confirmPassowrd) {
      createUserWithEmailAndPassword(
        auth,
        dealerCredentials.email,
        dealerCredentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("Welcome", user);
          console.log(userCredential);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          // ..
        });
    } else {
      toast.error("Passwords don't match");
    }
  };

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookAuthProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        toast.success("Sign in by Facebook is Successfull.")
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        toast.error("Oops! Something went wrong!")
        toast.error(errorMessage)

        // ...
      });
  };

  return (
    <div className="p-2 flex flex-col items-center">
      <ToastContainer />

      <h1 className="text-3xl">Welcome New Dealer</h1>
      <div className="flex justify-between items-center">
        <button
          className="px-4 py-2 m-2 bg-[#4285F4] rounded-lg text-white"
          onClick={signInWithGoogle}
        >
          Sign In with Google{" "}
          <i class="fa fa-google fa-lg" aria-hidden="true"></i>
        </button>

        <button
          className="px-2 py-2 m-2 bg-[#4267B2] rounded-lg text-white"
          onClick={signInWithFacebook}
        >
          Sign In with Facebook{" "}
          <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
        </button>
      </div>

      <p>OR</p>

      <form
        className="flex flex-col items-center justify-center w-96 p-2"
        action=""
      >
        <div className="relative w-full flex flex-wrap items-stretch p-2">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-2">
            <i class="fa fa-user" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            placeholder="Your Name"
            className="py-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50"
            name="userName"
            value={dealerCredentials.userName}
            onChange={inputHandler}
          />
        </div>
        <div className="relative w-full flex flex-wrap items-stretch p-2">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-2">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            placeholder="Your Email Address"
            className="py-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50"
            name="email"
            value={dealerCredentials.email}
            onChange={inputHandler}
          />
        </div>
        <div className="relative w-full flex flex-wrap items-stretch p-2">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-2">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
          <input
            type="text"
            placeholder="Your Contact Number"
            className="py-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50"
            name="phone"
            value={dealerCredentials.phone}
            onChange={inputHandler}
          />
        </div>
        <div className="relative w-full flex flex-wrap items-stretch p-2">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-2">
            <i class="fa fa-key" aria-hidden="true"></i>
          </span>
          <input
            type="Password"
            placeholder="Your Password"
            className="py-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50"
            name="password"
            value={dealerCredentials.password}
            onChange={inputHandler}
          />
        </div>
        <div className="relative w-full flex flex-wrap items-stretch p-2">
          <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-2">
            <i class="fa fa-key" aria-hidden="true"></i>
          </span>
          <input
            type="Password"
            placeholder="Confirm Your Password"
            className="py-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50"
            name="confirmPassowrd"
            value={dealerCredentials.confirmPassowrd}
            onChange={inputHandler}
          />
        </div>

        <button
          className="py-2 px-4 m-2 text-md text-gray-100 bg-[#144B8B] hover:brightness-110 shadow-md hover:shadow-xl transition ease-in-out duration-200 rounded-lg"
          type="button"
          onClick={signUpUsingEmailAndPassword}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default DealerSignUp;
