import type { TFunction } from 'i18next';
import type { AdCampaign } from '@/helpers/mockups/adCampaigns';
import type { MarketingTeamMember } from '@/helpers/mockups/campaigns';
import type { UserSignup } from '@/helpers/mockups/users';
import { Image } from '@/components/commons';
import type { CommonTableColumn } from '@/components/commons/Table';

export const getUserSignupColumns = (
  t: TFunction
): CommonTableColumn<UserSignup>[] => [
  {
    title: t('name'),
    dataIndex: 'name',
    key: 'name',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">{t('name')}</div>
        <div className="user-name">
          <img src={record.avatar} alt={record.name} className="user-avatar" />
          {record.name}
        </div>
      </div>
    ),
  },
  {
    title: t('email'),
    dataIndex: 'email',
    key: 'email',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">{t('email')}</div>
        <div className="user-email">{record.email}</div>
      </div>
    ),
  },
  {
    title: t('role'),
    dataIndex: 'role',
    key: 'role',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">{t('role')}</div>
        <div className="user-role">{record.role}</div>
      </div>
    ),
  },
  {
    title: t('status'),
    dataIndex: 'status',
    key: 'status',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">{t('status')}</div>
        <div className={`user-status status-${record.status.toLowerCase()}`}>
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

// Keep old export for backwards compatibility
export const userSignupColumns: CommonTableColumn<UserSignup>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">Name</div>
        <div className="user-name">
          <img src={record.avatar} alt={record.name} className="user-avatar" />
          {record.name}
        </div>
      </div>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">Email</div>
        <div className="user-email">{record.email}</div>
      </div>
    ),
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">Role</div>
        <div className="user-role">{record.role}</div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: unknown, record: UserSignup) => (
      <div className="user-info-cell">
        <div className="user-label">Status</div>
        <div className={`user-status status-${record.status.toLowerCase()}`}>
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

export const getAdCampaignColumns = (
  t: TFunction
): CommonTableColumn<AdCampaign>[] => [
  {
    title: t('platform'),
    dataIndex: 'platform',
    key: 'platform',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">{t('platform')}</div>
        <div className="user-name">
          <img src={record.logo} alt={record.name} className="user-avatar" />
          {record.name}
        </div>
      </div>
    ),
  },
  {
    title: t('launched'),
    dataIndex: 'launched',
    key: 'launched',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">{t('launched')}</div>
        <div className="user-email">{record.launched}</div>
      </div>
    ),
  },
  {
    title: t('impressions'),
    dataIndex: 'impressions',
    key: 'impressions',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">{t('impressions')}</div>
        <div className="user-role">{record.impressions.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: t('clicks'),
    dataIndex: 'clicks',
    key: 'clicks',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">{t('clicks')}</div>
        <div className="user-role">{record.clicks.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: t('status'),
    dataIndex: 'status',
    key: 'status',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">{t('status')}</div>
        <div className={`user-status status-${record.status.toLowerCase()}`}>
          {record.status}
        </div>
      </div>
    ),
  },
];

// Keep old export for backwards compatibility
export const adCampaignColumns: CommonTableColumn<AdCampaign>[] = [
  {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">Platform</div>
        <div className="user-name">
          <img src={record.logo} alt={record.name} className="user-avatar" />
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
      <div className="user-info-cell">
        <div className="user-label">Launched</div>
        <div className="user-email">{record.launched}</div>
      </div>
    ),
  },
  {
    title: 'Impressions',
    dataIndex: 'impressions',
    key: 'impressions',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">Impressions</div>
        <div className="user-role">{record.impressions.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
    key: 'clicks',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">Clicks</div>
        <div className="user-role">{record.clicks.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: unknown, record: AdCampaign) => (
      <div className="user-info-cell">
        <div className="user-label">Status</div>
        <div className={`user-status status-${record.status.toLowerCase()}`}>
          {record.status}
        </div>
      </div>
    ),
  },
];

export const getMarketingTeamColumns = (
  t: TFunction
): CommonTableColumn<MarketingTeamMember>[] => [
  {
    title: t('name'),
    dataIndex: 'name',
    key: 'name',
    render: (_: unknown, record: MarketingTeamMember) => (
      <div className="user-info-cell">
        <div className="user-label">{t('name')}</div>
        <div className="user-name">
          <Image
            src={record.avatar}
            alt={record.name}
            className="user-avatar"
          />
          {record.name}
        </div>
      </div>
    ),
  },
  {
    title: t('email'),
    dataIndex: 'email',
    key: 'email',
    render: (_: unknown, record: MarketingTeamMember) => (
      <div className="user-info-cell">
        <div className="user-label">{t('email')}</div>
        <div className="user-email">{record.email}</div>
      </div>
    ),
  },
  {
    title: t('role'),
    dataIndex: 'role',
    key: 'role',
    render: (_: unknown, record: MarketingTeamMember) => (
      <div className="user-info-cell">
        <div className="user-label">{t('role')}</div>
        <div className="user-role">{record.role}</div>
      </div>
    ),
  },
  {
    title: t('status'),
    dataIndex: 'status',
    key: 'status',
    render: (_: unknown, record: MarketingTeamMember) => (
      <div className="user-info-cell">
        <div className="user-label">{t('status')}</div>
        <div className={`user-status status-${record.status.toLowerCase()}`}>
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

// Keep old export for backwards compatibility
export const marketingTeamColumns: CommonTableColumn<MarketingTeamMember>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (_: unknown, record: MarketingTeamMember) => (
      <div className="user-info-cell">
        <div className="user-label">Name</div>
        <div className="user-name">
          <Image
            src={record.avatar}
            alt={record.name}
            className="user-avatar"
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
      <div className="user-info-cell">
        <div className="user-label">Email</div>
        <div className="user-email">{record.email}</div>
      </div>
    ),
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (_: unknown, record: MarketingTeamMember) => (
      <div className="user-info-cell">
        <div className="user-label">Role</div>
        <div className="user-role">{record.role}</div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: unknown, record: MarketingTeamMember) => (
      <div className="user-info-cell">
        <div className="user-label">Status</div>
        <div className={`user-status status-${record.status.toLowerCase()}`}>
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
