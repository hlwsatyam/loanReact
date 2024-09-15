import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

function LoanCalculator({ loanAmount, tenure, interestRate }) {
  // const [loanAmount, setLoanAmount] = useState(Amount ? Amount : "");
  // const [tenure, setTenure] = useState(tenuree ? tenuree : "");
  // const [interestRate, setInterestRate] = useState(rate ? rate : "");
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, tenure, interestRate]);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(tenure) * 12;

    const emiAmount =
      (principal * interest * Math.pow(1 + interest, time)) /
      (Math.pow(1 + interest, time) - 1);
    const totalPaymentAmount = emiAmount * time;
    const totalInterestAmount = totalPaymentAmount - principal;

    setEmi(emiAmount.toFixed(2));
    setTotalInterest(totalInterestAmount.toFixed(2));
    setTotalPayment(totalPaymentAmount.toFixed(2));

    // Doughnut chart data for total payment breakdown
    setChartData({
      labels: ["Principal", "Interest"],
      datasets: [
        {
          data: [principal, totalInterestAmount],
          backgroundColor: ["#36A2EB", "#FF6384"],
          hoverBackgroundColor: ["#36A2EB", "#FF6384"],
          borderColor: ["#fff", "#fff"],
          borderWidth: 2,
        },
      ],
    });
  };

  return (
    <div className="mt-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg rounded-lg bg-white p-2 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-700">
          EMI Loan Calculator
        </h1>

        {/* <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-600">
            Loan Amount
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter loan amount"
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        {/* <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-600">
            Tenure (Years)
          </label>
          <input
            type="number"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="Enter tenure in years"
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        {/* <div className="mb-4">
          <label className="mb-2 block font-medium text-gray-600">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter annual interest rate"
            className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        {/* <button
          onClick={calculateEMI}
          className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Calculate EMI
        </button> */}

        {emi && (
          <div className="mt-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Results
            </h2>
            <div className="rounded-lg bg-gray-100 p-4">
              <p className="mb-2 text-gray-600">
                <span className="font-medium">EMI: </span>₹ {emi}
              </p>
              <p className="mb-2 text-gray-600">
                <span className="font-medium">Total Interest: </span>₹{" "}
                {totalInterest}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">
                  Total Payment [ Principal + Interest ] :{" "}
                </span>
                ₹ {totalPayment}
              </p>
            </div>
          </div>
        )}

        {chartData && (
          <div className="mt-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Break-up of Total Payment
            </h2>
            <div   style={{  height: '400px' }}  className="rounded-lg bg-gray-100 p-4">
              <Doughnut   width={400} height={400}    className="m-auto" data={chartData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoanCalculator;
