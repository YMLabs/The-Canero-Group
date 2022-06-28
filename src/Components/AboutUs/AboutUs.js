import React from "react";
import Footer from "../LandingPage/Footer/Footer";
import Navbar from "../LandingPage/Navbar/Navbar";
import PropertyNews from "../LandingPage/PropertyNews/PropertyNews";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="">
          <img className="h-60 w-full object-cover" src="./img/about-us.jpg" alt="" />
        </div>
        <h1 className="text-white font-bold text-5xl absolute top-20 px-40">About The Canero Group</h1>
        
        <div className="px-40 py-12">

        <p className="py-4">
          The Canero Group is a private institution specializing in a full range
          of management and advisory services for Real Estate investors. Our
          exclusive services are provided to a diversity of clientele including
          high net worth individuals, financial institutions, REITS, and other
          commercial real estate related companies across the world, assisting
          all of our clients in every aspect of their real estate investment.
          Acting in a fiduciary capacity, our professional staff guides clients
          in seeking opportunities, the acquisition process, managing
          properties, and even arranging appropriate mortgage financing.
        </p>
        <p className="py-4">
          Using our secure Exchange system, we are able to provide our clients
          with the latest investment opportunities from our private database
          along with the tools and latest news on the current market in order
          for our clients to make educated investments. Aside from our own
          resources, we also utilize long-established relationships with
          distinguished individuals and reputable institutions around the world
          to assure that our clients’ goals are met.
        </p>
        <p className="py-4">
          The Canero Group’s primary goal is to help clients find the proper
          investments based on their objectives as well as managing such
          properties at the most efficient capacity to yield the highest
          profits. The primary executives of The Canero Group have been in the
          real estate business for over 30 years and as such are aware of the
          clients’ needs in making secure investments with today’s dynamic
          market. The consideration our professionals provide each client goes
          unparalleled in the industry, focusing on structuring investment
          programs for each client based on their particular needs.
        </p>
        <p className="py-4">
          Strict standards are utilized in every step of the real estate
          acquisition, management, and financing stages. All potential
          investments are thoroughly examined to be sure that they are in
          compliance with the client’s investment objectives.
        </p>
        </div>
      </div>

      <div className="py-4 px-16">
        <PropertyNews/>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
