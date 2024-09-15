import React, { useEffect, useState } from "react";
import { Chart1 } from "./Charts/PDFChart";
import LoanDetails from "./LoanDetails";
import { Chart2 } from "./Charts/Chart2";
import EmiTable from "./EmiTable";

const LoanApprovalLetterHeader = ({
  applicantName,
  applicantAddress,
  city,
  state,
  zipCode,
  approvedAmount,
  interestRate,
  loanTenure,
  emiAmount,
  date,
}) => {
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  useEffect(() => {
    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = interestRate / 12 / 100;
    const loanTenureMonths = loanTenure * 12;

    // Calculate EMI
    const emi =
      (approvedAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);

    setMonthlyEMI(Math.round(emi)); // Rounding the EMI to nearest rupee
  }, [approvedAmount, interestRate, loanTenure]);

  return (
    <div className="w-full rounded-lg p-6 shadow-lg">
      <div className="mb-8">
        <h1 className="text-center text-3xl font-bold text-white">
          Bajaj Finance Limited
        </h1>
        <p className="mt-3 text-center font-semibold text-white">
          4th Floor, Bajaj Finserv Corporate Office Off Pune-Ahmednagar Road,
          <br /> Viman Nagar Pune – 411 014
        </p>{" "}
        <p className="mt-1 text-center text-white">
          cin- L65910MH1987PLC042961
        </p>
        <p className="text-center text-sm text-white">GST- 10AABCB1518L1Z7</p>
      </div>
      <div className="mb-8">
        <p className="flex justify-between text-lg font-semibold text-white">
          {" "}
          <span>To:</span>{" "}
          <span>Date: {new Date().toLocaleDateString("en-GB")}</span>{" "}
        </p>
        <p className="text-lg text-white">{applicantName}</p>
        <p className="text-lg text-white">{applicantAddress}</p>
        <p className="text-lg text-white">
          {city}, {state}, {zipCode}
        </p>
      </div>

      <div className="mb-8">
        <p className="text-xl font-bold text-white">
          Subject: Approval of Personal Loan
        </p>
        <p className="mt-4 text-lg text-white">
          We are thrilled to inform you that your application for a Personal
          Loan with Bajaj Finance Limited has been successfully approved.
          Congratulations on this achievement!
        </p>
        <p className="mt-4 text-lg text-white">
          At Bajaj Finance Limited, we understand that obtaining financial
          support is a significant step, and we are committed to making this
          process as smooth and efficient as possible for you.
        </p>
        <p className="mt-4 text-lg text-white">
          This letter serves as a formal confirmation of your loan approval and
          provides you with detailed information about the next steps and
          important details related to your loan.
        </p>
      </div>

      <div className="rounded-lg bg-gray-100 p-6">
        <h2 className="mb-4 text-2xl font-bold text-red-600">Loan Details:</h2>
        <ul className="text-lg text-black">
          <li>
            • Loan Amount:{" "}
            <span className="font-semibold">₹{approvedAmount}</span>
          </li>
          <li>
            • Interest Rate:{" "}
            <span className="font-semibold">{interestRate}% per annum</span>
          </li>
          <li>
            • Loan Tenure:{" "}
            <span className="font-semibold">{loanTenure} years</span>
          </li>
          <li>
            • Monthly EMI: <span className="font-semibold">₹{monthlyEMI}</span>
          </li>
        </ul>
      </div>

      {/* Letter Body */}
      <div className="my-3 space-y-1 text-white">
        <p>
          The loan amount of ₹{approvedAmount} has been approved for awill be
          disbursed to your bank account shortly. Please review the terms and
          conditions attached to this letter, and ensure that the monthly EMI of
          ₹{monthlyEMI} is paid on time.
        </p>

        <p>
          Should you have any questions or require further clarification, feel
          free to contact our support team.
        </p>

        <p>Congratulations once again on the approval of your loan.</p>
      </div>
      <Chart1
        loanAmount={approvedAmount}
        tenure={loanTenure}
        interestRate={interestRate}
      />
      <Chart2
        loanAmount={approvedAmount}
        tenure={loanTenure}
        interestRate={interestRate}
      />
     
      <LoanDetails monthlyEMI={monthlyEMI}
        approvedAmount={approvedAmount}
        interestRate={interestRate}
        loanTenure={loanTenure}
      />
      <div className="mt-8 mb-4 ">
        <p className="text-lg text-white">Sincerely,</p>
        <p className="text-lg font-bold text-white">Bajaj Finance Limited</p>
      </div>
      <EmiTable
        loanAmount={approvedAmount}
        tenure={loanTenure}
        interestRate={interestRate}
      />
    </div>
  );
};

export default LoanApprovalLetterHeader;
