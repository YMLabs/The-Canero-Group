import React from "react";

function PopularSearches() {
  return (
    <section>
      <p className="mb-4">Build new homes in USA</p>
      <div className="grid grid-cols-3 justify-items-start">
        <div>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Build in Utah</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Build in Virginia</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Home Builders in Washington</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">House and land packages in Michigan</p>
        </div>
        <div>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Build in Maryland</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Home Builders in Maine</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">House and land packages in Louisiana</p>
        </div>
        <div>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Build in Alabama</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">House and land packages in Hawaii</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Build in Florida</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Home Builders in Indiana</p>
          <p className="text-neutral-600 decoration-gray-600 hover:decoration-blue-900 underline underline-offset-2 cursor-pointer hover:text-blue-900">Build in Kentucky</p>
        </div>
      </div>
    </section>
  );
}

export default PopularSearches;
