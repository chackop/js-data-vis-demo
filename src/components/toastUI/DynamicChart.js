import React, { useEffect } from "react";
import "tui-chart/dist/tui-chart.css";
import { LineChart } from "@toast-ui/react-chart";

function getRandom(start, end) {
  return start + Math.floor(Math.random() * (end - start + 1));
}

function zeroFill(number) {
  let filledNumber;

  if (number < 10) {
    filledNumber = "0" + number;
  } else {
    filledNumber = number;
  }

  return filledNumber;
}

function adjustTime(time, addTime) {
  addTime = addTime || 60;
  if (time < 0) {
    time += addTime;
  }
  return time;
}

function makeDate(hour, minute, second) {
  return (
    zeroFill(adjustTime(hour, 24)) +
    ":" +
    zeroFill(adjustTime(minute)) +
    ":" +
    zeroFill(adjustTime(second))
  );
}

function range(start, stop, step) {
  let arr = [];
  let flag;

  if (typeof stop === "undefined") {
    stop = start || 0;
    start = 0;
  }

  step = step || 1;
  flag = step < 0 ? -1 : 1;
  stop *= flag;

  for (; start * flag < stop; start += step) {
    arr.push(start);
  }

  return arr;
}

const legends = ["SiteA", "SiteB"];
const seriesData = range(2).map(function (value, index) {
  const name = legends[index];
  const data = range(20).map(function () {
    return getRandom(150, 200);
  });
  return {
    name: name,
    data: data,
  };
});

const baseNow = new Date();
const startSecond = baseNow.getSeconds() - seriesData[0].data.length - 1;
const categories = seriesData[0].data.map(function (value, index) {
  let hour = baseNow.getHours();
  let minute = baseNow.getMinutes();
  const second = startSecond + index;

  if (second < 0) {
    minute -= 1;
  }

  if (minute < 0) {
    hour -= 1;
  }
  return makeDate(hour, minute, startSecond + index);
});
const data = {
  categories: categories,
  series: seriesData,
};
const options = {
  chart: {
    width: 1160,
    height: 540,
    title: "Concurrent users",
  },
  xAxis: {
    title: "seconds",
    labelInterval: 3,
    tickInterval: "auto",
  },
  yAxis: {
    title: "users",
  },
  series: {
    spline: true,
    showDot: true,
    shifting: true,
  },
  tooltip: {
    grouped: true,
  },
};

const DynamicChart = () => {
  useEffect(() => {}, []);

  return <LineChart data={data} options={options} />;
};

export default DynamicChart;
