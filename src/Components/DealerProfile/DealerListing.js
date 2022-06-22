import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ListingCard from "./ListingCard";
import PropertyDetails from "../utils/PropertyName.json";

function DealerListing() {
  const [openListingModal, setOpenListingModal] = useState(false);
  const onOpenListingModal = () => setOpenListingModal(true);
  const onCloseListingModal = () => setOpenListingModal(false);

  const [modalPropertyData, setModalPropertyData] = useState(null);
  const [openPropertyModal, setOpenPropertyModal] = useState(false);
  const onOpenPropertyModal = () => setOpenPropertyModal(true);
  const onClosePropertyModal = () => setOpenPropertyModal(false);

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
                  <option value="" className="text-left">
                    Type
                  </option>
                  <option value="" className="text-left">
                    Residential
                  </option>
                  <option value="" className="text-left">
                    Office
                  </option>
                  <option value="" className="text-left">
                    Shop
                  </option>
                </select>

                <select className="p-2 mx-4 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50">
                  <option value="" className="text-left">
                    Status
                  </option>
                  <option value="" className="text-left">
                    For Rent
                  </option>
                  <option value="" className="text-left">
                    For Sale
                  </option>
                </select>

                <select className="p-2 relative rounded-lg border-0 outline-none focus:outline-none w-full pl-10 ring-offset-2 ring-2 focus:ring-blue-500 bg-blue-50">
                  <option value="" className="text-left">
                    Label
                  </option>
                  <option value="" className="text-left">
                    Hot Offer
                  </option>
                  <option value="" className="text-left">
                    Open House
                  </option>
                  <option value="" className="text-left">
                    Sold
                  </option>
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
        {PropertyDetails.map((property) => {
          return (
            <div
              onClick={() => {
                onOpenPropertyModal(true);
                setModalPropertyData(property);
              }}
              key={property.id}
              className="cursor-pointer"
            >
              <ListingCard
                imgSrc={property.imgSrc}
                PropertyName={property.propertyName}
                PropertyAddress={property.propertyAddress}
                PropertyArea={property.propertyArea}
                PropertyPrice={property.propertyPrice}
              />
            </div>
          );
        })}
      </div>
      {modalPropertyData ? (
        <Modal
          open={openPropertyModal}
          onClose={onClosePropertyModal}
          center
          closeOnEsc
          closeOnOverlayClick
        >
          <div className="p-2 flex justify-center items-center">
            <div>
              <img className="h-96 w-96 object-cover rounded-xl" src={modalPropertyData.imgSrc} alt="" />
            </div>
            <div className="p-4">
              <p className="text-xl font-medium">{modalPropertyData.propertyName}</p>
              <p>{modalPropertyData.propertyAddress}</p>
              <p>{modalPropertyData.propertyArea} sqft</p>
              <p  className="text-lg font-medium">$ {modalPropertyData.propertyPrice}</p>
            </div>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default DealerListing;
