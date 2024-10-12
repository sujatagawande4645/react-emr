import * as React from 'react';
import { PieChart } from '@mui/x-charts';
import './Chart.css';

export default function PieCharts() {
  // Define the dataset directly within the component
  const dataset = [
    { id: 0, value: 10, label: 'Series A' },
    { id: 1, value: 15, label: 'Series B' },
    { id: 2, value: 20, label: 'Series C' },
  ];

  // Chart settings
  const chartSetting = {
    width: 400,
    height: 150
  };

  return (
    <div className='pie-chart-class'>
      <div style={{ textAlign: 'center',padding:'5px' }}>Employee Attaindance</div>
      <PieChart
        series={[{ data: dataset }]}
        {...chartSetting}
      />
    </div>
  );
}
