import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

function Chart2({ loanAmount, tenure, interestRate }) {
  const [lineDataPrincipal, setLineDataPrincipal] = useState(null);
  const [lineDataInterest, setLineDataInterest] = useState(null);
  const [summary, setSummary] = useState({ totalInterest: 0, emiAmount: 0 });

  useEffect(() => {
    if( loanAmount && tenure && interestRate)  calculateEMI();
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

    // Summary information
    setSummary({
      totalInterest: totalInterestAmount.toFixed(2),
      emiAmount: emiAmount.toFixed(2),
    });

    // Prepare data for line charts
    const labels = Array.from({ length: time }, (_, i) => `Month ${i + 1}`);

    // Cumulative Principal and Interest over time
    const principalPayments = Array(time).fill(principal).map((_, i) => ((i + 1) / time) * principal);
    const interestPayments = Array(time).fill(totalInterestAmount).map((_, i) => ((i + 1) / time) * totalInterestAmount);

    setLineDataPrincipal({
      labels: labels,
      datasets: [
        {
          label: "Principal Repayment (₹)",
          data: principalPayments,
          fill: false,
          backgroundColor: "rgba(54, 162, 235, 0.6)",
          borderColor: "rgba(54, 162, 235, 1)",
        },
      ],
    });

    setLineDataInterest({
      labels: labels,
      datasets: [
        {
          label: "Interest Paid (₹)",
          data: interestPayments,
          fill: false,
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderColor: "rgba(255, 99, 132, 1)",
        },
      ],
    });
  };

  return (
    <div className="w-full rounded-lg py-3 shadow-2xl bg-gray-50">
   
      {/* Info Boxes for Loan Details */}
    

   

      {/* Line Chart for Interest Paid */}
      {lineDataInterest && (
        <div className="mt-8">
          <h3 className="text-xl text-gray-700 text-center mb-2">Interest Paid Over Time</h3>
          <div  style={{  height: '400px' }} className="rounded-lg bg-white p-4">
            <Line  width={400} height={400}    className="m-auto" data={lineDataInterest} />
          </div>
        </div>
      )}
    </div>
  );
}

export { Chart2 };


// {lineDataPrincipal && (
//   <div className="mt-6">
//     <h3 className="text-xl text-gray-700 text-center mb-2">Principal Repayment Over Time</h3>
//     <div className="rounded-lg bg-white p-4">
//       {/* <Line className="m-auto" data={lineDataPrincipal} /> */}
//     </div>
//   </div>
// )}
