import * as React from "react";
import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts";
import "./Chart.css";

export default function BarCharts() {
  const dataset = [
    { london: 59, paris: 57, newYork: 86, seoul: 21, month: "Jan" },
    { london: 50, paris: 52, newYork: 78, seoul: 28, month: "Feb" },
    { london: 47, paris: 53, newYork: 106, seoul: 41, month: "Mar" },
    { london: 54, paris: 56, newYork: 92, seoul: 73, month: "Apr" },
    { london: 57, paris: 69, newYork: 92, seoul: 99, month: "May" },
    { london: 60, paris: 63, newYork: 103, seoul: 144, month: "June" },
    { london: 59, paris: 60, newYork: 105, seoul: 319, month: "July" },
    { london: 65, paris: 60, newYork: 106, seoul: 249, month: "Aug" },
    { london: 51, paris: 51, newYork: 95, seoul: 131, month: "Sept" },
    { london: 60, paris: 65, newYork: 97, seoul: 55, month: "Oct" },
    { london: 67, paris: 64, newYork: 76, seoul: 48, month: "Nov" },
    { london: 61, paris: 70, newYork: 103, seoul: 25, month: "Dec" },
  ];

  const valueFormatter = (value) => {
    return `${value} mm`;
  };

  const [chartSize, setChartSize] = useState({
    width: 400,
    height: 290,
  });

  const updateChartSize = () => {
    const newWidth = window.innerWidth < 400 ? window.innerWidth : 400;
    const newHeight = window.innerHeight < 290 ? window.innerHeight : 290;
    setChartSize({ width: newWidth, height: newHeight });
  };

  useEffect(() => {
    updateChartSize();
    window.addEventListener("resize", updateChartSize);

    return () => {
      window.removeEventListener("resize", updateChartSize);
    };
  }, []);

  return (
    <div className="bar-chart-class">
      <div style={{ textAlign: "center", padding: "5px" }}>
        Patients Per Month
      </div>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[{ dataKey: "seoul", valueFormatter }]}
        layout="horizontal"
        grid={{ vertical: true }}
        width={chartSize.width}
        height={chartSize.height}
      />
    </div>
  );
}
