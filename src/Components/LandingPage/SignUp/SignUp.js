import React, { useState } from 'react'
import BuyerSignUp from './BuyerSignUp';
import DealerSignUp from './DealerSignUp';

function SignUp() {
  const [signUpComponent, setSignUpComponent] = useState(<BuyerSignUp/>);
  const [isBuyerActive, setIsBuyerActive] = useState(true)
  const [isDealerActive, setIsDealerActive] = useState(false)
  return (
    <div className='rounded'>
        <div className='w-full p-2 flex justify-evenly border-b-4 border-[#144B8B]'>
            <button className='px-8 py-2 mx-4 rounded hover:shadow-lg' style={isBuyerActive?{background:"#144B8B",color:"#fff"}:{}} 
            onClick={() => {
                setSignUpComponent(<BuyerSignUp/>)
                setIsDealerActive(false);
                setIsBuyerActive(true)
        }}
            >Buyer</button>
            <button className='px-8 py-2 mx-4 rounded hover:shadow-lg' style={isDealerActive?{background:"#144B8B",color:"#fff"}:{}}  
            onClick={() => {
                setSignUpComponent(<DealerSignUp/>)
                setIsBuyerActive(false)
                setIsDealerActive(true);
        }}
            >Dealer</button>
        </div>
        <div>
            {signUpComponent}
        </div>
    </div>
  )
}

export default SignUp