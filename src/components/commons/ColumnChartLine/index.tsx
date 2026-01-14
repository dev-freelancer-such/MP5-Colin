import React from 'react';
import { DualAxes } from '@ant-design/plots';
import './column-chart.scss';

export interface DualAxesDataPoint {
  Month: string;
  Evaporation?: number;
  Precipitation?: number;
  Temperature?: number;
  [key: string]: string | number | undefined;
}

export interface DualAxesChartProps {
  data: DualAxesDataPoint[];
  height?: number;
  xField?: string;
  className?: string;
  showLegend?: boolean;
}

const DualAxesChart: React.FC<DualAxesChartProps> = ({
  data,
  height = 400,
  xField = 'Month',
  className = '',
  showLegend = true,
}) => {
  const config = {
    data,
    xField,
    height,
    scale: { y: { nice: false } },
    legend: showLegend
      ? {
          position: 'bottom' as const,
        }
      : false,
    children: [
      {
        type: 'line',
        yField: 'Temperature',
        shapeField: 'smooth',
        colorField: '#FF6B6B',
        scale: { y: { domainMax: 30 } },
        style: {
          lineWidth: 3,
        },
        axis: {
          y: {
            title: 'Temperature (°C)',
            style: { titleFill: '#FF6B6B' },
          },
        },
      },
      {
        type: 'interval',
        yField: 'Evaporation',
        colorField: '#4ECDC4',
        scale: { y: { domainMax: 200 } },
        style: { fillOpacity: 0.85 },
        axis: {
          y: {
            position: 'right',
            title: 'Evaporation (ml)',
            style: { titleFill: '#4ECDC4' },
          },
        },
      },
      {
        type: 'line',
        yField: 'Precipitation',
        shapeField: 'smooth',
        colorField: '#95E1D3',
        style: {
          lineWidth: 3,
          lineDash: [4, 4],
        },
        axis: {
          y: {
            position: 'right',
            title: 'Precipitation (ml)',
            style: { titleFill: '#95E1D3' },
          },
        },
      },
    ],
    interaction: {
      tooltip: {
        shared: true,
      },
    },
  };

  return (
    <div className={`column-chart dual-axes-chart ${className}`}>
      <div className="column-chart__wrapper">
        <div className="column-chart__content">
          <DualAxes {...config} />
        </div>
      </div>
    </div>
  );
};

export default DualAxesChart;
