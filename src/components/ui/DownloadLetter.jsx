import React, { useRef, useState, useEffect } from "react";
import ReactToPrint from "react-to-print";
import LoanApprovalLetterHeader from "../PdfMaker/LoanApprovalLetterHeader";
import { useLocation } from "react-router-dom";
import { backendUrl } from "../../helpers";

function DownloadAproovalLetter({ showApprovalLetter }) {
  const componentRef = useRef();
  const reactToPrintRef = useRef(null);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();

  const [formData, setFormData] = useState({
    image: null,
    nameTitle: null,
    name: null,
    area: null,
    exactLoanAmount: null,
    email: null,
    postOffice: null,
    mobile: null,
    marriageStatus: null,
    address: null,
    businessName: null,
    businessAddress: null,
    gst: null,
    fssai: null,
    businessType: null,
    experienceInBusiness: null,
    currentYearTurnover: null,
    pincode: null,
    "available_investment_(select_one)": null,
    "preferred_franchisee_segment_(select_one)": null,
    state: null,
    disctict: null,
    "preferred_business_type_(select_one)": null,
    noOfEmploy: null,
    loanAmount: null,
    loanTenure: null,
    loanType: null,
    rateOFintrest: null,
    PriviousExperienceInFranchisee: null,
    researchedOtherFranchisee: null,
    estimatedInve4stmentCapacity: null,
    preferredLocationAvailable: null,
    haveAnyBusinessPlane: null,
    projectedTimelineForOpeningFranchisee: null,
    experienceInMarketing: null,
    experienceInManagingStore: null,
    gender: null,
    qualification: null,
  });

  const { id } = location.state;
  // Automatically trigger the print action when the component mounts
  useEffect(() => {
    if (id) fetchData();
  }, [id]);

 
 
  const fetchData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/leadById/${id}`);
      // Check if the response is okay
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setFormData((prev) => ({
        ...prev,
        ...data,
      }));
      if (reactToPrintRef.current) {
        setTimeout(() => {
           reactToPrintRef.current.handlePrint(); 
        }, 2000);
      
      }
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error); // Log the error to console
    }
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
      ref={componentRef}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      {/* Loan Approval Letter Header */}
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <LoanApprovalLetterHeader
          applicantName={formData.name}
          applicantAddress={formData.address}
          city={formData.disctict}
          state={formData.state}
          zipCode={formData.pincode}
          approvedAmount={formData.exactLoanAmount}
          interestRate={formData.rateOFintrest}
          loanTenure={formData.loanTenure}
        />
      )}
      {/* Automatically trigger print when component mounts */}
      <ReactToPrint
        ref={reactToPrintRef}
        trigger={() => <> </>} // No button displayed
        content={() => componentRef.current} // Print the componentRef content
      />
    </div>
  );
}

export default DownloadAproovalLetter;
