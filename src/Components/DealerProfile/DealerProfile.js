import React from "react";
import DealerListing from "./DealerListing";
import Navbar from "../LandingPage/Navbar/Navbar";
import Footer from "../LandingPage/Footer/Footer.js";

function DealerProfile() {
  return (
    <div className="">
      <Navbar />
      <hr />
      <div className="flex flex-row justify-center items-center p-2 m-2">
        <div className="p-2">
          <p className="text-xl">Dealer Name: </p>
          <p className="text-xl">Dealer Email Address:</p>
          <p className="text-xl">Dealer Phone Number:</p>
          <p className="text-xl">Dealer Address: </p>
        </div>
        <div className="p-2">
          <p className="text-xl font-medium">Perry Homes</p>
          <p className="text-xl font-medium">perryhomes@mail.com</p>
          <p className="text-xl font-medium">1.800.247.3779</p>
          <p className="text-xl font-medium">
            1921 West State Highway 46 New Braunfels, TX 78132
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <DealerListing />
      </div>
      <Footer />
    </div>
  );
}

export default DealerProfile;
