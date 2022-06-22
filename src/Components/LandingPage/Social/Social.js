import React from "react";
import { Link } from "react-router-dom";

function Social() {
  return (
    <section className="py-4 flex justify-between items-center">
      <ul className=" flex justify-between items-center">
        <li className="px-2 text-neutral-600 hover:text-neutral-800">
          <a href="">
          <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
          </a>
        </li>
        <li className="px-2 text-neutral-600 hover:text-neutral-800">
          <a href="">
          <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </a>
        </li>
        <li className="px-2 text-neutral-600 hover:text-neutral-800">
          <a href="">
          <i class="fa fa-pinterest-p fa-lg" aria-hidden="true"></i>

          </a>
        </li>
        <li className="px-2 text-neutral-600 hover:text-neutral-800">
          <a href="">
          <i class="fa fa-linkedin fa-lg" aria-hidden="true"></i>

          </a>
        </li>
        <li className="px-2 text-neutral-600 hover:text-neutral-800">
          <a href="">
          <i class="fa fa-youtube fa-lg" aria-hidden="true"></i>

          </a>
        </li>
      </ul>


      <ul className=" flex justify-evenly items-center">
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <a href="">Advertise with us</a>
        </li>
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <Link to="/contactUs">Contact us</Link>
        </li>
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <a href="">Agent admin</a>
        </li>
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <a href="">Media Sales</a>
        </li>
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <a href="">Legal</a>
        </li>
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <a href="">Privacy</a>
        </li>
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <a href="">Site map</a>
        </li>
        <li className="text-neutral-600 hover:text-blue-900 hover:underline mr-4">
          <a href="">Careers</a>
        </li>
      </ul>
    </section>
  );
}

export default Social;
