import React from "react";
import { useState } from "react";

function MortgageCalculator() {
  const [formValue, setFormValue] = useState({
    homeValue:"",
    downPayment:"",
    loanAmount:"",
    interestRate:"",
    loanDuration:""
  })
  const [finalMonthlyPayment, setMonthlyPayment] = useState(0)

  const calculateMortgage = () => {
    let homeValue = parseFloat(formValue.homeValue)
    let downPayment = parseFloat(formValue.downPayment)
    let percentageRate = parseFloat(formValue.interestRate)/1200
    let lengthOfLoan = 12*parseFloat(formValue.loanDuration)
    let monthlyPayment = (homeValue * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
    setMonthlyPayment(monthlyPayment.toFixed(2))

  }

  const handleInput = (e) => {
    setFormValue({...formValue, [e.target.name]: e.target.value})
  }


  return (
    <div className="w-96">
      <h1 className="text-center font-semibold text-2xl m-2 p-2">Mortgage Calculator</h1>
      <form action="" className="">
        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm"> $ </span>
          </div>
          <input
            type="text"
            name="homeValue"
            value={formValue.homeValue}
            onChange={handleInput}
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Home Value ($)"
          />
        </div>

        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm"> $ </span>
          </div>
          <input
            type="text"
            name="downPayment"
            value={formValue.downPayment}
            onChange={handleInput}
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Down Payment ($)"
          />
        </div>

        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm"> $ </span>
          </div>
          <input
            type="text"
            name="loanAmount"
            value={formValue.loanAmount}
            onChange={handleInput}
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Loan Amount ($)"
          />
        </div>

        <div class="mt-1 relative rounded-md shadow-sm">
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span class="text-gray-500 sm:text-sm"> % </span>
          </div>
          <input
            type="text"
            name="interestRate"
            value={formValue.interestRate}
            onChange={handleInput}
            class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Annual Interest Rate (%)"
          />
        </div>

        <div class="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm"> years </span>
          </div>
          <input
            type="text"
            name="loanDuration"
            value={formValue.loanDuration}
            onChange={handleInput}
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="Loan Duration (years)"
          />
        </div>

        <div className="my-4 p-4 rounded-lg bg-sky-100">
          <p className="text-center font-extrabold text-xl text-[#144B8B]">Monthly Payment: ${finalMonthlyPayment}</p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="py-2 px-4  bg-[#144B8B] hover:brightness-125 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            onClick={calculateMortgage}
          >
            Calculate Mortgage
          </button>
        </div>
      </form>
    </div>
  );
}

export default MortgageCalculator;
