import React from 'react';
import { Column } from '@ant-design/plots';
import './column-chart.scss';

export interface ColumnChartDataPoint {
  date: string;
  value: number;
  category?: string;
}

export interface ColumnChartProps {
  data: ColumnChartDataPoint[];
  height?: number;
  isGroup?: boolean;
  isStack?: boolean;
  showLegend?: boolean;
  xField?: string;
  yField?: string;
  seriesField?: string;
  color?: string | string[];
  padding?: number | number[] | 'auto';
  className?: string;
  loading?: boolean;
  columnWidthRatio?: number;
  radius?: number;
}

const ColumnChart: React.FC<ColumnChartProps> = ({
  data,
  height = 400,
  isGroup = false,
  isStack = false,
  showLegend = true,
  xField = 'date',
  yField = 'value',
  seriesField = 'category',
  color,
  className = '',
  columnWidthRatio = 0.6,
  radius = 8,
}) => {
  const config = {
    data,
    xField,
    yField,
    colorField: data.some((item) => item.category) ? seriesField : undefined,
    height,
    group: isGroup,
    stack: isStack,
    ...(columnWidthRatio && {
      style: {
        maxWidth: columnWidthRatio * 100,
        radiusTopLeft: radius,
        radiusTopRight: radius,
      },
    }),
    ...(color && {
      scale: {
        color: {
          range: Array.isArray(color) ? color : [color],
        },
      },
    }),
    legend: showLegend
      ? {
          position: 'bottom' as const,
        }
      : false,
    axis: {
      x: {
        title: false,
        label: {
          autoRotate: false,
          autoHide: false,
        },
        line: null,
        tickLine: null,
        grid: null,
      },
      y: {
        title: false,
        labelFormatter: (v: string) => {
          const num = Number(v);
          if (num >= 1000000) {
            return `${(num / 1000000).toFixed(0)}M`;
          }
          if (num >= 1000) {
            return `${(num / 1000).toFixed(0)}k`;
          }
          return v;
        },
        line: null,
        grid: {
          line: {
            style: {
              stroke: 'var(--color-border)',
              strokeOpacity: 0.15,
              lineDash: [4, 4],
            },
          },
        },
      },
    },
    interaction: {
      tooltip: {
        shared: true,
      },
    },
  };

  return (
    <div className={`column-chart ${className}`}>
      <div className="column-chart__wrapper">
        <div className="column-chart__content">
          <Column {...config} />
        </div>
      </div>
    </div>
  );
};

export default ColumnChart;
