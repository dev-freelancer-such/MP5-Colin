export interface UserSignup extends Record<string, unknown> {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Pending' | 'Inactive';
  avatar?: string;
}

export const recentSignupUsersMockup: UserSignup[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Administrator',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'Editor',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
  {
    id: '3',
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    role: 'Viewer',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: '4',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'Manager',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=20',
  },
  {
    id: '5',
    name: 'Robert Taylor',
    email: 'robert.taylor@example.com',
    role: 'Support',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/150?img=52',
  },
  {
    id: '6',
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    role: 'Developer',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=25',
  },
  {
    id: '7',
    name: 'David Martinez',
    email: 'david.martinez@example.com',
    role: 'Designer',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
  {
    id: '8',
    name: 'Jessica Anderson',
    email: 'jessica.anderson@example.com',
    role: 'Marketing',
    status: 'Pending',
    avatar: 'https://i.pravatar.cc/150?img=41',
  },
  {
    id: '9',
    name: 'James Thomas',
    email: 'james.thomas@example.com',
    role: 'Sales',
    status: 'Inactive',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    id: '10',
    name: 'Linda Jackson',
    email: 'linda.jackson@example.com',
    role: 'HR',
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=30',
  },
];

export const userSignupStats = {
  activeUsers: 895,
  totalUsers: 965,
};
