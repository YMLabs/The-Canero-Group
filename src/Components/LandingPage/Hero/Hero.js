import React, { useState } from "react";

function Hero() {
  const [isActive, setActive] = useState("All Status");
  const makeActive = (e) => {
    setActive(e.target.innerHTML);
  };

  return (
    <section className="mx-2 my-0 hero-section flex flex-col justify-center items-center relative">
      <div className="w-11/12">
        <img
          className="w-full rounded-2xl object-cover"
          src="./img/hero-bg.png"
          alt=""
        />
      </div>
      <div className="absolute text-center">
        <h2 className="font-bold text-4xl">Properties to call home</h2>
        <div className="bg-white rounded-lg w-full">
          <ul className="flex justify-evenly text-gray-500 p-4 mt-12">
            <li
              className="px-8 py-2 mx-2 cursor-pointer font-semibold"
              onClick={makeActive}
              style={
                isActive === "All Status"
                  ? {
                      background: "#dedede",
                      borderRadius: "7px",
                      borderBottom: "5px solid #144B8B",
                      color: "#171717",
                    }
                  : {}
              }
            >
              <a className=" hover:text-gray-900 hover:underline">All Status</a>
            </li>
            <li
              className="px-8 py-2 mx-2 cursor-pointer font-semibold"
              onClick={makeActive}
              style={
                isActive === "Residential"
                  ? {
                      background: "#dedede",
                      borderRadius: "7px",
                      borderBottom: "5px solid #144B8B",
                      color: "#171717",
                    }
                  : {}
              }
            >
              <a className=" hover:text-gray-900 hover:underline">
                Residential
              </a>
            </li>
            <li
              className="px-8 py-2 mx-2 cursor-pointer font-semibold"
              onClick={makeActive}
              style={
                isActive === "Commercial"
                  ? {
                      background: "#dedede",
                      borderRadius: "7px",
                      borderBottom: "5px solid #144B8B",
                      color: "#171717",
                    }
                  : {}
              }
            >
              <a className=" hover:text-gray-900 hover:underline">Commercial</a>
            </li>
          </ul>

          <div className="flex items-center justify-evenly">
            <div
              className="rounded-full px-4 py-2 text-semibold flex items-center"
              style={{ display: isActive === "All Status" ? "none" : "" }}
            >
              <select name="" id="" className=" border-0 outline-0 rounded-full hover:bg-gray-100">
                <option className="bg-white text-semibold" value="">For Rent</option>
                <option className="bg-white text-semibold" value="">For Sale</option>
              </select>
            </div>

            <div className="relative flex w-96 flex-wrap items-stretch p-4">
              <span className="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-search"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#6b7280"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search suburb, postcode or state"
                className="px-3 py-3 relative rounded-lg border-0 ring-0 outline-none focus:outline-none w-full pl-10 hover:bg-gray-100"
              />
            </div>

            <button className="rounded-full px-4 py-2 mx-2 bg-[#144B8B] hover:bg-[#144BAA] text-gray-100 font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
