import React, { useState, useRef, useEffect } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  ArcElement,
);

function Chart1({ loanAmount, tenure, interestRate }) {
  const [doughnutData, setDoughnutData] = useState(null);

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

    // setEmi(emiAmount.toFixed(2));
    // setTotalInterest(totalInterestAmount.toFixed(2));
    // setTotalPayment(totalPaymentAmount.toFixed(2));

    setDoughnutData({
      labels: ["Principal", "Interest"],
      datasets: [
        {
          data: [principal, totalInterestAmount],
          backgroundColor: [
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 99, 132, 0.6)",
          ],

          borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div  className="g w-full rounded-lg p-2 shadow-2xl">
      {doughnutData && (
        <div className="mt-6">
          <div style={{  height: '400px' }} className="rounded-lg bg-white p-4">
            <Doughnut  width={400} height={400}   className="m-auto" data={doughnutData} />
          </div>
        </div>
      )}
    </div>
  );
}

export { Chart1 };
