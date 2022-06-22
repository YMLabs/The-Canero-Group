import React from "react";

function Renting() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img className="h-40 object-contain" src="./img/rent.webp" alt="" />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Set up your renter profile
        </h3>
        <p className="text-stone-600">
          Are you a tenant looking for a new place? Get yourself ready to apply
          online.
        </p>
        <a
          className="font-bold text-blue-900 hover:underline hover:underline-offset-4"
          href=""
        >
          Create a profile{" "}
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img className="h-40 object-contain" src="./img/tenant.webp" alt="" />
        </div>
        <h3 className="text-xl font-bold text-stone-800">Find a tenant</h3>
        <p className="text-stone-600">
          List your property for rent through an agent or on your own.
        </p>
        <a
          className="font-bold text-blue-900 hover:underline hover:underline-offset-4"
          href=""
        >
          Advertise your rental property
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            className="h-40   object-contain"
            src="./img/flatmate.webp"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Looking for a flatmate?{" "}
        </h3>
        <p className="text-stone-600">
          Move into a new sharehouse, or find someone to join yours.
        </p>
        <a
          className="font-bold text-blue-900 hover:underline hover:underline-offset-4"
          href=""
        >
          Search for flatmates
        </a>
      </div>
    </div>
  );
}

export default Renting;
