import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

function Navbar() {
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const onOpenSignUpModal = () => setOpenSignUp(true);
  const onCloseSignUpModal = () => setOpenSignUp(false);
  const onOpenSignInModal = () => setOpenSignIn(true);
  const onCloseSignInModal = () => setOpenSignIn(false);
  return (
    <nav className="p-2">
      <ul className="flex justify-evenly items-center text-gray-900 text-md">
        <li>
          <img className="logo-img" src="./img/CANERO-GROUP-LOGO.png" alt="" />
        </li>
        <div className="flex justify-center font-semibold">
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">Buy</li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">Rent</li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">Sold</li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">New Homes</li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">Find Agents</li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">Home Loans</li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">News</li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">Commercial</li>
        </div>
        <li>
          <button
            className="font-semibold rounded-lg px-4 py-2 hover:bg-gray-100 mx-4"
            onClick={onOpenSignInModal}
          >
            Sign in
          </button>
          <button
            className="bg-[#144B8B]  hover:bg-[#144BAA] text-gray-100 rounded-lg px-8 py-2"
            onClick={onOpenSignUpModal}
          >
            Join
          </button>
        </li>
      </ul>

      <Modal
        open={openSignIn}
        onClose={onCloseSignInModal}
        center
        aria-labelledby="signup-modal"
        aria-describedby="signup as a dealer or as a buyer"
        className="rounded"
      >
        <div className="p-4">
          <SignIn />
        </div>
      </Modal>

      <Modal
        open={openSignUp}
        onClose={onCloseSignUpModal}
        center
        aria-labelledby="signup-modal"
        aria-describedby="signup as a dealer or as a buyer"
        className="rounded"
      >
        <div className="p-4">
          <SignUp />
        </div>
      </Modal>
    </nav>
  );
}

export default Navbar;
