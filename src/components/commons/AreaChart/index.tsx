import React from 'react';
import { Area } from '@ant-design/plots';
import './area-chart.scss';

export interface AreaChartDataPoint {
  date: string;
  value: number;
  category?: string;
}

export interface AreaChartProps {
  data: AreaChartDataPoint[];
  height?: number;
  smooth?: boolean;
  showPoint?: boolean;
  showLegend?: boolean;
  xField?: string;
  yField?: string;
  seriesField?: string;
  color?: string | string[];
  padding?: number | number[] | 'auto';
  className?: string;
  loading?: boolean;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  height = 300,
  smooth = true,
  showPoint = false,
  showLegend = true,
  xField = 'date',
  yField = 'value',
  seriesField = 'category',
  color,
  className = '',
}) => {
  const config = {
    data,
    xField,
    yField,
    colorField: data.some((item) => item.category) ? seriesField : undefined,
    height,
    smooth,
    ...(showPoint && {
      point: {
        size: 4,
        shape: 'circle',
        style: {
          fill: 'white',
          stroke: color || 'var(--color-primary)',
          lineWidth: 2,
        },
      },
    }),
    line: {
      style: {
        lineWidth: 2,
      },
    },
    style: {
      fillOpacity: 0.3,
    },
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
          offsetY: 0,
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
        grid: {
          line: {
            style: {
              stroke: 'var(--color-border)',
              strokeOpacity: 0.1,
              lineDash: [4, 4],
            },
          },
        },
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
              strokeOpacity: 0.1,
              lineDash: [4, 4],
            },
          },
        },
      },
    },
    interaction: {
      tooltip: {
        shared: true,
        crosshairs: {
          type: 'x' as const,
          line: {
            style: {
              stroke: 'var(--color-text-secondary)',
              strokeOpacity: 0.3,
              lineDash: [4, 4],
            },
          },
        },
      },
    },
  };

  return (
    <div className={`area-chart ${className}`}>
      <div className="area-chart__wrapper">
        <div className="area-chart__content">
          <Area {...config} />
        </div>
      </div>
    </div>
  );
};

export default AreaChart;
