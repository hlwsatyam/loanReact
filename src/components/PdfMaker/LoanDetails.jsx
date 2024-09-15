import React from "react";

const LoanDetails = ({
  approvedAmount,
  monthlyEMI,
  interestRate,
  loanTenure,
}) => {
  return (
    <div className="mx-auto mt-5">
      <LoanApprovalLetter
        monthlyEMI={monthlyEMI}
        loanTenure={loanTenure}
        approvedAmount={approvedAmount}
        interestRate={interestRate}
      />
    </div>
  );
};

export default LoanDetails;

const LoanApprovalLetter = ({
  loanTenure,
  monthlyEMI,
  approvedAmount,
  interestRate,
}) => {
  return (
    <div className="mt-8 rounded-lg text-white">
      <section>
        <h2 className="mb-2 text-xl font-semibold">
          1. Understanding Your Loan:
        </h2>
        <p>
          Your approved personal loan is a flexible financial solution designed
          to meet various personal needs. Whether you plan to use this loan for
          consolidating existing debt, funding a major purchase, covering
          emergency expenses, or any other personal requirement, we aim to
          provide you with the necessary financial support. Here’s a brief
          overview of the key aspects of your loan:
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Loan Amount:</strong> The total amount sanctioned for your
            loan is ₹{approvedAmount}. This amount has been determined based on
            the information you provided during the application process,
            including your credit history, income details, and other relevant
            factors.
          </li>
          <li>
            <strong>Interest Rate:</strong> The interest rate applicable to your
            loan is ${interestRate}% per annum. This rate is designed to be
            competitive in the market while ensuring that you receive a
            favorable repayment experience. Please note that the interest rate
            is fixed for the tenure of the loan, providing you with stability
            and predictability in your monthly payments.
          </li>
          <li>
            <strong>Loan Tenure:</strong> The tenure of your loan is set at{" "}
            {loanTenure} years. This period represents the time over which you
            will be required to make regular monthly payments. The tenure has
            been selected to align with your financial capacity and repayment
            preferences.
          </li>
          <li>
            <strong>Monthly EMI:</strong> Your monthly Equated Monthly
            Installment (EMI) is ₹ {monthlyEMI}. This is the amount you will
            need to pay every month until the completion of your loan tenure.
            The EMI amount includes both principal and interest components,
            ensuring that your payments are structured and manageable.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="mb-2 text-xl font-semibold">2. Disbursement Process:</h2>
        <p>
          One of the highlights of our loan service is the prompt disbursement
          of funds. Your approved loan amount will be disbursed to your
          designated bank account within the next 3 hours. This quick turnaround
          time is part of our commitment to providing efficient financial
          solutions.
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Verification and Compliance:</strong> Before disbursement,
            we have completed all necessary verifications and compliance checks.
            This includes the validation of your documents and confirmation of
            the details provided in your application. Our team has ensured that
            all requirements are met, allowing us to proceed with the
            disbursement seamlessly.
          </li>
          <li>
            <strong>Disbursement Method:</strong> The funds will be transferred
            directly to your bank account as per the details provided during
            your application. Please ensure that your bank account details are
            accurate to facilitate a smooth transfer. You will receive a
            notification once the funds have been successfully credited to your
            account.
          </li>
          <li>
            <strong>Disbursement Notification:</strong> After the disbursement,
            you will receive a confirmation notification via email or SMS,
            indicating that the funds have been transferred. This notification
            will include relevant transaction details for your reference.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="mb-2 text-xl font-semibold">3. Processing Fee:</h2>
        <p>
          Please note that a processing fee of ₹5,500 is applicable for your
          loan. This amount is adjustable with your first EMI, meaning it will
          be deducted from your first EMI payment. Kindly ensure that you have
          sufficient funds to cover this adjustment. This processing fee helps
          us cover the administrative costs associated with processing your loan
          application and disbursement.
        </p>
      </section>

      {/* Section 4: EMI Chart */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          4. EMI Chart:
        </h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-white">
              <th className="border-b-2 py-2">Principal (₹)</th>
              <th className="border-b-2 py-2">Interest (%)</th>
              <th className="border-b-2 py-2">Tenure (Years)</th>
            </tr>
          </thead>
          <tbody className="text-white">
            <tr>
              <td className="border-b py-2">{approvedAmount}</td>
              <td className="border-b py-2">{interestRate}</td>
              <td className="border-b py-2">{loanTenure}</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      <section className="   mt-4">
        <h2 className="mb-2 text-xl font-semibold">5. Repayment Details:</h2>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <strong>Repayment Schedule:</strong> Your repayment schedule
            outlines the dates on which your monthly EMIs will be due. The first
            EMI will be due on First Week Of Every Months. Subsequent payments
            will follow monthly intervals as per the agreed schedule.
          </li>
          <li>
            <strong>Payment Methods:</strong> You can manage your repayments
            through our online portal or mobile app. Our digital platforms offer
            convenient options for making payments, checking your loan balance,
            and accessing other loan-related services. Additionally, you may
            also opt for automatic EMI deductions from your bank account to
            ensure timely payments.
          </li>
          <li>
            <strong>Prepayment and Foreclosure:</strong> We offer the option to
            prepay or foreclose your loan before the end of the tenure.
            Prepayment allows you to make extra payments towards your loan
            principal, reducing the overall interest cost. Foreclosure involves
            settling the entire loan amount before the tenure ends. Please
            contact our customer service team for details on prepayment or
            foreclosure procedures and any associated charges.
          </li>
          <li>
            <strong>Late Payment Charges:</strong> To avoid any late payment
            charges, ensure that your EMI payments are made on time. In the
            event of a missed or delayed payment, additional charges may apply
            as per the terms and conditions of your loan agreement. We encourage
            you to set reminders or automate your payments to stay on track.
          </li>
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="mb-2 text-xl font-semibold">6. Customer Support:</h2>
        <p>
          Our dedicated customer support team is here to assist you with any
          queries or concerns related to your loan. Should you require any help
          or have questions regarding your loan, please feel free to reach out
          to us:
        </p>
        <p>
          <strong>Rajiv Singh</strong>
          <br />
          Personal Loan Disbursement Department
          <br />
          Bajaj Finance Limited
          <br />
          4th Floor, Bajaj Finserv Corporate Office
          <br />
          Off Pune-Ahmednagar Road, Viman Nagar, Pune – 411 014
          <br />
          Contact Email Adress:{" "}
          <a href="mailto:rajiv@bajajfinserv.in">
            rajiv@bajajfinserv.in
          </a> , <a href="mailto:info@bajajfinserv.in">info@bajajfinserv.in</a>
        </p>
      </section>

      <section className="mt-4">
        <h2 className="mb-2 text-xl font-semibold">7. Terms and Conditions:</h2>
        <p>
          Please review the terms and conditions of your loan agreement
          carefully. This document outlines your rights and responsibilities as
          a borrower, including details about interest rates, repayment terms,
          and other important aspects of your loan. It is essential to
          understand these terms to ensure a clear and transparent financial
          relationship.
        </p>
        <p>
          <strong>Agreement Document:</strong> A copy of your loan agreement has
          been sent to you along with this approval letter. Please review it
          thoroughly and keep it for your records. If you have any questions or
          need clarification on any part of the agreement, do not hesitate to
          contact us.
        </p>
        <p>
          <strong>Compliance and Regulations:</strong> Your loan is governed by
          applicable financial regulations and guidelines. We adhere to all
          legal and regulatory requirements to ensure that your loan experience
          is fair and compliant with industry standards.
        </p>
      </section>

      <section className="mt-4">
        <h2 className="mb-2 text-xl font-semibold">
          8. Financial Planning and Advice:
        </h2>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            <strong>Manage Your Loan Effectively:</strong> We recommend that you
            create a budget to manage your loan repayments effectively. By
            incorporating your EMI payments into your monthly budget, you can
            ensure that you meet your financial obligations without compromising
            your overall financial stability.
          </li>
          <li>
            <strong>Seek Financial Advice:</strong> If you require any financial
            advice or assistance in planning your loan repayments, we encourage
            you to consult a financial advisor. Our goal is to ensure that you
            make informed decisions about your loan and maintain a healthy
            financial position.
          </li>
          <li>
            <strong>Budgeting:</strong> Managing your loan effectively is an
            integral part of your overall financial planning. Create a budget
            that incorporates your loan EMIs along with other monthly expenses.
            Effective budgeting will help you manage your finances better and
            avoid any potential financial strain.
          </li>
          <li>
            <strong>Financial Goals:</strong> Use the funds from your loan to
            achieve your financial goals, whether it's consolidating debt,
            making a major purchase, or addressing emergency expenses. Align
            your loan usage with your long-term financial plans to maximize the
            benefits of the loan.
          </li>
          <li>
            <strong>Monitoring and Management:</strong> Regularly monitor your
            loan account and repayment progress. Utilize our online tools to
            track your payments, view your loan balance, and stay informed about
            any updates or changes to your loan terms.
          </li>
          <li>
            <strong>Financial Counseling:</strong> If you need assistance with
            financial planning or managing your loan, consider seeking advice
            from a financial counselor or advisor. Professional guidance can
            help you make informed decisions and manage your finances
            effectively.
          </li>
        </ul>
      </section>
      <section className="mt-4">
        <h2 className="mb-2 text-xl font-semibold">9. Document Information:</h2>
        <p className="ml-4 list-inside list-disc space-y-2">
          Please be aware that this letter is a computer-generated document. As
          such, no signature is required for this document. It has been
          generated automatically to provide you with timely and accurate
          information regarding your loan approval.
        </p>

        <h2  className="mb-2 text-xl font-semibold">10. Conclusion:</h2>
        <p className="ml-4 list-inside list-disc space-y-2">
          Once again, congratulations on the approval of your Personal Loan with
          Bajaj Finance Limited. We are delighted to support you in achieving
          your financial objectives and are committed to providing you with a
          seamless and positive loan experience.
        </p>
      </section>

      <footer className="mt-8   text-center">
        <p>
          Thank you for choosing Bajaj Finance Limited for your personal loan
          needs. We are here to support you throughout your loan journey. If you
          have any questions, do not hesitate to contact us. We look forward to
          serving you.
        </p>
      </footer>
    </div>
  );
};
