export interface ChartCardData {
  id: string;
  title: string;
  dateRange?: string;
  chartType:
    | 'line'
    | 'area'
    | 'column'
    | 'bar'
    | 'pie'
    | 'visitor-traffics'
    | 'dualAxes';
  data: Array<Record<string, string | number | undefined>>;
  height?: number;
  chartConfig?: {
    smooth?: boolean;
    showPoint?: boolean;
    showLegend?: boolean;
    showArea?: boolean;
    isGroup?: boolean;
    isStack?: boolean;
    xField?: string;
    yField?: string;
    seriesField?: string;
    angleField?: string;
    colorField?: string;
    color?: string | string[];
    radius?: number;
    innerRadius?: number;
    showLabel?: boolean;
  };
  headerActions?: React.ReactNode;
  footerContent?: React.ReactNode;
  totals?: string;
  paymentsMethod?: string[];
  inforTotal?: Array<{
    label: string;
    value: string;
  }>;
}

export interface ChartCardProps {
  isLoading?: boolean;
  cardData: ChartCardData;
  className?: string;
}
