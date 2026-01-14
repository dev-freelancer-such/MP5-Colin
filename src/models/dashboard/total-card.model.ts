export interface TotalCardProps {
  isLoading?: boolean;
  inforCard: TotalCardData;
}

export interface TotalCardData {
  id: string;
  title: string;
  value: string | number;
  icon: string;
  percentageChange: number;
  changeLabel?: string;
  layer?: string;
}
