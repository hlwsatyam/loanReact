import React, { useEffect, useState } from "react";
import govtLogo from "../../../public/fff.jpg";
function LoanAgreement({ formData,  }) {
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  useEffect(() => {
    // Convert annual interest rate to monthly interest rate
    const monthlyInterestRate = formData.rateOFintrest / 12 / 100;
    const loanTenureMonths = formData.loanTenure * 12;

    // Calculate EMI
    const emi =
      (formData.exactLoanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanTenureMonths) - 1);

    setMonthlyEMI(Math.round(emi)); // Rounding the EMI to nearest rupee
  }, [formData]);
  const formattedDate = (() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = String(date.getFullYear()).slice(-2); // Last two digits of the year
    return `${day}/${month}/${year}`;
  })();
  return (
    <div   className="bg-gray-100 p-8 font-sans text-gray-900">
      <img src={govtLogo} className="m-auto rotate-[-0.4deg]  " />

      <h1 className="mb-6 text-center text-3xl font-bold">
        Personal Loan Agreement
      </h1>
      <p className="mb-4">
        This Personal Loan Agreement (the "Agreement") is made and entered into
        on this {formattedDate} by and between:
      </p>
      <ol className="mb-4 ml-6 list-decimal">
        <li>
          Bajaj Finance Limited, a company incorporated under the Companies Act,
          1956, having its registered office at 4th Floor, Bajaj Finserv
          Corporate Office, Off Pune-Ahmednagar Road, Viman Nagar, Pune – 411
          014 (hereinafter referred to as the "Lender" or "Bajaj Finance"),
          which expression shall unless repugnant to the context or meaning
          thereof, include its successors and assigns, of the one part;
        </li>
        <li>
          {formData.name}, residing at {formData.address}, {formData.disctict},{" "}
          {formData.state}, {formData.zipcode} (hereinafter referred to as the
          "Borrower"), which expression shall unless repugnant to the context or
          meaning thereof, include his/her heirs, executors, administrators, and
          permitted assigns, of the other part.
        </li>
      </ol>

      <h2 className="mb-4 mt-6 text-2xl font-bold">WHEREAS:</h2>
      <p className="mb-4">
        A. The Borrower has applied for a personal loan from the Lender, and the
        Lender has agreed to provide the Borrower with a loan on the terms and
        conditions set forth herein.
      </p>
      <p className="mb-4">
        B. The Borrower has represented and warranted that all information
        provided in the loan application is true, accurate, and complete, and
        the Lender has relied on such representations and warranties in
        approving the loan.
      </p>

      <h2 className="mb-4 mt-6 text-2xl font-bold">NOW, THEREFORE:</h2>
      <p className="mb-4 font-semibold">
        in consideration of the mutual covenants and promises contained herein,
        the parties hereto agree as follows:
      </p>

      <div className="bg-gray-100 p-8 font-sans text-gray-900">
        <h3 className="mb-4 text-xl font-bold">
          1. Loan Amount and Disbursement
        </h3>
        <ol className="mb-4 ml-6 list-decimal">
          <li className="mb-4">
            <span className="font-bold">Loan Amount:</span> The Lender agrees to
            provide the Borrower with a loan of ₹
            <span className="font-semibold">{formData.exactLoanAmount}</span>{" "}
            (the "Loan Amount").
          </li>
          <li className="mb-4">
            <span className="font-bold">Disbursement:</span> The Loan Amount
            will be disbursed to the Borrower's designated bank account within 3
            hours of the execution of this Agreement, subject to the completion
            of all necessary verifications and compliance checks.
          </li>
          <li className="mb-4">
            <span className="font-bold">Agreement Fee:</span> A non-refundable
            agreement fee of ₹14,500 is applicable for the loan. This amount is
            auto-adjusted with the Borrower’s EMI payments.
          </li>
          <li className="mb-4">
            <span className="font-bold">Disbursement Conditions:</span> The
            disbursement of the Loan Amount is contingent upon the Borrower
            meeting all the conditions specified by the Lender, including the
            completion of any required documentation and verification processes.
          </li>
        </ol>
      </div>

      <div className="bg-gray-100 p-8 font-sans text-gray-900">
        <h3 className="mb-4 text-xl font-bold">
          2. Interest Rate and Repayment
        </h3>
        <ol className="mb-4 ml-6 list-decimal">
          <li className="mb-4">
            <span className="font-bold">Interest Rate:</span> The Loan Amount
            will bear an interest rate of{" "}
            <span className="font-semibold">{formData.rateOFintrest}</span>% per
            annum, which is fixed for the entire tenure of the loan. This
            interest rate is calculated on a reducing balance basis, where
            interest is charged on the outstanding principal amount.
          </li>
          <li className="mb-4">
            <span className="font-bold">Loan Tenure:</span> The loan will be
            repaid over a period of{" "}
            <span className="font-semibold">{formData.loanTenure}</span> years.
            The exact tenure will be specified in the repayment schedule
            provided to the Borrower.
          </li>
          <li className="mb-4">
            <span className="font-bold">
              Equated Monthly Installment (EMI):
            </span>{" "}
            The Borrower agrees to repay the Loan Amount equal monthly
            installments of ₹<span className="font-semibold">{monthlyEMI}</span>{" "}
            each. The EMI amount includes both principal and interest
            components.
          </li>
          <li className="mb-4">
            <span className="font-bold">EMI Payment Schedule:</span> The first
            EMI will be due, with subsequent EMIs due on the same date of each
            subsequent month. The Borrower is required to make timely payments
            to avoid late fees and additional charges.
          </li>
          <li className="mb-4">
            <span className="font-bold">Prepayment and Foreclosure:</span> The
            Borrower has the option to prepay the Loan Amount in part or in full
            before the end of the loan tenure. Prepayment can reduce the
            outstanding principal amount and may result in reduced interest
            costs. Foreclosure involves settling the entire loan amount before
            the end of the tenure. The Borrower should contact the Lender for
            details on prepayment or foreclosure procedures and any associated
            charges.
          </li>
          <li className="mb-4">
            <span className="font-bold">Late Payment Charges:</span> In case of
            a delayed payment, the Borrower will be liable for late payment
            charges as specified in the terms and conditions of this Agreement.
            These charges will be added to the outstanding loan amount and may
            accrue interest.
          </li>
        </ol>
      </div>

      <div className="bg-gray-100 p-8 font-sans text-gray-900">
        <h3 className="mb-4 text-xl font-bold">3. Use of Loan Amount</h3>
        <ol className="mb-4 ml-6 list-decimal">
          <li className="mb-4">
            <span className="font-bold">Purpose of Loan:</span> The Borrower
            agrees to use the Loan Amount solely for personal purposes as
            disclosed in the loan application. The Loan Amount shall not be used
            for any illegal or unauthorized purposes, including but not limited
            to speculative activities, investment in prohibited businesses, or
            any activity that contravenes applicable laws and regulations.
          </li>
          <li className="mb-4">
            <span className="font-bold">Monitoring of Usage:</span> The Lender
            reserves the right to monitor the use of the Loan Amount to ensure
            compliance with the purpose stated in the loan application. The
            Borrower may be required to provide evidence or documentation
            regarding the utilization of the funds.
          </li>
        </ol>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          4. Representations and Warranties
        </h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              4.1. Accuracy of Information
            </h3>
            <p className="text-gray-600">
              The Borrower represents and warrants that all information provided
              in the loan application is accurate, complete, and up-to-date. Any
              misrepresentation or omission of material information may result
              in the termination of this Agreement and legal action.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              4.2. Financial Stability
            </h3>
            <p className="text-gray-600">
              The Borrower represents that they are financially capable of
              repaying the Loan Amount and that the loan will not adversely
              affect their financial stability. The Borrower acknowledges that
              the Lender has relied on their financial information to determine
              the loan terms.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              4.3. Compliance with Laws
            </h3>
            <p className="text-gray-600">
              The Borrower agrees to comply with all applicable laws,
              regulations, and guidelines in relation to the loan and its usage.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          5. Documents and Verification
        </h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              5.1. Submission of Documents
            </h3>
            <p className="text-gray-600">
              The Borrower has provided all necessary documents for
              verification, including proof of identity, address, income, and
              any other documents required by the Lender. The Borrower agrees to
              promptly provide any additional documentation or information
              requested by the Lender.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              5.2. Verification Process
            </h3>
            <p className="text-gray-600">
              The Lender reserves the right to verify the authenticity of the
              documents and information provided by the Borrower. This may
              include background checks, credit assessments, and other
              verification procedures.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              5.3. Document Retention
            </h3>
            <p className="text-gray-600">
              The Lender will retain copies of the documents submitted by the
              Borrower for the duration of the loan and as required by
              regulatory authorities. The Borrower acknowledges that these
              documents may be used for the purpose of loan administration and
              compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          6. Customer Support
        </h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              6.1. Contact Information
            </h3>
            <p className="text-gray-600">
              For any queries or assistance regarding the loan, the Borrower can
              contact:
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Rajiv Singh</strong>
              <br />
              Personal Loan Disbursement Department
              <br />
              Bajaj Finance Limited
              <br />
              4th Floor, Bajaj Finserv Corporate Office
              <br />
              Off Pune-Ahmednagar Road, Viman Nagar
              <br />
              Pune – 411 014
              <br />
              Contact Email Adress:{" "}
              <a href="mailto:rajiv@bajajfinserv.in">
                rajiv@bajajfinserv.in
              </a> ,{" "}
              <a href="mailto:info@bajajfinserv.in">info@bajajfinserv.in</a>
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              6.2. Support Services
            </h3>
            <p className="text-gray-600">
              The Lender provides various support services to assist the
              Borrower with loan management, including online access to loan
              information, payment tracking, and customer service assistance.
              The Borrower is encouraged to utilize these services for a
              seamless loan experience.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          7. Termination and Default
        </h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              7.1. Termination by Lender
            </h3>
            <p className="text-gray-600">
              The Lender may terminate this Agreement and demand immediate
              repayment of the Loan Amount in full if the Borrower fails to
              comply with the terms and conditions of this Agreement, commits
              fraud or misrepresentation, or breaches any covenants specified
              herein.
            </p>
          </div>
          <div className="p-4 mt-12">
            <h3 className="text-lg font-medium text-gray-700 mt-8">7.2. Default</h3>
            <p className="text-gray-600">
              In case of default, the Lender may take legal action to recover
              the outstanding Loan Amount, including legal proceedings,
              attachment of assets, and recovery of costs. Default includes
              failure to make timely payments, non-compliance with loan terms,
              or any action that impairs the Lender's rights.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">7.3. Remedies</h3>
            <p className="text-gray-600">
              Upon default, the Lender may exercise all available remedies under
              law, including but not limited to recovery of the outstanding
              balance, collection of late fees, and initiation of legal
              proceedings.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          8. Governing Law and Jurisdiction
        </h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              8.1. Governing Law
            </h3>
            <p className="text-gray-600">
              This Agreement shall be governed by and construed in accordance
              with the laws of India. The rights and obligations of the parties
              shall be interpreted under the laws of India.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              8.2. Jurisdiction
            </h3>
            <p className="text-gray-600">
              Any disputes arising out of or in connection with this Agreement
              shall be subject to the exclusive jurisdiction of the courts of
              Pune. The parties agree to submit to the jurisdiction of these
              courts for the resolution of any disputes.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          9. Miscellaneous
        </h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              9.1. Amendments
            </h3>
            <p className="text-gray-600">
              Any amendments or modifications to this Agreement shall be made in
              writing and signed by both parties. No oral or implied amendments
              will be considered valid.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">9.2. Notices</h3>
            <p className="text-gray-600">
              Any notices under this Agreement shall be sent to the addresses
              mentioned above or such other addresses as may be notified by the
              parties. Notices may be delivered in person, by mail, or
              electronically.
            </p>
          </div>
          <div className="p-4 mt-6">
            <h3 className="text-lg font-medium mt-8 text-gray-700">
              9.3. Entire Agreement
            </h3>
            <p className="text-gray-600">
              This Agreement constitutes the entire agreement between the
              parties and supersedes all prior agreements, understandings, and
              representations. No other agreements or promises, whether written
              or oral, shall be binding unless included in this Agreement.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              9.4. Severability
            </h3>
            <p className="text-gray-600">
              If any provision of this Agreement is found to be invalid or
              unenforceable by a court of competent jurisdiction, the remaining
              provisions shall remain in full force and effect. The invalid or
              unenforceable provision shall be deemed modified to the extent
              necessary to make it enforceable.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">9.5. Waiver</h3>
            <p className="text-gray-600">
              The Lender’s failure to enforce any provision of this Agreement
              shall not be construed as a waiver of that provision or any other
              provision. Any waiver must be in writing and signed by the Lender
              to be effective.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              9.6. Assignment
            </h3>
            <p className="text-gray-600">
              The Borrower may not assign or transfer their rights or
              obligations under this Agreement without the prior written consent
              of the Lender. The Lender may assign or transfer its rights and
              obligations to any third party without the Borrower’s consent.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          10. Document Information
        </h2>
        <div className="space-y-4">
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              10.1. Computer-Generated Document
            </h3>
            <p className="text-gray-600">
              This letter is a computer-generated document and does not require
              a signature. The Borrower acknowledges that the Agreement has been
              executed electronically and that the digital copy holds the same
              validity as a physical signed document.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium text-gray-700">
              10.2. Agreement Fee
            </h3>
            <p className="text-gray-600">
              Kindly pay the agreement fee of ₹14,500. This amount is
              auto-adjusted with your EMI payments. The fee is non-refundable
              and covers the costs associated with processing and disbursing the
              loan.
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg mt-12 font-medium text-gray-700">
              10.3. EMI Chart
            </h3>
            <p className="text-gray-600">
              Please refer to the EMI chart below for a detailed breakdown of
              your monthly payments, including principal and interest
              components. This chart is provided for your convenience and to
              help you plan your repayments.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          In Witness Whereof
        </h2>
        <p className="mb-4 text-gray-600">
          The parties hereto have executed this Personal Loan Agreement as of
          the day and year first above written.
        </p>
        <div className="flex justify-between">
          <div className="border-gray-300 p-4">
            <h3 className="mb-2 text-lg font-medium text-gray-700">
              For Bajaj Finance Limited
            </h3>
            <p className="mt-2 text-gray-600">
              <strong>Rajiv Singh</strong>
              <br />
              Personal Loan Disbursement Department
              <br />
              Bajaj Finance Limited
             
              
            </p>
          </div>
          <div className="border-gray-300 p-4">
            <h3 className="mb-2 text-lg font-medium text-gray-700">
              For the Borrower
            </h3>
            <p className="mb-1 text-gray-600">{formData.name}</p>
            <p className="mb-1 text-gray-600">
              {formData.disctict},{formData.state},{formData.pincode}
            </p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default LoanAgreement;
