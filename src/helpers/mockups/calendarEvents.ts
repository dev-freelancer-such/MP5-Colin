export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'planning' | 'meeting' | 'report' | 'theme';
  color: string;
}

export const calendarEventsMockup: CalendarEvent[] = [
  {
    id: '1',
    title: 'Interview - Backend Engineer',
    start: new Date(2025, 9, 13), // October 13, 2025
    end: new Date(2025, 9, 13),
    type: 'meeting',
    color: '#3b82f6',
  },
  {
    id: '2',
    title: 'Meeting with CT Team',
    start: new Date(2025, 9, 13),
    end: new Date(2025, 9, 13),
    type: 'meeting',
    color: '#f59e0b',
  },
  {
    id: '3',
    title: 'Interview - Frontend Engineer',
    start: new Date(2025, 9, 14),
    end: new Date(2025, 9, 15),
    type: 'meeting',
    color: '#8b5cf6',
  },
  {
    id: '4',
    title: 'Phone Screen - Frontend Engineer',
    start: new Date(2025, 9, 15),
    end: new Date(2025, 9, 15),
    type: 'planning',
    color: '#10b981',
  },
  {
    id: '5',
    title: 'Meeting with Mr. Admin',
    start: new Date(2025, 9, 17),
    end: new Date(2025, 9, 17),
    type: 'meeting',
    color: '#06b6d4',
  },
  {
    id: '6',
    title: 'Buy Design Assets',
    start: new Date(2025, 9, 17),
    end: new Date(2025, 9, 17),
    type: 'planning',
    color: '#3b82f6',
  },
  {
    id: '7',
    title: 'Setup Github Repository',
    start: new Date(2025, 9, 25),
    end: new Date(2025, 9, 25),
    type: 'theme',
    color: '#ef4444',
  },
  {
    id: '8',
    title: 'Setup Github Repository',
    start: new Date(2025, 9, 26),
    end: new Date(2025, 9, 26),
    type: 'theme',
    color: '#ef4444',
  },
  {
    id: '9',
    title: 'Team Standup Meeting',
    start: new Date(2025, 9, 6),
    end: new Date(2025, 9, 6),
    type: 'meeting',
    color: '#3b82f6',
  },
  {
    id: '10',
    title: 'Q4 Planning Session',
    start: new Date(2025, 9, 7),
    end: new Date(2025, 9, 8),
    type: 'planning',
    color: '#10b981',
  },
  {
    id: '11',
    title: 'Weekly Report Review',
    start: new Date(2025, 9, 10),
    end: new Date(2025, 9, 10),
    type: 'report',
    color: '#f59e0b',
  },
  {
    id: '12',
    title: 'Client Presentation',
    start: new Date(2025, 9, 20),
    end: new Date(2025, 9, 21),
    type: 'meeting',
    color: '#8b5cf6',
  },
  {
    id: '13',
    title: 'Code Review Session',
    start: new Date(2025, 9, 22),
    end: new Date(2025, 9, 22),
    type: 'planning',
    color: '#10b981',
  },
  {
    id: '14',
    title: 'Performance Review',
    start: new Date(2025, 9, 29),
    end: new Date(2025, 9, 30),
    type: 'meeting',
    color: '#3b82f6',
  },
  {
    id: '15',
    title: 'Sprint Retrospective',
    start: new Date(2025, 9, 31),
    end: new Date(2025, 9, 31),
    type: 'planning',
    color: '#10b981',
  },
];
