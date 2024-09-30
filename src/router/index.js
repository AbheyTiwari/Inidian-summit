import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Committee from '../pages/commitee/Commitee';
import Mrn from '../pages/mrn/Mrn';
import CommitteeDetail from '../components/CommitteeDetail/CommitteeDetail';
import ContactUs from '../pages/contact/ContactUs';
import Introduction from '../pages/about/introduction/Introduction';
// import About from '../pages/about/About';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/committee-agenda/" element={<Committee />} />
      <Route path="/committee-agenda/:link" element={<CommitteeDetail />} />
      <Route path="/MRN" element={<Mrn />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about/introduction" element={<Introduction />} />
    </Routes>
  );
}


export default AppRouter;