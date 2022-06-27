import React from "react";

function NearbyPlaces() {
  return (
    <section className="grid grid-cols-5 gap-4">
      <div className="h-full flex flex-col justify-center">
        <h1 className="font-semibold text-2xl">Explore Nearby Places</h1>
        <p>
          Explore our best listing in the city of your choice. We have a
          commitment to finding the right home at the right price.
        </p>
      </div>
      <div className="relative cursor-pointer">
        <img
          className="h-full rounded-md brightness-75 shadow hover:shadow-lg ease-in-out duration-200 hover:brightness-110"
          src="./img/nearby-cities/chicago.jpg"
          alt=""
        />
        <div className="text-white absolute bottom-3 p-4">
          <p className="text-xl">Chicago</p>
        </div>
      </div>
      <div className="relative cursor-pointer">
        <img
          className="h-full rounded-md brightness-75 shadow hover:shadow-lg ease-in-out duration-200 hover:brightness-110"
          src="./img/nearby-cities/hawaii.jpg"
          alt=""
        />
        <div className="text-white absolute bottom-3 p-4">
          <p className="text-xl">Hawaii</p>
        </div>
      </div>
      <div className="relative cursor-pointer">
        <img
          className="h-full rounded-md brightness-75 shadow hover:shadow-lg ease-in-out duration-200 hover:brightness-110"
          src="./img/nearby-cities/manhattan.jpg"
          alt=""
        />
        <div className="text-white absolute bottom-3 p-4">
          <p className="text-xl">Manhattan</p>
        </div>
      </div>
      <div className="relative cursor-pointer">
        <img
          className="h-full rounded-md brightness-75 shadow hover:shadow-lg ease-in-out duration-200 hover:brightness-110"
          src="./img/nearby-cities/toronto.jpg"
          alt=""
        />
        <div className="text-white absolute bottom-3 p-4">
          <p className="text-xl">Toronto</p>
        </div>
      </div>
      
    </section>
  );
}

export default NearbyPlaces;
