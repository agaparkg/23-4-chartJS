// Sample data
const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My Dataset",
      data: [10, 20, 30],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
    },
  ],
};

// Chart configuration
const configDoughnut = {
  type: "doughnut",
  data: data,
  options: {},
};

export default configDoughnut;
