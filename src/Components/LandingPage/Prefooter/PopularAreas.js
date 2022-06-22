import React from "react";

function PopularAreas() {
  return (
    <section>
      <p className="mb-4">Browse popular areas in USA</p>
      <div className="grid grid-cols-3 justify-items-start">
        <div>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">California house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">New York house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Florida house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Las Vegas house prices</p>
        </div>
        <div>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Nevada house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">New Jersey house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Ohio house prices</p>
        </div>
        <div>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Oregon house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Alaska house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Texas house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Utah house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Vermount house prices</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Virginia house prices</p>
        </div>
      </div>
    </section>
  );
}

export default PopularAreas;
