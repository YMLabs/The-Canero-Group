import React from "react";

function ExploreHomeLoans() {
  return (
    <section className="home-loan py-2">
      <div className="flex justify-center items-center rounded-xl my-8 mx-auto box-border">
        <img
          className="h-96 rounded-l-lg"
          src="./img/property-image.jpg"
          alt=""
        />
        <div className="p-20 py-28 bg-gray-100 rounded-r-lg">
          <img className="h-12" src="./img/CANERO-GROUP-LOGO.png" alt="" />
          <h1 className="text-3xl font-bold text-neutral-700">
            Explore your home loan options
          </h1>
          <p className="text-neutral-600 mb-4">Avail easy loans from our partnered banks</p>
          <button className="bg-neutral-700 hover:bg-neutral-900 text-white py-2 px-4 rounded-lg">
            Compare Loans
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExploreHomeLoans;
