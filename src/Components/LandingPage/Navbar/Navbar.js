import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

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
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            <Link to="/">
            Home
            </Link>
          </li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            About
          </li>
          <li className="z-10 text-3xl ring-0 px-2">
            <Dropdown
              label="Properties"
              style={{ background: "#fff", color: "#000",border:"none" }}
            >
              <Dropdown.Item>Rent</Dropdown.Item>
              <Dropdown.Item>Buy</Dropdown.Item>
              <Dropdown.Item>Sell</Dropdown.Item>
              <Dropdown.Item>Search</Dropdown.Item>
            </Dropdown>
          </li>
          <li className="z-10">
            <Dropdown
              label="Agents"
              style={{ background: "#fff", color: "#000" }}
            >
              <Dropdown.Item>For Rent</Dropdown.Item>
              <Dropdown.Item>For Buy</Dropdown.Item>
              <Dropdown.Item>For Sell</Dropdown.Item>
            </Dropdown>
          </li>
          <li className="p-2 rounded-lg cursor-pointer hover:bg-gray-100">
            Home Loans
          </li>
          <li className="z-10 rounded-lg cursor-pointer">
          <Dropdown
              label="Contact Us"
              style={{ background: "#fff", color: "#000" }}
            >
              <Dropdown.Item>
                <a href="https://goo.gl/maps/5FgndeorXT7pDhvDA" className="text-left">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                &nbsp;&nbsp;250 Giralda Ave Coral Gables, FL 33134
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="mailto:info@canerogroup.com" className="text-left">
                <i class="fa fa-envelope" aria-hidden="true"></i> 
                &nbsp;&nbsp;info@canerogroup.com
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <a href="tel:(305)444-5004" className="text-left">
                <i class="fa fa-phone-square" aria-hidden="true"></i>
                &nbsp;&nbsp;(305) 444-5004
                </a>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="contactUs" className="text-left">
                <i class="fa fa-paper-plane" aria-hidden="true"></i>
                &nbsp;&nbsp;Shoot us a message
                </Link>
              </Dropdown.Item>
            </Dropdown>
          </li>
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
