import React from "react";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";

function ContactUs() {
  return (
    <div>
      <Navbar/>
      <hr />
      <section className="px-16 flex justify-center p-8">
        <div className="contact-form rounded-l-lg bg-white border-2 w-1/2">
          <div className="contact-links p-4 grid grid-cols-3 gap-4 text-[#144B8B]">
            <div className="p-2 transition duration-200 ease-in-out rounded-lg shadow-md hover:shadow-lg flex flex-col justify-start items-center">
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              <p className="h-full flex justify-center items-center">
                <a target="_blank" href="https://goo.gl/maps/5FgndeorXT7pDhvDA">
                  250 Giralda Ave Coral Gables, FL 33134
                </a>
              </p>
            </div>
            <div className="p-2 transition duration-200 ease-in-out rounded-lg shadow-md hover:shadow-lg flex flex-col justify-start items-center break-all">
              <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <p className="h-full flex justify-center items-center">
                <a href="mailto:info@canerogroup.com">info@canerogroup.com</a>
              </p>
            </div>
            <div className="p-2 transition duration-200 ease-in-out rounded-lg shadow-md hover:shadow-lg flex flex-col justify-start items-center">
              <i class="fa fa-phone-square fa-2x" aria-hidden="true"></i>
              <p className="h-full flex justify-center items-center">
                <a href="tel:(305)444-5004">(305) 444-5004</a>
              </p>
            </div>
          </div>
          <form className="flex flex-col items-center justify-center" action="">
            <input
              className="w-11/12 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-11/12 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
              type="text"
              placeholder="Your Number"
            />
            <input
              className="w-11/12 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
              type="text"
              placeholder="Your Email Address"
            />
            <textarea
              className="w-11/12 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
              rows="3"
              type="text"
              placeholder="Your Message/Question/Feedback"
            />

            <button
              className="py-2 px-4 m-2 text-md text-gray-100 bg-[#144B8B] hover:brightness-110 shadow-md hover:shadow-xl transition ease-in-out duration-200 rounded-lg"
              type="button"
            >
              Submit <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <div className="map px-12 flex items-center bg-[#144B8B] rounded-r-lg">
          <img className="object-contain shadow-lg rounded-lg" src="./img/map.jpg" alt="" />
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default ContactUs;
