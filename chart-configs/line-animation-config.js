// Sample data
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My Credit Score",
      data: [65, 59, 80, 81, 26, 55, 40],
      // fill: true,
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

// Chart configuration
const configLineAnimation = {
  type: "line",
  data: data,
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100,
      },
    },
  },
};

export default configLineAnimation;
