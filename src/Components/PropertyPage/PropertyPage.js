import React from "react";
import MortgageCalculator from "../MortageCalculator/MortgageCalculator";

function PropertyPage({ data }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-full">
        <img
          className="object-cover w-full"
          src={data.imgSrc}
          style={{ height: "500px" }}
          alt=""
        />
        <div className="px-12 py-4 absolute bottom-0 bg-gradient-to-t from-[#144b8b]/75 to-[#144b8b]/50  w-full text-white flex justify-between items-center">
          <p className="text-3xl font-bold">{data.propertyName}</p>
          <p className="text-xl flex items-center">
            <i className="fa fa-map-marker fa-2x pr-2" aria-hidden="true"></i>{" "}
            {data.propertyAddress}
          </p>
          <p className="text-xl">{data.propertyArea} sqft</p>
          <p className="text-xl">$ {data.propertyPrice}</p>
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

      {/* features  */}
      <div className="flex w-full justify-center items-center py-8">
        <div className="flex items-center justify-center px-2">
          <div>
            <i className="fa fa-bed fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Bedrooms</p>
            <p>{data.bedrooms}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-2">
          <div>
            <i className="fa fa-shower fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Shower</p>
            <p>{data.shower}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-2">
          <div>
            <i className="fa fa-car fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Garage</p>
            <p>{data.garage}</p>
          </div>
        </div>
        <div className="flex items-center justify-center px-2">
          <div>
            <i className="fa fa-home fa-3x" aria-hidden="true"></i>
          </div>
          <div className="p-2">
            <p>Property Size</p>
            <p>{data.propertyArea} sqft</p>
          </div>
        </div>
      </div>

      {/* amenties  */}
      <div className="py-8 w-full flex justify-center">
        <div className="w-full py-8 bg-neutral-50">
          <h1 className="text-3xl text-center">Features</h1>
          <div className="flex items-center justify-around text-xl">
            <div>
              <p className="p-4">
                <i class="fa fa-check" aria-hidden="true"></i>
                Air Conditioning
              </p>
              <p className="p-4">
                <i class="fa fa-check" aria-hidden="true"></i>
                Laundry
              </p>
              <p className="p-4">
                <i class="fa fa-check" aria-hidden="true"></i>
                Microwave
              </p>
            </div>
            <div>
              <p className="p-4">
                <i class="fa fa-check" aria-hidden="true"></i>
                Sauna
              </p>
              <p className="p-4">
                <i class="fa fa-check" aria-hidden="true"></i>
                WiFi
              </p>
              <p className="p-4">
                <i class="fa fa-check" aria-hidden="true"></i>
                Window Coverings
              </p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 w-full py-8">
          <h1 className="text-3xl text-center">Additional Details</h1>
          <div className="grid grid-cols-2 justify-center text-xl">
            <div className="mx-16">
              <p className="p-4">
                <i class="fa fa-globe" aria-hidden="true"></i>
                <strong> Country: </strong> Miami-Dade County
              </p>
              <p className="p-4">
                <i class="fa fa-home" aria-hidden="true"></i>
                <strong> Living Area: </strong> {data.propertyArea}
              </p>
              <p className="p-4">
                <i class="fa fa-wifi" aria-hidden="true"></i>
                <strong> Internet: </strong>5G Broadband
              </p>
            </div>
            <div>
              <p className="p-4 w-2/3">
                <i class="fa fa-microchip" aria-hidden="true"></i>
                <strong> Appliances: </strong> Dishwasher, Disposal, Dryer,
                Microwave, Refrigerator, Self Cleaning Oven, Wall Oven, Washer
              </p>
              <p className="p-4 w-2/3">
                <i class="fa fa-star" aria-hidden="true"></i>
                <strong>Features: </strong>Fire Alarm, Smoke Detector, Doorman,
                Elevator Secure, Guard At Site, Lobby Secured
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* house room pics  */}
      <div className=" w-full grid grid-cols-4 h-96">
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

      {/* <div className="">
        <video
          loop
          autoplay
          muted
        >
          <source src="./img/room-video.mp4" />
        </video>
      </div> */}

      <div className="py-4 my-4">
        <MortgageCalculator />
      </div>
      <div className="mt-12 text-2xl">
        <h2 className="text-center text-2xl font-semibold">Agency Info</h2>
        <div className="p-4 flex flex-col items-center justify-center">
          <img className="h-32 rounded-full" src="./img/agency.jpg" alt="" />
          <p>Perry Homes</p>
          <p>perryhomes@mail.com</p>
          <p>1.800.247.3779</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PropertyPage;
