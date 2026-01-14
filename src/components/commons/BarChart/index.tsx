import React from 'react';
import { Bar } from '@ant-design/charts';
import type { BarConfig } from '@ant-design/charts';
import { DEFAULT_CHART_PALETTE } from '@/constants/chart.constant';
import './bar-chart.scss';

export interface BarChartDataPoint {
  category: string;
  value: number;
  type?: string;
}

export interface BarChartProps {
  data: BarChartDataPoint[];
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
  barWidthRatio?: number;
  radius?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  height = 400,
  isGroup = false,
  isStack = false,
  showLegend = false,
  xField = 'value',
  yField = 'category',
  seriesField = 'type',
  color,
  padding = 'auto',
  className = '',
  loading = false,
  barWidthRatio = 0.6,
  radius = 8,
}) => {
  const config: BarConfig = {
    data,
    xField,
    yField,
    seriesField: data.some((item) => item.type) ? seriesField : undefined,
    height,
    isGroup,
    isStack,
    color: color || DEFAULT_CHART_PALETTE,
    barWidthRatio,
    barStyle: {
      radius: [0, radius, radius, 0],
    },
    legend: showLegend
      ? {
          position: 'top-right',
          itemName: {
            style: {
              fill: 'var(--color-text-primary)',
            },
          },
        }
      : false,
    padding,
    xAxis: {
      label: {
        style: {
          fill: 'var(--color-text-secondary)',
          fontSize: 12,
        },
        formatter: (v: string) => {
          const num = Number(v);
          if (num >= 1000000) {
            return `${(num / 1000000).toFixed(0)}M`;
          }
          if (num >= 1000) {
            return `${(num / 1000).toFixed(0)}k`;
          }
          return v;
        },
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
    yAxis: {
      label: {
        style: {
          fill: 'var(--color-text-secondary)',
          fontSize: 13,
        },
      },
      line: null,
      tickLine: null,
      grid: null,
    },
    tooltip: {
      shared: true,
      showMarkers: false,
      domStyles: {
        'g2-tooltip': {
          background: 'var(--color-bg-white)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--spacing-3)',
          color: 'var(--color-text-primary)',
        },
      },
    },
    animation: {
      appear: {
        animation: 'scale-in-x',
        duration: 800,
      },
    },
    loading,
  };

  return (
    <div className={`bar-chart ${className}`}>
      <div className="bar-chart__wrapper">
        <div className="bar-chart__content">
          <Bar {...config} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
