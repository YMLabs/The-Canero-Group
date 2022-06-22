import React, { useState } from "react";
import BuyerSignIn from "./BuyerSignIn";
import DealerSignIn from "./DealerSignIn";

function SignIn() {
  const [signInComponent, setSignInComponent] = useState(<BuyerSignIn />);
  const [isBuyerActive, setIsBuyerActive] = useState(true);
  const [isDealerActive, setIsDealerActive] = useState(false);
  return (
    <div className="p-2 rounded">
      <div className="w-full p-2 flex justify-evenly border-b-4 border-[#144B8B]">
        <button
          className="px-8 py-2 mx-4 rounded hover:shadow-lg"
          style={isBuyerActive ? { background: "#144B8B", color: "#fff" } : {}}
          onClick={() => {
            setSignInComponent(<BuyerSignIn />);
            setIsDealerActive(false);
            setIsBuyerActive(true);
          }}
        >
          Buyer
        </button>
        <button
          className="px-8 py-2 mx-4 rounded hover:shadow-lg"
          style={isDealerActive ? { background: "#144B8B", color: "#fff" } : {}}
          onClick={() => {
            setSignInComponent(<DealerSignIn />);
            setIsBuyerActive(false);
            setIsDealerActive(true);
          }}
        >
          Dealer
        </button>
      </div>
      <div>{signInComponent}</div>
    </div>
  );
}

export default SignIn;
