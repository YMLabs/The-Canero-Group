import React from "react";

function PropertyPage({ data }) {
  return (
    <div className="flex flex-col justify-center items-center p-2">
      <div className="relative">
        <img
          className="object-cover rounded-xl"
          src={data.imgSrc}
          style={{ height: "500px" }}
          alt=""
        />
        <div className="px-12 py-4 absolute top-2/3 rounded-xl left-1/4 text-white bg-[#144B8B]/70">
          <p className="text-2xl font-bold">{data.propertyName}</p>
          <p className="text-md">
            <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
            {data.propertyAddress}
          </p>
          <p className="text-md">{data.propertyArea} sqft</p>
          <p className="text-md">$ {data.propertyPrice}</p>
        </div>
      </div>
      <p className="text-center p-8">
        Expansive wrap-around terrace.Chefs kitchen by Armani Dada. The
        spacious, ocean front master suite with a spa-like marble bath. The
        friendly, accommodating staff is always available to assist you whether
        you're sunbathing at the full service beach or pool, getting treatments
        at spa, dining at the oceanfront restaurant or taking advantage of the
        many other amenities: movie theatre, fitness center, game room, yoga
        room, Prive Lounge and more.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center px-8">
          <div>
            <i className="fa fa-bed fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Bedrooms</p>
            <p>{data.bedrooms}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-8">
          <div>
            <i className="fa fa-shower fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Shower</p>
            <p>{data.shower}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-8">
          <div>
            <i className="fa fa-car fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Garage</p>
            <p>{data.garage}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-8">
          <div>
            <i className="fa fa-home fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Property Size</p>
            <p>{data.propertyArea} sqft</p>
          </div>
        </div>
      </div>
      <div className="p-12 w-full grid grid-cols-4 h-96">
        <img
          className="h-full object-cover brightness-75 hover:brightness-110 ease-in-out duration-200"
          src={data.room1}
          alt=""
        />
        <img
          className="h-full object-cover brightness-75 hover:brightness-110 ease-in-out duration-200"
          src={data.room2}
          alt=""
        />
        <img
          className="h-full object-cover brightness-75 hover:brightness-110 ease-in-out duration-200"
          src={data.room3}
          alt=""
        />
        <img
          className="h-full object-cover brightness-75 hover:brightness-110 ease-in-out duration-200"
          src={data.room4}
          alt=""
        />
      </div>
    </div>
  );
}

export default PropertyPage;
