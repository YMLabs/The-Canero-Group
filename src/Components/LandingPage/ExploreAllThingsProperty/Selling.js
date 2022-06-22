import React from "react";

function Selling() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            className="h-40   object-contain"
            src="./img/this_week_sold.webp"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Check this week's sold prices{" "}
        </h3>
        <p className="text-stone-600">
          Stay in the loop with the latest clearance rates and recent sales.
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          See auction results
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            className="h-40   object-contain"
            src="./img/selling_guide.webp"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Decide whether to sell or stay{" "}
        </h3>
        <p className="text-stone-600">
          Wondering if now's a good time to sell? See your options.
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          Read the selling guide{" "}
        </a>
      </div>

      <div className="border-2 border-gray-100 shadow-lg p-4 my-4 rounded-xl">
        <div className="flex justify-center p-4">
          <img
            className="h-40   object-contain"
            src="./img/calculators-borrow.webp"
            alt=""
          />
        </div>
        <h3 className="text-xl font-bold text-stone-800">
          Thinking about refinancing?
        </h3>
        <p className="text-stone-600">
          Calculate your equity to weigh up your financial options.
        </p>
        <a className="font-bold text-blue-900 hover:underline hover:underline-offset-4" href="">
          Use the refinance calculator
        </a>
      </div>
    </div>
  );
}

export default Selling;
