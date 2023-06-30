// Sample data
const data = {
  datasets: [
    {
      label: "My Dataset",
      data: [
        { x: 5, y: 15, r: 6 },
        { x: 10, y: 20, r: 5 },
        { x: 15, y: 10, r: 8 },
        { x: 8, y: 25, r: 10 },
        { x: 18, y: 12, r: 7 },
      ],
      backgroundColor: ["red", "blue", "yellow", "green", "purple"],
      //   backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 1,
      //   borderWidth: [1, 3, 4, 5, 1],
    },
  ],
};

// Chart configuration
const configBubble = {
  type: "bubble",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

export default configBubble;
