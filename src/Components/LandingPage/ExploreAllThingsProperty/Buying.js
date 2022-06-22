import React from "react";

function Buying() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            className="h-40 object-contain"
            src="./img/explore.webp"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Explore suburb profiles
        </h3>
        <p className="text-stone-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti,
          provident!
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          Research Suburbs
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img className="h-40 object-contain" src="./img/mortgage.webp" alt="" />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Need help with a mortgage?{" "}
        </h3>
        <p className="text-stone-600">
          Compare your finance options to make an informed call.{" "}
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          Explore Home Loans
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img className="h-40 object-contain" src="./img/estimated_property_prices.webp" alt="" />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
        Get estimated property prices        </h3>
        <p className="text-stone-600">
        See how much a property's worth, whether you own it or want to buy it.
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
        Check property values
        </a>
      </div>
    </div>
  );
}

export default Buying;
