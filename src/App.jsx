import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ListItems from "./components/ListItems";
import About from "./components/About";
import Services from "./components/Services";
import ServiceCards from "./components/ServiceCards";
import BookAnAppointment from "./components/BookAnAppointment";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import PopupForm from "./components/PopupForm.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CheckStatus } from "./components/CheckStatus.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import CustomerDashboard from "./components/CustomerDashboard.jsx";
import AddAccount from "./components/AddAccount.jsx";
import AdminUser from "./AdminUser.jsx";
import AddUser from "./components/AddUser.jsx";
import AdminDashboardForUser from "./components/AdminDasboardForUser.jsx";
import ScheduleMeetingForm from "./components/ShadualeDate.jsx";
import LeadIntert from "./components/LeadIntert.jsx";
import AdminUserEdit from "./components/AdminUserEdit.jsx";
import LeadPanel from "./components/LeadPanel.jsx";
import DownloadLetter from "./components/ui/DownloadLetter.jsx";
import AddLead from "./components/AddLead.jsx";
import DownloadAgreement from "./components/DownloadAgreement.jsx";
function App() {
  const [isFormOpen, setIsFormOpen] = useState(true);

  const location = useLocation();

  const hideHeaderAndFooter =
    location.pathname === "/customer-dashboard/users" ||
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/addaccount" ||
    location.pathname === "/addLead" ||
    location.pathname === "/" ||
    location.pathname === "/check-status" ||
    location.pathname === "/DownloadLetter" ||
    location.pathname === "/excutive-dashboard" ||
    location.pathname === "/customer-dashboard/lead" ||
    location.pathname === "/customer-dashboard/users/add-user" ||
    location.pathname === "/customer-dashboard";
  return (
    <>
      {/* {!hideHeaderAndFooter && (
        <Navbar isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      )} */}
      <Routes>
        {/* <Route
          path="/"
          element={
            <LandingPage
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
            />
          }
        /> */}
        <Route path="/" element={<CheckStatus />} />
        <Route path="/DownloadLetter" element={<DownloadLetter />} />
        <Route path="/DownloadAgreement" element={<DownloadAgreement />} />
        <Route path="/addLead" element={<AddLead />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* <Route path="/excutive-dashboard" element={<AdminDashboardForUser />} /> */}
        <Route path="/admin/insert" element={<LeadIntert />} />
        {/* <Route path="/addaccount" element={<AddAccount />} /> */}
        {/* <Route path="/customer-dashboard" element={<CustomerDashboard />} /> */}
        <Route path="/customer-dashboard/lead" element={<LeadPanel />} />
        {/* <Route path="/customer-dashboard/users" element={<AdminUser />} /> */}
        {/* <Route
          path="/customer-dashboard/users/edit"
          element={<AdminUserEdit />}
        /> */}
        {/* <Route
          path="/customer-dashboard/users/add-user"
          element={<AddUser />}
        /> */}
      </Routes>
      {/* {!hideHeaderAndFooter && <Footer />} */}
    </>
  );
}

const LandingPage = ({ isFormOpen, setIsFormOpen }) => {
  return (
    <>
      <div className="bg-[#F2F7FF]">
        <Hero isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        <ListItems />
      </div>
      <About isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <PopupForm isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <div className="bg-[#F2F7FF]">
        <Services isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        <ServiceCards isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      </div>
      <BookAnAppointment
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
      />
      <VideoSection />
    </>
  );
};

export default App;
