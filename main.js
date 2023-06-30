import configLine from "./chart-configs/line-config.js";
import configLineAnimation from "./chart-configs/line-animation-config.js";
import configBar from "./chart-configs/bar-config.js";
import configBubble from "./chart-configs/bubble-config.js";
import configDoughnut from "./chart-configs/doughnut-config.js";
import configPie from "./chart-configs/pie-config.js";

import getData from "./js-files/fetch.js";
import { data } from "./js-files/data.js";

// get all the chart elements
const line = document.getElementById("myLineChart");
const lineAnimation = document.getElementById("myLineAnimationChart");
const bar = document.getElementById("myBarChart");
const bubble = document.getElementById("myBubbleChart");
const doughnut = document.getElementById("myDoughnutChart");
const pie = document.getElementById("myPieChart");

// create chart for each canvas elements with corresponding configs
new Chart(line, configLine);
new Chart(lineAnimation, configLineAnimation);
new Chart(bar, configBar);
new Chart(bubble, configBubble);
new Chart(doughnut, configDoughnut);
new Chart(pie, configPie);

console.log(getData()); // returns a Promise
getData().then((d) => console.log(d)); // asynchronous
console.log("data", data); // synchronous call
