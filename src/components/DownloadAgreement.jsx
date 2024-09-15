// import React, { useRef, useState, useEffect } from "react";
// import ReactToPrint from "react-to-print";
// import { useLocation } from "react-router-dom";

// import LoadAgreement from "./PdfMaker/LoadAgreement";
// import { backendUrl } from "../helpers";

// function DownloadAgreement({ showApprovalLetter }) {
//   const componentRef = useRef();
//   const reactToPrintRef = useRef(null);
//   const [isLoading, setLoading] = useState(true);
//   const location = useLocation();

//   const [formData, setFormData] = useState({
//     image: null,
//     nameTitle: null,
//     name: null,
//     area: null,
//     exactLoanAmount: null,
//     email: null,
//     postOffice: null,
//     mobile: null,
//     marriageStatus: null,
//     address: null,
//     businessName: null,
//     businessAddress: null,
//     gst: null,
//     fssai: null,
//     businessType: null,
//     experienceInBusiness: null,
//     currentYearTurnover: null,
//     pincode: null,
//     "available_investment_(select_one)": null,
//     "preferred_franchisee_segment_(select_one)": null,
//     state: null,
//     disctict: null,
//     "preferred_business_type_(select_one)": null,
//     noOfEmploy: null,
//     loanAmount: null,
//     loanTenure: null,
//     loanType: null,
//     rateOFintrest: null,
//     PriviousExperienceInFranchisee: null,
//     researchedOtherFranchisee: null,
//     estimatedInve4stmentCapacity: null,
//     preferredLocationAvailable: null,
//     haveAnyBusinessPlane: null,
//     projectedTimelineForOpeningFranchisee: null,
//     experienceInMarketing: null,
//     experienceInManagingStore: null,
//     gender: null,
//     qualification: null,
//   });

//   const { id } = location.state;
//   // Automatically trigger the print action when the component mounts
//   useEffect(() => {
//     if (id) fetchData();
//   }, [id]);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(`${backendUrl}/api/leadById/${id}`);
//       // Check if the response is okay
//       if (!response.ok) {
//         throw new Error(`Error: ${response.status} ${response.statusText}`);
//       }
//       const data = await response.json();
//       setFormData((prev) => ({
//         ...prev,
//         ...data,
//       }));
//       if (reactToPrintRef.current) {
//         setTimeout(() => {
//           reactToPrintRef.current.handlePrint();
//         }, 2000);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch data:", error); // Log the error to console
//     }
//   };
//   return (
//     <div
//       style={{
//         background:
//           "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//       }}
//       ref={componentRef}
//       className="flex min-h-screen flex-col items-center justify-center"
//     >
//       {/* Loan Approval Letter Header */}
//       {isLoading ? <p>Loading....</p> : <LoadAgreement formData={formData} />}
//       {/* Automatically trigger print when component mounts */}
//       <ReactToPrint
//         ref={reactToPrintRef}
//         trigger={() => <> </>} // No button displayed
//         content={() => componentRef.current} // Print the componentRef content
//       />
//     </div>
//   );
// }

// export default DownloadAgreement;

import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";

import LoadAgreement from "./PdfMaker/LoadAgreement";
import { backendUrl } from "../helpers";

function DownloadAgreement({ showApprovalLetter }) {
  const componentRef = useRef();
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

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/leadById/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      setFormData((prev) => ({
        ...prev,
        ...data,
      }));
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleDownloadPdf = () => {
    const element = componentRef.current;
    const opt = {
      margin: 0,
      padding: 0,
      filename: `${formData.name}_Loan_Agreement_Letter.pdf`, // Fixed filename
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Generate and download the PDF
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
      }}
      className="flex min-h-screen flex-col items-center justify-center"
    >
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div ref={componentRef}>
          {" "}
          <LoadAgreement ref={componentRef} formData={formData} />{" "}
        </div>
      )}

      {/* Button to download PDF */}
      <button
        onClick={handleDownloadPdf}
        className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white shadow-md hover:bg-blue-700"
      >
        Download PDF
      </button>
    </div>
  );
}

export default DownloadAgreement;
