// Sample data
const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My Dataset",
      data: [10, 20, 30],
      backgroundColor: [
        "rgb(230, 105, 36)",
        "rgb(54, 100, 220)",
        "rgb(200, 99, 122)",
      ],
    },
  ],
};

// Chart configuration
const configPie = {
  type: "pie",
  data: data,
  options: {},
};

export default configPie;
