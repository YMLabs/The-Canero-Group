import React, { useState } from "react";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import MortgageCalculator from "../../MortageCalculator/MortgageCalculator";

function ExploreHomeLoans() {
  const [openMortgageCalculator, setOpenMortgageCalculator] = useState(false);
  const onOpenMortgageCalculator = () => setOpenMortgageCalculator(true);
  const onCloseMortgageCalculator = () => setOpenMortgageCalculator(false);
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
          <button className="bg-neutral-700 hover:bg-neutral-900 text-white py-2 px-4 rounded-lg" onClick={onOpenMortgageCalculator}>
            Compare Loans
          </button>
        </div>
        <Modal
        open={openMortgageCalculator}
        onClose={onCloseMortgageCalculator}
        center
        aria-labelledby="Mortgage Calculator Modal"
        >
          <MortgageCalculator/>
        </Modal>
      </div>
    </section>
  );
}

export default ExploreHomeLoans;
