import './App.css';

// Module Export
import React, {useState} from 'react';
import {Routes, Route } from "react-router-dom";
import FirebaseApp from "../src/FirebaseConfig";
import 'react-toastify/dist/ReactToastify.css';
//  Components 
import LandingPage from './Components/LandingPage/LandingPage';
import DealerProfile from './Components/DealerProfile/DealerProfile';
import ContactUs from './Components/ContactUs/ContactUs';
import PageNotFound from './Components/PageNotFound';
import PropertyPage from './Components/PropertyPage/PropertyPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/dealerProfile" element={<DealerProfile />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
        <Route path="/property" element={<PropertyPage/>}/>
      </Routes>
    </>
  );
}

export default App;
