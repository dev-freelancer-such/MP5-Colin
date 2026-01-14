import type { TFunction } from 'i18next';
import type { ChartCardData } from '@/models/dashboard/chart-card.model';
import type { TotalCardData } from '@/models/dashboard/total-card.model';
import icAmericanExpress from '@/assets/icons/dashboard/ic-american-express.svg';
import icDiscoverCard from '@/assets/icons/dashboard/ic-discover-card.svg';
import icEarningLayer from '@/assets/icons/dashboard/ic-earning-layer.svg';
import icEarning from '@/assets/icons/dashboard/ic-earning.svg';
import icMastercard from '@/assets/icons/dashboard/ic-mastercard.svg';
import icNumberOfVisitLayer from '@/assets/icons/dashboard/ic-number-of-visit-layer.svg';
import icNumberOfVisit from '@/assets/icons/dashboard/ic-number-of-visit.svg';
import icTotalOrderLayer from '@/assets/icons/dashboard/ic-total-order-layer.svg';
import icTotalOrder from '@/assets/icons/dashboard/ic-total-order.svg';
import icTotalReturnLayer from '@/assets/icons/dashboard/ic-total-return-layer.svg';
import icTotalReturn from '@/assets/icons/dashboard/ic-total-return.svg';

export interface ChartData {
  date: string;
  value: number;
  category?: string;
}

export interface PieChartData {
  type: string;
  value: number;
}

export interface CountryTrafficData {
  country: string;
  flag: string;
  visitors: string;
  percentage: string;
  color: string;
}

export interface DualAxesData {
  Month: string;
  Evaporation: number;
  Precipitation: number;
  Temperature: number;
}

// Total cards mockup data - Now with i18n support
export const getTotalCardsDashboardMockup = (t: TFunction): TotalCardData[] => [
  {
    id: '1',
    title: t('totalCards.totalEarning'),
    value: '$45,231.89',
    icon: icEarning,
    percentageChange: 20.1,
    changeLabel: t('totalCards.sinceLastMonth'),
    layer: icEarningLayer,
  },
  {
    id: '2',
    title: t('totalCards.numberOfVisit'),
    value: '10,293',
    icon: icNumberOfVisit,
    percentageChange: 15.3,
    changeLabel: t('totalCards.sinceLastMonth'),
    layer: icNumberOfVisitLayer,
  },
  {
    id: '3',
    title: t('totalCards.totalOrder'),
    value: '8,549',
    icon: icTotalOrder,
    percentageChange: -2.5,
    changeLabel: t('totalCards.sinceLastMonth'),
    layer: icTotalOrderLayer,
  },
  {
    id: '4',
    title: t('totalCards.totalReturn'),
    value: '3,521',
    icon: icTotalReturn,
    percentageChange: 5.7,
    changeLabel: t('totalCards.sinceLastMonth'),
    layer: icTotalReturnLayer,
  },
];

// Keep the old export for backwards compatibility (can be removed later)
export const totalCardsDashboardMockup: TotalCardData[] = [
  {
    id: '1',
    title: 'Total Earning',
    value: '$45,231.89',
    icon: icEarning,
    percentageChange: 20.1,
    changeLabel: 'Since last month',
    layer: icEarningLayer,
  },
  {
    id: '2',
    title: 'Number of Visit',
    value: '10,293',
    icon: icNumberOfVisit,
    percentageChange: 15.3,
    changeLabel: 'Since last month',
    layer: icNumberOfVisitLayer,
  },
  {
    id: '3',
    title: 'Total Order',
    value: '8,549',
    icon: icTotalOrder,
    percentageChange: -2.5,
    changeLabel: 'Since last month',
    layer: icTotalOrderLayer,
  },
  {
    id: '4',
    title: 'Total Return',
    value: '3,521',
    icon: icTotalReturn,
    percentageChange: 5.7,
    changeLabel: 'Since last month',
    layer: icTotalReturnLayer,
  },
];

// Line chart mockup data (Daily Sales) - Orders (green/yellow line)
export const ordersLineChartMockup: ChartData[] = [
  { date: 'Jan', value: 75, category: 'Orders' },
  { date: 'Feb', value: 65, category: 'Orders' },
  { date: 'Mar', value: 105, category: 'Orders' },
  { date: 'Apr', value: 75, category: 'Orders' },
  { date: 'May', value: 80, category: 'Orders' },
  { date: 'Jun', value: 75, category: 'Orders' },
  { date: 'Jul', value: 30, category: 'Orders' },
  { date: 'Aug', value: 95, category: 'Orders' },
  { date: 'Sep', value: 40, category: 'Orders' },
  { date: 'Oct', value: 95, category: 'Orders' },
  { date: 'Nov', value: 50, category: 'Orders' },
  { date: 'Dec', value: 45, category: 'Orders' },
];

// Delivered (blue dashed line)
export const deliveredLineChartMockup: ChartData[] = [
  { date: 'Jan', value: 25, category: 'Delivered' },
  { date: 'Feb', value: 30, category: 'Delivered' },
  { date: 'Mar', value: 25, category: 'Delivered' },
  { date: 'Apr', value: 30, category: 'Delivered' },
  { date: 'May', value: 25, category: 'Delivered' },
  { date: 'Jun', value: 30, category: 'Delivered' },
  { date: 'Jul', value: 20, category: 'Delivered' },
  { date: 'Aug', value: 15, category: 'Delivered' },
  { date: 'Sep', value: 35, category: 'Delivered' },
  { date: 'Oct', value: 20, category: 'Delivered' },
  { date: 'Nov', value: 35, category: 'Delivered' },
  { date: 'Dec', value: 20, category: 'Delivered' },
];

// Column chart mockup data (Statistics) - Open Campaign (purple bars)
export const openCampaignColumnChartMockup: ChartData[] = [
  { date: 'Jan', value: 85, category: 'Open Campaign' },
  { date: 'Feb', value: 100, category: 'Open Campaign' },
  { date: 'Mar', value: 65, category: 'Open Campaign' },
  { date: 'Apr', value: 110, category: 'Open Campaign' },
  { date: 'May', value: 75, category: 'Open Campaign' },
  { date: 'Jun', value: 80, category: 'Open Campaign' },
  { date: 'Jul', value: 50, category: 'Open Campaign' },
  { date: 'Aug', value: 30, category: 'Open Campaign' },
  { date: 'Sep', value: 90, category: 'Open Campaign' },
  { date: 'Oct', value: 50, category: 'Open Campaign' },
  { date: 'Nov', value: 90, category: 'Open Campaign' },
  { date: 'Dec', value: 40, category: 'Open Campaign' },
];

// Marketing Cost (orange/yellow bars)
export const marketingCostColumnChartMockup: ChartData[] = [
  { date: 'Jan', value: 30, category: 'Marketing Cost' },
  { date: 'Feb', value: 35, category: 'Marketing Cost' },
  { date: 'Mar', value: 50, category: 'Marketing Cost' },
  { date: 'Apr', value: 28, category: 'Marketing Cost' },
  { date: 'May', value: 25, category: 'Marketing Cost' },
  { date: 'Jun', value: 40, category: 'Marketing Cost' },
  { date: 'Jul', value: 25, category: 'Marketing Cost' },
  { date: 'Aug', value: 20, category: 'Marketing Cost' },
  { date: 'Sep', value: 35, category: 'Marketing Cost' },
  { date: 'Oct', value: 45, category: 'Marketing Cost' },
  { date: 'Nov', value: 28, category: 'Marketing Cost' },
  { date: 'Dec', value: 25, category: 'Marketing Cost' },
];

// Area chart mockup data (Total Revenue) - Total Income (green area on top)
export const totalIncomeAreaChartMockup: ChartData[] = [
  { date: 'Jan', value: 75, category: 'Total Income' },
  { date: 'Feb', value: 70, category: 'Total Income' },
  { date: 'Mar', value: 65, category: 'Total Income' },
  { date: 'Apr', value: 85, category: 'Total Income' },
  { date: 'May', value: 75, category: 'Total Income' },
  { date: 'Jun', value: 85, category: 'Total Income' },
  { date: 'Jul', value: 75, category: 'Total Income' },
  { date: 'Aug', value: 70, category: 'Total Income' },
  { date: 'Sep', value: 95, category: 'Total Income' },
  { date: 'Oct', value: 85, category: 'Total Income' },
  { date: 'Nov', value: 95, category: 'Total Income' },
  { date: 'Dec', value: 85, category: 'Total Income' },
];

// Total Expenses (blue area on bottom)
export const totalExpensesAreaChartMockup: ChartData[] = [
  { date: 'Jan', value: 30, category: 'Total Expenses' },
  { date: 'Feb', value: 25, category: 'Total Expenses' },
  { date: 'Mar', value: 35, category: 'Total Expenses' },
  { date: 'Apr', value: 40, category: 'Total Expenses' },
  { date: 'May', value: 30, category: 'Total Expenses' },
  { date: 'Jun', value: 30, category: 'Total Expenses' },
  { date: 'Jul', value: 25, category: 'Total Expenses' },
  { date: 'Aug', value: 35, category: 'Total Expenses' },
  { date: 'Sep', value: 30, category: 'Total Expenses' },
  { date: 'Oct', value: 45, category: 'Total Expenses' },
  { date: 'Nov', value: 35, category: 'Total Expenses' },
  { date: 'Dec', value: 40, category: 'Total Expenses' },
];

// Pie chart data for Data Uses (Age Groups)
export const dataUsesPieChartMockup: PieChartData[] = [
  { type: '10-18 (Child)', value: 19.2 },
  { type: '18-26 (Young)', value: 18.6 },
  { type: '27-35 (Adult)', value: 23.1 },
  { type: '36-50 (Middle Age)', value: 11.5 },
  { type: '51+ (Senior)', value: 15.4 },
];

// Country traffic data for Visitor Traffics
export const visitorTrafficsMockup: CountryTrafficData[] = [
  {
    country: 'United States',
    flag: '🇺🇸',
    visitors: '87.5k',
    percentage: '72.15%',
    color: '#8b5cf6',
  },
  {
    country: 'India',
    flag: '🇮🇳',
    visitors: '7.92k',
    percentage: '28.85%',
    color: '#06b6d4',
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    visitors: '89.05k',
    percentage: '62.5%',
    color: '#f59e0b',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    visitors: '5.3k',
    percentage: '42.2%',
    color: '#10b981',
  },
];

// DualAxes chart data for Monthly Climate Analysis
export const monthlyClimateDataMockup: DualAxesData[] = [
  {
    Month: 'Jan',
    Evaporation: 2,
    Precipitation: 2.6,
    Temperature: 2,
  },
  {
    Month: 'Feb',
    Evaporation: 4.9,
    Precipitation: 5.9,
    Temperature: 2.2,
  },
  {
    Month: 'Mar',
    Evaporation: 7,
    Precipitation: 9,
    Temperature: 3.3,
  },
  {
    Month: 'Apr',
    Evaporation: 23.2,
    Precipitation: 26.4,
    Temperature: 4.5,
  },
  {
    Month: 'May',
    Evaporation: 25.6,
    Precipitation: 28.7,
    Temperature: 6.3,
  },
  {
    Month: 'Jun',
    Evaporation: 76.7,
    Precipitation: 70.7,
    Temperature: 10.2,
  },
  {
    Month: 'Jul',
    Evaporation: 135.6,
    Precipitation: 175.6,
    Temperature: 20.3,
  },
  {
    Month: 'Aug',
    Evaporation: 162.2,
    Precipitation: 182.2,
    Temperature: 23.4,
  },
  {
    Month: 'Sep',
    Evaporation: 32.6,
    Precipitation: 48.7,
    Temperature: 23,
  },
  {
    Month: 'Oct',
    Evaporation: 20,
    Precipitation: 18.8,
    Temperature: 16.5,
  },
  {
    Month: 'Nov',
    Evaporation: 6.4,
    Precipitation: 6,
    Temperature: 12,
  },
  {
    Month: 'Dec',
    Evaporation: 3.3,
    Precipitation: 2.3,
    Temperature: 6.2,
  },
];

export const getDashboardChartsMockup = (t: TFunction): ChartCardData[] => [
  {
    id: 'chart-1',
    title: t('charts.dailySales'),
    dateRange: 'March 26 - April 01',
    totals: '$8,459.56',
    paymentsMethod: [icAmericanExpress, icDiscoverCard, icMastercard],
    chartType: 'line',
    data: [
      ...ordersLineChartMockup,
      ...deliveredLineChartMockup,
    ] as unknown as Array<Record<string, string | number | undefined>>,
    height: 280,
    chartConfig: {
      seriesField: 'category',
      smooth: true,
      showLegend: true,
      color: ['#84cc16', '#0ea5e9'], // Orders: Lime/Yellow-Green, Delivered: Sky Blue
    },
  },
  {
    id: 'chart-2',
    title: t('charts.statistics'),
    inforTotal: [
      { label: t('charts.totalSales'), value: '4,335' },
      { label: t('charts.openCampaign'), value: '874' },
      { label: t('charts.marketingCost'), value: '2,548' },
    ],
    chartType: 'column',
    data: [
      ...openCampaignColumnChartMockup,
      ...marketingCostColumnChartMockup,
    ] as unknown as Array<Record<string, string | number | undefined>>,
    height: 280,
    chartConfig: {
      seriesField: 'category',
      isGroup: true,
      showLegend: true,
      color: ['#6366f1', '#facc15'], // Open Campaign: Indigo, Marketing Cost: Yellow
    },
  },
  {
    id: 'chart-3',
    title: t('charts.totalRevenue'),
    dateRange: 'March 26 - April 01',
    totals: '$96.56k',
    paymentsMethod: [icAmericanExpress, icDiscoverCard, icMastercard],
    chartType: 'area',
    data: [
      ...totalIncomeAreaChartMockup,
      ...totalExpensesAreaChartMockup,
    ] as unknown as Array<Record<string, string | number | undefined>>,
    height: 280,
    chartConfig: {
      seriesField: 'category',
      smooth: true,
      showLegend: true,
      color: ['#10b981', '#0ea5e9'], // Total Income: Emerald, Total Expenses: Sky Blue
    },
  },

  {
    id: 'chart-5',
    title: t('charts.dataUses'),
    chartType: 'pie',
    data: dataUsesPieChartMockup as unknown as Array<
      Record<string, string | number | undefined>
    >,
    height: 350,
    chartConfig: {
      showLegend: true,
      angleField: 'value',
      colorField: 'type',
      color: ['#3b82f6', '#06b6d4', '#10b981', '#ef4444', '#f59e0b'], // Blue, Cyan, Green, Red, Orange
      innerRadius: 0.6, // Donut chart
      showLabel: false,
    },
  },
  {
    id: 'chart-6',
    title: t('charts.monthlyClimate'),
    dateRange: 'January - December 2024',
    chartType: 'dualAxes',
    data: monthlyClimateDataMockup as unknown as Array<
      Record<string, string | number | undefined>
    >,
    height: 350,
    chartConfig: {
      xField: 'Month',
      showLegend: true,
    },
  },
];

// Keep the old export for backwards compatibility
export const dashboardChartsMockup: ChartCardData[] = [
  {
    id: 'chart-1',
    title: 'Daily Sales',
    dateRange: 'March 26 - April 01',
    totals: '$8,459.56',
    paymentsMethod: [icAmericanExpress, icDiscoverCard, icMastercard],
    chartType: 'line',
    data: [
      ...ordersLineChartMockup,
      ...deliveredLineChartMockup,
    ] as unknown as Array<Record<string, string | number | undefined>>,
    height: 280,
    chartConfig: {
      seriesField: 'category',
      smooth: true,
      showLegend: true,
      color: ['#84cc16', '#0ea5e9'], // Orders: Lime/Yellow-Green, Delivered: Sky Blue
    },
  },
  {
    id: 'chart-2',
    title: 'Statistics',
    inforTotal: [
      { label: 'Total Sales', value: '4,335' },
      { label: 'Open Campaign', value: '874' },
      { label: 'Total Sales', value: '2,548' },
    ],
    chartType: 'column',
    data: [
      ...openCampaignColumnChartMockup,
      ...marketingCostColumnChartMockup,
    ] as unknown as Array<Record<string, string | number | undefined>>,
    height: 280,
    chartConfig: {
      seriesField: 'category',
      isGroup: true,
      showLegend: true,
      color: ['#6366f1', '#facc15'], // Open Campaign: Indigo, Marketing Cost: Yellow
    },
  },
  {
    id: 'chart-3',
    title: 'Total Revenue',
    dateRange: 'March 26 - April 01',
    totals: '$96.56k',
    paymentsMethod: [icAmericanExpress, icDiscoverCard, icMastercard],
    chartType: 'area',
    data: [
      ...totalIncomeAreaChartMockup,
      ...totalExpensesAreaChartMockup,
    ] as unknown as Array<Record<string, string | number | undefined>>,
    height: 280,
    chartConfig: {
      seriesField: 'category',
      smooth: true,
      showLegend: true,
      color: ['#10b981', '#0ea5e9'], // Total Income: Emerald, Total Expenses: Sky Blue
    },
  },

  {
    id: 'chart-5',
    title: 'Data Uses',
    chartType: 'pie',
    data: dataUsesPieChartMockup as unknown as Array<
      Record<string, string | number | undefined>
    >,
    height: 350,
    chartConfig: {
      showLegend: true,
      angleField: 'value',
      colorField: 'type',
      color: ['#3b82f6', '#06b6d4', '#10b981', '#ef4444', '#f59e0b'], // Blue, Cyan, Green, Red, Orange
      innerRadius: 0.6, // Donut chart
      showLabel: false,
    },
  },
  {
    id: 'chart-6',
    title: 'Monthly Climate Analysis',
    dateRange: 'January - December 2024',
    chartType: 'dualAxes',
    data: monthlyClimateDataMockup as unknown as Array<
      Record<string, string | number | undefined>
    >,
    height: 350,
    chartConfig: {
      xField: 'Month',
      showLegend: true,
    },
  },
];
