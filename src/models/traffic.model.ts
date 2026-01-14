export interface Traffic extends Record<string, unknown> {
  id: string;
  source: string;
  platform: string;
  category:
    | 'Betting'
    | 'Casino'
    | 'Sports Betting'
    | 'Slot Games'
    | 'Poker'
    | 'Live Casino';
  geoLocation: string;
  clicks: number;
  conversions: number;
  conversionRate: number; // percentage
  cpc: number; // Cost per click
  cpa: number; // Cost per acquisition
  revenue: number;
  profit: number;
  roi: number; // Return on investment percentage
  quality: 'Premium' | 'Standard' | 'Low';
  deviceType: 'Desktop' | 'Mobile' | 'Tablet' | 'Mixed';
  targetAudience: string;
  status: 'Active' | 'Paused' | 'Testing' | 'Stopped';
  startDate: string;
  lastActivity: string;
  notes?: string;
}
