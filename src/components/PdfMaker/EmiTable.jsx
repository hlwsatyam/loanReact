import React, { useState, useEffect } from "react";

function EmiTable({ loanAmount, tenure, interestRate }) {
  const [emiData, setEmiData] = useState([]);

  useEffect(() => {
    calculateEmiBreakdown();
  }, [loanAmount, tenure, interestRate]);

  const calculateEmiBreakdown = () => {
    const principal = parseFloat(loanAmount);
    const interest = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(tenure) * 12;

    const emiAmount =
      (principal * interest * Math.pow(1 + interest, time)) /
      (Math.pow(1 + interest, time) - 1);

    let balance = principal;
    let emiBreakdown = [];

    for (let month = 1; month <= time; month++) {
      const interestPaid = balance * interest;
      const principalPaid = emiAmount - interestPaid;
      balance -= principalPaid;

      emiBreakdown.push({
        month,
        emi: emiAmount.toFixed(2),
        interestPaid: interestPaid.toFixed(2),
        principalPaid: principalPaid.toFixed(2),
        balance: balance.toFixed(2),
      });
    }

    setEmiData(emiBreakdown);
  };

  return (
    <div className="mt-4 w-full rounded-lg bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-center text-2xl font-bold">EMI Breakdown</h2>
      <table className="min-w-full border-collapse border border-gray-200 bg-white">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Month</th>
            <th className="border px-4 py-2">EMI (₹)</th>
            <th className="border px-4 py-2">Interest Paid (₹)</th>
            <th className="border px-4 py-2">Principal Paid (₹)</th>
            <th className="border px-4 py-2">Balance (₹)</th>
          </tr>
        </thead>
        <tbody>
          {emiData.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{item.month}</td>
              <td className="border px-4 py-2">{item.emi}</td>
              <td className="border px-4 py-2">{item.interestPaid}</td>
              <td className="border px-4 py-2">{item.principalPaid}</td>
              <td className="border px-4 py-2">{item.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmiTable;
