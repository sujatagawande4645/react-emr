import * as React from "react";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts";
import "./Chart.css";

export default function PieCharts() {
  const dataset = [
    { id: 0, value: 10, label: "Series A" },
    { id: 1, value: 15, label: "Series B" },
    { id: 2, value: 20, label: "Series C" },
  ];

  const [chartSize, setChartSize] = useState({
    width: 400,
    height: 150,
  });

  const updateChartSize = () => {
    const newWidth = window.innerWidth < 400 ? window.innerWidth : 400;
    const newHeight = window.innerHeight < 150 ? window.innerHeight : 150;
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
    <div className="pie-chart-class">
      <div style={{ textAlign: "center", padding: "5px" }}>
        Employee Attendance
      </div>
      <PieChart
        series={[{ data: dataset }]}
        width={chartSize.width}
        height={chartSize.height}
      />
    </div>
  );
}
