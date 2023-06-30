// Sample data
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My Credit Score",
      data: [10, 20, 30, 25, 15, 35],
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
      // fill: true,
    },
  ],
};

// Chart configuration
const configLine = {
  type: "line",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

export default configLine;
