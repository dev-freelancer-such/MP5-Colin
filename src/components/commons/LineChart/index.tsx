import React from 'react';
import { Line } from '@ant-design/charts';
import type { LineConfig } from '@ant-design/charts';
import { CHART_THEME, DEFAULT_CHART_PALETTE } from '@/constants/chart.constant';
import './line-chart.scss';

export interface LineChartDataPoint {
  date: string;
  value: number;
  category?: string;
}

export interface LineChartProps {
  data: LineChartDataPoint[];
  height?: number;
  smooth?: boolean;
  showArea?: boolean;
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

const LineChart: React.FC<LineChartProps> = ({
  data,
  height = 300,
  smooth = true,
  showArea = false,
  showPoint = false,
  showLegend = false,
  xField = 'date',
  yField = 'value',
  seriesField = 'category',
  color,
  padding = 'auto',
  className = '',
  loading = false,
}) => {
  // Debug: Log color prop
  console.log('LineChart color prop:', color);
  console.log('LineChart data sample:', data.slice(0, 2));

  const config: LineConfig = {
    data,
    xField,
    yField,
    seriesField: data.some((item) => item.category) ? seriesField : undefined,
    height,
    smooth,
    ...(showPoint
      ? {
          point: {
            size: 4,
            shape: 'circle',
            style: {
              fill: 'white',
              stroke: color || 'var(--color-primary)',
              lineWidth: 2,
            },
          },
        }
      : {}),
    ...(showArea
      ? {
          area: {
            style: {
              fillOpacity: 0.1,
            },
          },
        }
      : {}),
    color: Array.isArray(color) ? color : color || DEFAULT_CHART_PALETTE,
    legend: showLegend
      ? {
          position: 'bottom',
          layout: 'horizontal',
          itemName: {
            style: {
              fill: 'var(--color-text-primary)',
              fontSize: 14,
            },
          },
          marker: {
            symbol: 'circle',
            style: {
              r: 6,
            },
          },
          itemSpacing: 24,
        }
      : false,
    padding,
    xAxis: {
      label: {
        style: {
          fill: CHART_THEME.TEXT_SECONDARY,
          fontSize: 12,
        },
        autoRotate: true,
        autoHide: true,
      },
      line: {
        style: {
          stroke: CHART_THEME.BORDER,
        },
      },
      tickLine: {
        style: {
          stroke: CHART_THEME.BORDER,
        },
      },
      grid: {
        line: {
          style: {
            stroke: CHART_THEME.BORDER,
            strokeOpacity: 0.2,
            lineDash: [4, 4],
          },
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: CHART_THEME.TEXT_SECONDARY,
          fontSize: 12,
        },
        formatter: (v: string) => {
          const num = Number(v);
          if (num >= 1000000) {
            return `${(num / 1000000).toFixed(1)}M`;
          }
          if (num >= 1000) {
            return `${(num / 1000).toFixed(1)}k`;
          }
          return v;
        },
      },
      line: {
        style: {
          stroke: CHART_THEME.BORDER,
        },
      },
      grid: {
        line: {
          style: {
            stroke: CHART_THEME.BORDER,
            strokeOpacity: 0.2,
            lineDash: [4, 4],
          },
        },
      },
    },
    tooltip: {
      showMarkers: true,
      shared: true,
      showCrosshairs: true,
      crosshairs: {
        type: 'xy',
        line: {
          style: {
            stroke: 'var(--color-primary)',
            strokeOpacity: 0.3,
            lineDash: [4, 4],
          },
        },
      },
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
        animation: 'path-in',
        duration: 1000,
      },
    },
    loading,
  };

  return (
    <div className={`line-chart ${className}`}>
      <div className="line-chart__wrapper">
        <div className="line-chart__content">
          <Line {...config} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
