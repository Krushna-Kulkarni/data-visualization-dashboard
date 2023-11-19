import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = ({ data }) => {
  const chartData = {
    labels: ["A", "B", "C", "D", "E", "F"],
    datasets: [
      {
        label: "Bar Chart",
        data: [24, 25, 65, 59, 76, 27],
        backgroundColor: ["aqua", "aqua", "aqua"],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
