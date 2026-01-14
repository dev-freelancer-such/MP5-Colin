export interface Betting extends Record<string, unknown> {
  id: string;
  platformName: string;
  domain: string;
  logo?: string;
  category:
    | 'Sports Betting'
    | 'Casino'
    | 'Poker'
    | 'Lottery'
    | 'E-sports'
    | 'Mixed';
  type: 'Outsource' | 'KOL' | 'Direct';
  status: 'Active' | 'Pending' | 'Suspended' | 'Inactive';
  monthlyUsers: number;
  activeUsers: number;
  totalBets: number;
  revenue: number;
  commission: number;
  commissionRate: number;
  conversionRate: number;
  partnerName: string;
  partnerType: 'KOL' | 'Agency' | 'Affiliate' | 'Direct';
  contactPerson: string;
  contactEmail: string;
  phone: string;
  country: string;
  language: string;
  paymentStatus: 'Paid' | 'Pending' | 'Overdue';
  paymentMethod: 'Bank Transfer' | 'PayPal' | 'Wire Transfer' | 'Crypto';
  lastPaymentDate?: string;
  nextPaymentDate?: string;
  totalPaid: number;
  dateAdded: string;
  lastUpdated: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  notes?: string;
}
