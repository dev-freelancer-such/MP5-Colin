export interface Outsource extends Record<string, unknown> {
  id: string;
  name: string;
  type: 'KOL' | 'Affiliate' | 'Agency' | 'Influencer' | 'Partner';
  avatar?: string;
  specialization:
    | 'Betting'
    | 'Casino'
    | 'Sports'
    | 'Esports'
    | 'Poker'
    | 'Multi-vertical';
  platform: string; // Facebook, Instagram, YouTube, TikTok, etc.
  followers: number;
  engagement: number; // percentage
  conversionRate: number; // percentage
  totalLeads: number;
  qualifiedLeads: number;
  revenue: number;
  commission: number;
  commissionRate: number; // percentage
  geo: string;
  language: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Blocked';
  tier: 'Diamond' | 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
  contractStart: string;
  contractEnd: string;
  paymentStatus: 'Paid' | 'Pending' | 'Overdue';
  paymentMethod: 'Bank Transfer' | 'Crypto' | 'PayPal' | 'Wire Transfer';
  contactEmail: string;
  contactPhone: string;
  notes?: string;
}
