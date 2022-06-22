import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ListingCard from "./ListingCard";

function DealerListing() {
  const [openListingModal, setOpenListingModal] = useState(false);
  const onOpenListingModal = () => setOpenListingModal(true);
  const onCloseListingModal = () => setOpenListingModal(false);
  const [propertyListings, setPropertListings] = useState([
    <ListingCard
      imgSrc="./img/house-1.jpg"
      PropertyName="Andysite House"
      PropertyAddress="11709 Andesite Rd, Manor, TX 78653"
      PropertyArea="2,570"
      PropertyPrice="449,900"
    />,
    <ListingCard
      imgSrc="./img/house-2.jpg"
      PropertyName="Bainbridge House"
      PropertyAddress="1021 Bainbridge Ln, TX 75126"
      PropertyArea="2,000"
      PropertyPrice="324,900"
    />,
    <ListingCard
      imgSrc="./img/house-3.jpg"
      PropertyName="Merlin Property"
      PropertyAddress="5046 Merlin, San Antonio, TX 78218"
      PropertyArea="3,025"
      PropertyPrice="299,000"
    />,
    <ListingCard
      imgSrc="./img/house-4.jpg"
      PropertyName="Paso Villa"
      PropertyAddress="6047 Bandolero, El Paso, TX 79912s"
      PropertyArea="2,312.5"
      PropertyPrice="319,999"
    />,
  ]);

  return (
    <div className="p-4">
      <div className="p-4 m-4">
        <div className="m-0 flex justify-center items-center">
          <button
            className="bg-[#144B8B] rounded-lg px-8 py-2 text-gray-100 shadow-md hover:shadow-xl transition ease-in-out duration-200"
            onClick={onOpenListingModal}
          >
            Add a property +
          </button>
        </div>
        <Modal
          open={openListingModal}
          onClose={onCloseListingModal}
          center
          aria-labelledby="listing-modal"
          aria-describedby="list propert by dealer"
        >
          <div className="p-4">
            <h2 className="text-3xl text-center p-4">Add a new property</h2>
            <form
              className="flex flex-col items-center justify-center"
              action=""
            >
              <input
                className="w-96 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
                type="text"
                placeholder="Property Name"
              />
              <input
                className="w-96 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
                type="text"
                placeholder="Property Address"
              />
              <input
                className="w-96 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
                type="text"
                placeholder="Property Area (in sq ft)"
              />
              {/* <input
                className="w-96 p-2 m-2 text-md bg-blue-50 rounded-md focus:outline-none focus:shadow-lg ring-offset-2 ring-2 focus:ring-blue-500 transition ease-in-out duration-200"
                type="number"
                placeholder="Property Price (in $)"
                min="0"
              /> */}
              <div className="relative flex w-full flex-wrap items-stretch p-2">
                <span className="z-10 h-full leading-snug font-normal text-center text-slate-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-2 py-2">
                  $
                </span>
                <input
                  min="0"
                  type="number"
                  placeholder="Property Price"
                  className="py-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50"
                />
              </div>

              <div className="flex justify-between items-center w-96 py-2">
                <select className="p-2 rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50">
                  <option value="" className="text-left">Type</option>
                  <option value=""  className="text-left">Residential</option>
                  <option value="" className="text-left">Office</option>
                  <option value="" className="text-left">Shop</option>
                </select>

                <select className="p-2 mx-4 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50">
                  <option value="" className="text-left">Status</option>
                  <option value="" className="text-left">For Rent</option>
                  <option value="" className="text-left">For Sale</option>
                </select>

                <select className="p-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50">
                  <option value="" className="text-left">Label</option>
                  <option value="" className="text-left">Hot Offer</option>
                  <option value="" className="text-left">Open House</option>
                  <option value="" className="text-left">Sold</option>
                </select>
              </div>

              <button
                className="py-2 px-4 m-2 text-md text-gray-100 bg-[#144B8B] hover:brightness-110 shadow-md hover:shadow-xl transition ease-in-out duration-200 rounded-lg"
                type="button"
              >
                Submit
              </button>
            </form>
          </div>
        </Modal>
      </div>

      <h1 className="pl-8 pb-4 text-3xl font-medium">Your properties</h1>
      <hr />
      <div className="property-lists grid grid-cols-4 gap-4">
        {propertyListings.map((items) => {
          return <div key={items}>{items}</div>;
        })}
      </div>
    </div>
  );
}

export default DealerListing;
