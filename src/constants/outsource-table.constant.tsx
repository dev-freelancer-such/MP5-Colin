import type { Outsource } from '@/models/outsource.model';
import { Image } from '@/components/commons';
import type { CommonTableColumn } from '@/components/commons/Table';

export const outsourceColumns: CommonTableColumn<Outsource>[] = [
  {
    title: 'PARTNER',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 250,
    render: (value: unknown, record: Outsource) => (
      <div className="user-info-cell">
        <span className="user-label">PARTNER</span>
        <div className="user-name">
          <Image
            src={record.avatar || ''}
            alt={record.name}
            className="user-avatar"
          />
          <div>
            <div style={{ fontWeight: 600 }}>{value as string}</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              {record.type}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'SPECIALIZATION',
    dataIndex: 'specialization',
    key: 'specialization',
    width: 150,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">SPECIALIZATION</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: 'PLATFORM',
    dataIndex: 'platform',
    key: 'platform',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">PLATFORM</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: 'FOLLOWERS',
    dataIndex: 'followers',
    key: 'followers',
    width: 120,
    align: 'right',
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">FOLLOWERS</span>
        <span className="user-role">
          {((value as number) / 1000).toFixed(0)}K
        </span>
      </div>
    ),
  },
  {
    title: 'ENGAGEMENT',
    dataIndex: 'engagement',
    key: 'engagement',
    width: 120,
    align: 'right',
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">ENGAGEMENT</span>
        <span className="user-role">{(value as number).toFixed(1)}%</span>
      </div>
    ),
  },
  {
    title: 'CVR',
    dataIndex: 'conversionRate',
    key: 'conversionRate',
    width: 100,
    align: 'right',
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">CVR</span>
        <span className="user-role">{(value as number).toFixed(1)}%</span>
      </div>
    ),
  },
  {
    title: 'TOTAL LEADS',
    dataIndex: 'totalLeads',
    key: 'totalLeads',
    width: 120,
    align: 'right',
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">TOTAL LEADS</span>
        <span className="user-role">{(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: 'QUALIFIED',
    dataIndex: 'qualifiedLeads',
    key: 'qualifiedLeads',
    width: 120,
    align: 'right',
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">QUALIFIED</span>
        <span className="user-role">{(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: 'REVENUE',
    dataIndex: 'revenue',
    key: 'revenue',
    width: 130,
    align: 'right',
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">REVENUE</span>
        <span className="user-role">${(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: 'COMMISSION',
    dataIndex: 'commission',
    key: 'commission',
    width: 130,
    align: 'right',
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">COMMISSION</span>
        <span className="user-role" style={{ color: '#10b981' }}>
          ${(value as number).toLocaleString()}
        </span>
      </div>
    ),
  },
  {
    title: 'TIER',
    dataIndex: 'tier',
    key: 'tier',
    width: 120,
    render: (value: unknown) => {
      const tier = value as string;
      const colors: Record<string, string> = {
        Diamond: '#a855f7',
        Platinum: '#3b82f6',
        Gold: '#f59e0b',
        Silver: '#94a3b8',
        Bronze: '#cd7f32',
      };
      return (
        <div className="user-info-cell">
          <span className="user-label">TIER</span>
          <span
            className="user-role"
            style={{ color: colors[tier] || '#64748b' }}
          >
            {tier}
          </span>
        </div>
      );
    },
  },
  {
    title: 'GEO',
    dataIndex: 'geo',
    key: 'geo',
    width: 150,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">GEO</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    width: 120,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">STATUS</span>
        <span
          className={`user-status status-${(value as string).toLowerCase()}`}
        >
          {value as string}
        </span>
      </div>
    ),
  },
  {
    title: 'PAYMENT',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
    width: 120,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">PAYMENT</span>
        <span
          className={`user-status status-${(value as string).toLowerCase()}`}
        >
          {value as string}
        </span>
      </div>
    ),
  },
  {
    title: 'ACTIONS',
    key: 'actions',
    fixed: 'right',
    width: 100,
    align: 'center',
    render: () => (
      <div className="user-actions-cell">
        <button className="action-menu-btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 5C10.5523 5 11 4.55228 11 4C11 3.44772 10.5523 3 10 3C9.44772 3 9 3.44772 9 4C9 4.55228 9.44772 5 10 5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 17C10.5523 17 11 16.5523 11 16C11 15.4477 10.5523 15 10 15C9.44772 15 9 15.4477 9 16C9 16.5523 9.44772 17 10 17Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    ),
  },
];
