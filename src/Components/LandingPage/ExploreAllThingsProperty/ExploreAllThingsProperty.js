import React, { useState } from 'react'
import Buying from './Buying'
import Renting from './Renting'
import Researching from './Researching'
import Selling from './Selling'

function ExploreAllThingsProperty() {
    const [isBuyingActive, setBuyingActive] = useState(true)
    const [isRentingActive, setRentingActive] = useState(false)
    const [isSellingActive, setSellingActive] = useState(false)
    const [isResearchingActive, setResearchingActive] = useState(false)
    const [component, updateComponent] = useState(<Buying/>)
    
    const makeBuyingActive = () => {
        setBuyingActive(true);
        setRentingActive(false);
        setSellingActive(false);
        setResearchingActive(false);
        updateComponent(<Buying/>)
    }

    const makeRentingActive = () => {
        setBuyingActive(false);
        setRentingActive(true);
        setSellingActive(false);
        setResearchingActive(false);
        updateComponent(<Renting/>)
    }

    const makeSellingActive = () => {
        setBuyingActive(false);
        setRentingActive(false);
        setSellingActive(true);
        setResearchingActive(false);
        updateComponent(<Selling/>)
    }

    const makeResearchingActive = () => {
        setBuyingActive(false);
        setRentingActive(false);
        setSellingActive(false);
        setResearchingActive(true);
        updateComponent(<Researching/>)
    }

  return (
    <section className='py-4 '>
        <h2 className='text-2xl font-bold'>Explore all things property</h2>
        <div className='py-4'>
            <button className='rounded-full border-2 border-gray-300 font-semibold hover:bg-gray-100 px-4 py-2 mr-4 hover:border-gray-600' style={isBuyingActive?{border:"2px solid #171717", boxShadow:" 0 2px 8px 0 rgba(99,99,99,0.2)"}:{}} onClick={makeBuyingActive}>Buying</button>
            <button className='rounded-full border-2 border-gray-300 font-semibold hover:bg-gray-100 px-4 py-2 mr-4 hover:border-gray-600' style={isRentingActive?{border:"2px solid #171717", boxShadow:" 0 2px 8px 0 rgba(99,99,99,0.2)"}:{}} onClick={makeRentingActive}>Renting</button>
            <button className='rounded-full border-2 border-gray-300 font-semibold hover:bg-gray-100 px-4 py-2 mr-4 hover:border-gray-600' style={isSellingActive?{border:"2px solid #171717", boxShadow:" 0 2px 8px 0 rgba(99,99,99,0.2)"}:{}} onClick={makeSellingActive}>Selling</button>
            <button className='rounded-full border-2 border-gray-300 font-semibold hover:bg-gray-100 px-4 py-2 hover:border-gray-600' style={isResearchingActive?{border:"2px solid #171717", boxShadow:" 0 2px 8px 0 rgba(99,99,99,0.2)"}:{}} onClick={makeResearchingActive}>Researching</button>
        </div>
        <div>
            {component}
        </div>
    </section>
  )
}

export default ExploreAllThingsProperty