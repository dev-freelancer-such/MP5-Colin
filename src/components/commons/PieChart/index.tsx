import React from 'react';
import { Pie } from '@ant-design/plots';
import type { PieConfig } from '@ant-design/plots';
import './pie-chart.scss';

export interface PieChartDataPoint {
  name: string;
  value: number;
}

export interface PieChartProps {
  data: PieChartDataPoint[];
  height?: number;
  showLegend?: boolean;
  angleField?: string;
  colorField?: string;
  color?: string | string[];
  padding?: number | number[] | 'auto';
  className?: string;
  loading?: boolean;
  radius?: number;
  innerRadius?: number;
  showLabel?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  height = 400,
  showLegend = false,
  angleField = 'value',
  colorField = 'name',
  className = '',
  radius = 10,
  innerRadius = 0.6,
  showLabel = true,
}) => {
  const config: PieConfig = {
    data,
    angleField,
    colorField,
    height,
    legend: showLegend,
    innerRadius,
    labels: showLabel
      ? [
          {
            text: 'name',
            style: {
              fontSize: 10,
              fontWeight: 'bold',
            },
          },
          {
            text: (
              d: PieChartDataPoint,
              i: number,
              dataArray: PieChartDataPoint[]
            ) => (i < dataArray.length - 3 ? d.value : ''),
            style: {
              fontSize: 9,
              dy: 12,
            },
          },
        ]
      : false,
    style: {
      stroke: '#fff',
      inset: 1,
      radius,
    },
    scale: {
      color: {
        palette: 'spectral',
        offset: (t: number) => t * 0.8 + 0.1,
      },
    },
    tooltip: {
      showMarkers: false,
      title: (d: PieChartDataPoint) => d.name,
      items: [
        {
          channel: 'y',
          name: 'Value',
          valueFormatter: (value: number) => value.toLocaleString(),
        },
      ],
    },
    animation: {
      appear: {
        animation: 'fade-in',
        duration: 800,
      },
    },
    interactions: [{ type: 'element-active' }],
  };

  return (
    <div className={`pie-chart ${className}`}>
      <div className="pie-chart__wrapper">
        <div className="pie-chart__content">
          <Pie {...config} />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
