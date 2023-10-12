import { showChart } from "./chartLib.js";

async function StartUp() {
  let dataJson = await fetch("./data.json").then((response) => response.text());

  showChart(dataJson);
  console.log("abc1");
}

StartUp();
