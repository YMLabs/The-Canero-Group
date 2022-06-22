import React from "react";
import { useState } from "react";
import NewHomes from "./NewHomes";
import PopularAreas from "./PopularAreas";
import PopularSearches from "./PopularSearches";
import RealEstates from "./RealEstates";

function Prefooter() {
  const [isRealEstateActive, setRealEstateActive] = useState(true);
  const [isNewHomes, setNewHomes] = useState(false);
  const [isPopularAreas, setPopularAreas] = useState(false);
  const [isPopularSearches, setPopularSearches] = useState(false);
  const [component, updateComponent] = useState(<RealEstates />);

  const makeRealEstateActive = () => {
    updateComponent(<RealEstates />);
    setRealEstateActive(true);
    setNewHomes(false);
    setPopularAreas(false);
    setPopularSearches(false);
  };

  const makeNewHomesActive = () => {
    updateComponent(<NewHomes />);
    setRealEstateActive(false);
    setNewHomes(true);
    setPopularAreas(false);
    setPopularSearches(false);
  };

  const makePopularAreasActive = () => {
    updateComponent(<PopularAreas />);
    setRealEstateActive(false);
    setNewHomes(false);
    setPopularAreas(true);
    setPopularSearches(false);
  };

  const makePopularSearchesActive = () => {
    updateComponent(<PopularSearches />);
    setRealEstateActive(false);
    setNewHomes(false);
    setPopularAreas(false);
    setPopularSearches(true);
  };

  return (
    <section className="py-4 mx-auto">
      <div className="py-4">
        <ul className="flex justify-around items-center text-neutral-600 font-semibold">
          <li>
            <button className="hover:text-neutral-900 hover:underline" onClick={makeRealEstateActive}>Real Estate</button>
          </li>
          <li>
            <button className="hover:text-neutral-900 hover:underline" onClick={makeNewHomesActive}>New Homes</button>
          </li>
          <li>
            <button className="hover:text-neutral-900 hover:underline" onClick={makePopularAreasActive}>Popular Areas</button>
          </li>
          <li>
            <button className="hover:text-neutral-900 hover:underline" onClick={makePopularSearchesActive}> Popular Searches</button>
          </li>
        </ul>
      </div>
      <hr />
      <div className="py-4">{component}</div>
      <hr />
    </section>
  );
}

export default Prefooter;
