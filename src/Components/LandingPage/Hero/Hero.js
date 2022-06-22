import React, { useState } from "react";

function Hero() {
  const [isBuyActive, setBuyActive] = useState(false)
  const [isRentActive, setRentActive] = useState(false)
  const [isSoldActive, setSoldActive] = useState(false)
  const [isAddressActive, setAddressActive] = useState(false)
  const [isAgentsActive, setAgentsActive] = useState(false)

  const makeBuyActive = () => {
    setBuyActive(true)
    setRentActive(false)
    setSoldActive(false)
    setAddressActive(false)
    setAgentsActive(false)
  }
  const makeRentActive = () => {
    setBuyActive(false)
    setRentActive(true)
    setSoldActive(false)
    setAddressActive(false)
    setAgentsActive(false)
  }
  const makeSoldActive = () => {
    setBuyActive(false)
    setRentActive(false)
    setSoldActive(true)
    setAddressActive(false)
    setAgentsActive(false)
  }
  const makeAddressActive = () => {
    setBuyActive(false)
    setRentActive(false)
    setSoldActive(false)
    setAddressActive(true)
    setAgentsActive(false)
  }
  const makeAgentsActive = () => {
    setBuyActive(false)
    setRentActive(false)
    setSoldActive(false)
    setAddressActive(false)
    setAgentsActive(true)
  }

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
        <div className="bg-white rounded-lg">
          <ul className="flex justify-evenly text-gray-500 p-4 mt-12">
            <li className="px-8 py-2 mx-2 cursor-pointer font-semibold" onClick={makeBuyActive} style={isBuyActive?{background:"#dedede", borderRadius:"7px", borderBottom:"5px solid #144B8B", color:"#171717" }:{}}>
              <a className=" hover:text-gray-900 hover:underline">Buy</a>
            </li>
            <li className="px-8 py-2 mx-2 cursor-pointer font-semibold"  onClick={makeRentActive} style={isRentActive?{background:"#dedede", borderRadius:"7px", borderBottom:"5px solid #144B8B", color:"#171717" }:{}}>
              <a className=" hover:text-gray-900 hover:underline">Rent</a>
            </li>
            <li className="px-8 py-2 mx-2 cursor-pointer font-semibold"  onClick={makeSoldActive} style={isSoldActive?{background:"#dedede", borderRadius:"7px", borderBottom:"5px solid #144B8B", color:"#171717" }:{}}>
              <a className=" hover:text-gray-900 hover:underline">Sold</a>
            </li>
            <li className="px-8 py-2 mx-2 cursor-pointer font-semibold"  onClick={makeAddressActive} style={isAddressActive?{background:"#dedede", borderRadius:"7px", borderBottom:"5px solid #144B8B", color:"#171717" }:{}}>
              <a className=" hover:text-gray-900 hover:underline">Address</a>
            </li>
            <li className="px-8 py-2 mx-2 cursor-pointer font-semibold"  onClick={makeAgentsActive} style={isAgentsActive?{background:"#dedede", borderRadius:"7px", borderBottom:"5px solid #144B8B", color:"#171717" }:{}}>
              <a className=" hover:text-gray-900 hover:underline">Agents</a>
            </li>
          </ul>

          <div className="flex items-center justify-center">
            <div className="relative flex w-full flex-wrap items-stretch p-4">
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
                className="px-3 py-3 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 hover:bg-gray-100"
              />
            </div>
            <button className="rounded-full hover:bg-gray-100 px-4 py-2 text-semibold flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-adjustments-horizontal"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="14" cy="6" r="2" />
                <line x1="4" y1="6" x2="12" y2="6" />
                <line x1="16" y1="6" x2="20" y2="6" />
                <circle cx="8" cy="12" r="2" />
                <line x1="4" y1="12" x2="6" y2="12" />
                <line x1="10" y1="12" x2="20" y2="12" />
                <circle cx="17" cy="18" r="2" />
                <line x1="4" y1="18" x2="15" y2="18" />
                <line x1="19" y1="18" x2="20" y2="18" />
              </svg>{" "}
              Filters
            </button>
            <button className="rounded-full px-4 py-2 mx-2 bg-[#144B8B] hover:bg-[#144BAA] text-gray-100 font-semibold">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
