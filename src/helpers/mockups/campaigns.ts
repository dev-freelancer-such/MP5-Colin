export interface MarketingTeamMember extends Record<string, unknown> {
  id: string;
  name: string;
  avatar: string;
  email: string;
  role: string;
  status: 'Active' | 'Pending' | 'Inactive';
}

export const marketingTeamMockup: MarketingTeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJohnson',
    email: 'sarah.johnson@marketing.com',
    role: 'Marketing Director',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelChen',
    email: 'michael.chen@marketing.com',
    role: 'SEO Specialist',
    status: 'Pending',
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaRodriguez',
    email: 'emma.rodriguez@marketing.com',
    role: 'Content Strategist',
    status: 'Inactive',
  },
  {
    id: '4',
    name: 'David Kim',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidKim',
    email: 'david.kim@marketing.com',
    role: 'PPC Manager',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Jessica Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessicaBrown',
    email: 'jessica.brown@marketing.com',
    role: 'Social Media Manager',
    status: 'Pending',
  },
  {
    id: '6',
    name: 'Alex Martinez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexMartinez',
    email: 'alex.martinez@marketing.com',
    role: 'Analytics Lead',
    status: 'Active',
  },
  {
    id: '7',
    name: 'Olivia Taylor',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OliviaTaylor',
    email: 'olivia.taylor@marketing.com',
    role: 'Email Marketing Specialist',
    status: 'Active',
  },
  {
    id: '8',
    name: 'James Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JamesWilson',
    email: 'james.wilson@marketing.com',
    role: 'Growth Hacker',
    status: 'Inactive',
  },
  {
    id: '9',
    name: 'Sophia Lee',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SophiaLee',
    email: 'sophia.lee@marketing.com',
    role: 'Brand Manager',
    status: 'Active',
  },
  {
    id: '10',
    name: 'Daniel Garcia',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielGarcia',
    email: 'daniel.garcia@marketing.com',
    role: 'Conversion Optimizer',
    status: 'Pending',
  },
];

export const marketingTeamStats = {
  activeMembers: 895,
  totalMembers: 965,
};
