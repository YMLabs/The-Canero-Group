import React from "react";

function Researching() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img className="h-40 object-contain" src="./img/market.webp" alt="" />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Delve into market data
        </h3>
        <p className="text-stone-600">
          Stay on top of real estate trends written by economists and property
          experts.
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          Research the property market{" "}
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            className="h-40   object-contain"
            src="./img/real_estate_how.webp"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Real estate how to's{" "}
        </h3>
        <p className="text-stone-600">
          Read up on the ins and outs of any property process.
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          Explore property guides{" "}
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            className="h-40   object-contain"
            src="./img/calculators.webp"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Get your finances in order{" "}
        </h3>
        <p className="text-stone-600">
          Use our calculators to understand your financial position and options.
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          Browse home loan calculators
        </a>
      </div>
    </div>
  );
}

export default Researching;
