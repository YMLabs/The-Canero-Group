import React from "react";

function Footer() {
  return (
    <footer className="py-4 w-full bg-gray-100">
      <div className="px-16">
        <img className="logo-img" src="./img/CANERO-GROUP-LOGO.png" alt="" />
        <div className="">
          <p>
          The Canero Group is a private institution specializing in a full range of management and advisory services for Real Estate investors.
          </p>
          <p className="font-bold mb-0 pb-0">International Sites</p>
          <ul className="flex items-center mt-0 pt-0">
            <li className="pr-4">India</li> |
            <li className="px-4">Indonesia</li>{" "}
            |<li className="px-4">Malaysia</li> |
            <li className="px-4">Singapore</li> |
            <li className="px-4">Thailand</li> |
            <li className="px-4">United States</li> |
            <li className="px-4">Vietnam</li> |
          </ul>
          <hr />
          <p>Copyright &#169; The Canero Group 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
