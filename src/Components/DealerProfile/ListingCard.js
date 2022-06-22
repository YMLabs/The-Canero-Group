import React from "react";

function ListingCard(props) {
  return (
    <div className="listing-card m-8 border-2 rounded-lg shadow drop-shadow-2xl hover:-translate-y-2 hover:shadow-xl ease-in-out duration-300 break-all">
      <div className=" overflow-hidden ease-in-out duration-300 rounded-lg">
        <img
          className="rounded-lg w-full shadow ease-in-out duration-300"
          style={{ height: "200px" }}
          src={props.imgSrc}
          alt=""
        />
      </div>
      <div className="p-4">
        <p className="text-xl font-bold">{props.PropertyName}</p>
        <p className="text-md">{props.PropertyAddress}</p>
        <p className="text-lg">{props.PropertyArea} sq ft</p>
        <p className="text-lg">$ {props.PropertyPrice}</p>
      </div>
    </div>
  );
}

export default ListingCard;
