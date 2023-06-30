// create array of labels
const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

// create data
const data = {
  labels: labels,
  datasets: [
    {
      label: "My Dataset",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgba(10, 40, 192, 0.5)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 1,
    },
  ],
};

// Chart configuration
const configBar = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

export default configBar;
