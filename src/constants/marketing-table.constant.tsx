import type { AdCampaign } from '@/helpers/mockups/adCampaigns';
import type { MarketingTeamMember } from '@/helpers/mockups/campaigns';
import type { CommonTableColumn } from '@/components/commons/Table';

export const marketingAdCampaignColumns: CommonTableColumn<AdCampaign>[] = [
  {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform',
    render: (_: unknown, record: AdCampaign) => (
      <div className="brand-info-cell">
        <div className="brand-category-label">{record.platform}</div>
        <div className="brand-name">
          <img src={record.logo} alt={record.name} className="brand-logo" />
          {record.name}
        </div>
      </div>
    ),
  },
  {
    title: 'Launched',
    dataIndex: 'launched',
    key: 'launched',
    render: (_: unknown, record: AdCampaign) => (
      <div className="brand-info-cell">
        <div className="brand-label">Launched</div>
        <div className="brand-text">{record.launched}</div>
      </div>
    ),
  },
  {
    title: 'Impressions',
    dataIndex: 'impressions',
    key: 'impressions',
    render: (_: unknown, record: AdCampaign) => (
      <div className="brand-info-cell">
        <div className="brand-label">Impressions</div>
        <div className="brand-text">{record.impressions.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
    key: 'clicks',
    render: (_: unknown, record: AdCampaign) => (
      <div className="brand-info-cell">
        <div className="brand-label">Clicks</div>
        <div className="brand-text">{record.clicks.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: unknown, record: AdCampaign) => (
      <div className="brand-info-cell">
        <div className="brand-label">Status</div>
        <div className={`brand-status status-${record.status.toLowerCase()}`}>
          <span className="status-dot"></span>
          {record.status}
        </div>
      </div>
    ),
  },
];

export const marketingTeamMemberColumns: CommonTableColumn<MarketingTeamMember>[] =
  [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_: unknown, record: MarketingTeamMember) => (
        <div className="campaign-info-cell">
          <div className="campaign-label">Name</div>
          <div className="campaign-name">
            <img
              src={record.avatar}
              alt={record.name}
              className="campaign-avatar"
            />
            {record.name}
          </div>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (_: unknown, record: MarketingTeamMember) => (
        <div className="campaign-info-cell">
          <div className="campaign-label">Email</div>
          <div className="campaign-email">{record.email}</div>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (_: unknown, record: MarketingTeamMember) => (
        <div className="campaign-info-cell">
          <div className="campaign-label">Role</div>
          <div className="campaign-role">{record.role}</div>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_: unknown, record: MarketingTeamMember) => (
        <div className="campaign-info-cell">
          <div className="campaign-label">Status</div>
          <div
            className={`campaign-status status-${record.status.toLowerCase()}`}
          >
            <span className="status-dot"></span>
            {record.status}
          </div>
        </div>
      ),
    },
    {
      title: '',
      key: 'actions',
      width: 60,
      render: () => (
        <div className="campaign-actions-cell">
          <button className="action-menu-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6Z"
                fill="currentColor"
              />
              <path
                d="M10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z"
                fill="currentColor"
              />
              <path
                d="M10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];
