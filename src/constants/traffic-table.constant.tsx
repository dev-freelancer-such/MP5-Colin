import type { TFunction } from 'i18next';
import type { Traffic } from '@/models/traffic.model';
import type { CommonTableColumn } from '@/components/commons/Table';

export const getTrafficColumns = (
  t: TFunction
): CommonTableColumn<Traffic>[] => [
  {
    title: t('source').toUpperCase(),
    dataIndex: 'source',
    key: 'source',
    width: 300,
    render: (value: unknown, record: Traffic) => (
      <div className="user-info-cell">
        <span className="user-label">{t('source').toUpperCase()}</span>
        <span className="user-name">{value as string}</span>
        <span className="user-email">{record.platform}</span>
      </div>
    ),
  },
  {
    title: t('category').toUpperCase(),
    dataIndex: 'category',
    key: 'category',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('category').toUpperCase()}</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: t('geo').toUpperCase(),
    dataIndex: 'geoLocation',
    key: 'geoLocation',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('geo').toUpperCase()}</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: t('clicks').toUpperCase(),
    dataIndex: 'clicks',
    key: 'clicks',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('clicks').toUpperCase()}</span>
        <span className="user-role">{(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: t('conversions').toUpperCase(),
    dataIndex: 'conversions',
    key: 'conversions',
    width: 200,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('conversions').toUpperCase()}</span>
        <span className="user-role">{(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: t('cvr').toUpperCase(),
    dataIndex: 'conversionRate',
    key: 'conversionRate',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('cvr').toUpperCase()}</span>
        <span className="user-role">{(value as number).toFixed(1)}%</span>
      </div>
    ),
  },
  {
    title: t('cpc').toUpperCase(),
    dataIndex: 'cpc',
    key: 'cpc',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('cpc').toUpperCase()}</span>
        <span className="user-role">${(value as number).toFixed(2)}</span>
      </div>
    ),
  },
  {
    title: t('cpa').toUpperCase(),
    dataIndex: 'cpa',
    key: 'cpa',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('cpa').toUpperCase()}</span>
        <span className="user-role">${(value as number).toFixed(2)}</span>
      </div>
    ),
  },
  {
    title: t('revenue').toUpperCase(),
    dataIndex: 'revenue',
    key: 'revenue',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('revenue').toUpperCase()}</span>
        <span className="user-role">${(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: t('profit').toUpperCase(),
    dataIndex: 'profit',
    key: 'profit',
    width: 180,
    render: (value: unknown) => {
      const profit = value as number;
      return (
        <div className="user-info-cell">
          <span className="user-label">{t('profit').toUpperCase()}</span>
          <span
            className="user-role"
            style={{ color: profit > 0 ? '#10b981' : '#ef4444' }}
          >
            ${profit.toLocaleString()}
          </span>
        </div>
      );
    },
  },
  {
    title: t('roi').toUpperCase(),
    dataIndex: 'roi',
    key: 'roi',
    width: 180,
    render: (value: unknown) => {
      const roi = value as number;
      return (
        <div className="user-info-cell">
          <span className="user-label">{t('roi').toUpperCase()}</span>
          <span
            className="user-role"
            style={{
              color: roi > 50 ? '#10b981' : roi > 20 ? '#f59e0b' : '#ef4444',
            }}
          >
            {roi.toFixed(1)}%
          </span>
        </div>
      );
    },
  },
  {
    title: t('quality').toUpperCase(),
    dataIndex: 'quality',
    key: 'quality',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('quality').toUpperCase()}</span>
        <span
          className={`user-status status-${(value as string).toLowerCase()}`}
        >
          {value as string}
        </span>
      </div>
    ),
  },
  {
    title: t('device').toUpperCase(),
    dataIndex: 'deviceType',
    key: 'deviceType',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('device').toUpperCase()}</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: t('status').toUpperCase(),
    dataIndex: 'status',
    key: 'status',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('status').toUpperCase()}</span>
        <span
          className={`user-status status-${(value as string).toLowerCase()}`}
        >
          {value as string}
        </span>
      </div>
    ),
  },
  {
    title: t('last_activity').toUpperCase(),
    dataIndex: 'lastActivity',
    key: 'lastActivity',
    width: 250,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">{t('last_activity').toUpperCase()}</span>
        <span className="user-role">
          {new Date(value as string).toLocaleDateString()}
        </span>
      </div>
    ),
  },
];

export const trafficColumns: CommonTableColumn<Traffic>[] = [
  {
    title: 'SOURCE',
    dataIndex: 'source',
    key: 'source',
    width: 300,
    render: (value: unknown, record: Traffic) => (
      <div className="user-info-cell">
        <span className="user-label">SOURCE</span>
        <span className="user-name">{value as string}</span>
        <span className="user-email">{record.platform}</span>
      </div>
    ),
  },
  {
    title: 'CATEGORY',
    dataIndex: 'category',
    key: 'category',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">CATEGORY</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: 'GEO',
    dataIndex: 'geoLocation',
    key: 'geoLocation',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">GEO</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: 'CLICKS',
    dataIndex: 'clicks',
    key: 'clicks',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">CLICKS</span>
        <span className="user-role">{(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: 'CONVERSIONS',
    dataIndex: 'conversions',
    key: 'conversions',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">CONVERSIONS</span>
        <span className="user-role">{(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: 'CVR',
    dataIndex: 'conversionRate',
    key: 'conversionRate',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">CVR</span>
        <span className="user-role">{(value as number).toFixed(1)}%</span>
      </div>
    ),
  },
  {
    title: 'CPC',
    dataIndex: 'cpc',
    key: 'cpc',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">CPC</span>
        <span className="user-role">${(value as number).toFixed(2)}</span>
      </div>
    ),
  },
  {
    title: 'CPA',
    dataIndex: 'cpa',
    key: 'cpa',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">CPA</span>
        <span className="user-role">${(value as number).toFixed(2)}</span>
      </div>
    ),
  },
  {
    title: 'REVENUE',
    dataIndex: 'revenue',
    key: 'revenue',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">REVENUE</span>
        <span className="user-role">${(value as number).toLocaleString()}</span>
      </div>
    ),
  },
  {
    title: 'PROFIT',
    dataIndex: 'profit',
    key: 'profit',
    width: 180,
    render: (value: unknown) => {
      const profit = value as number;
      return (
        <div className="user-info-cell">
          <span className="user-label">PROFIT</span>
          <span
            className="user-role"
            style={{ color: profit > 0 ? '#10b981' : '#ef4444' }}
          >
            ${profit.toLocaleString()}
          </span>
        </div>
      );
    },
  },
  {
    title: 'ROI',
    dataIndex: 'roi',
    key: 'roi',
    width: 180,
    render: (value: unknown) => {
      const roi = value as number;
      return (
        <div className="user-info-cell">
          <span className="user-label">ROI</span>
          <span
            className="user-role"
            style={{
              color: roi > 50 ? '#10b981' : roi > 20 ? '#f59e0b' : '#ef4444',
            }}
          >
            {roi.toFixed(1)}%
          </span>
        </div>
      );
    },
  },
  {
    title: 'QUALITY',
    dataIndex: 'quality',
    key: 'quality',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">QUALITY</span>
        <span
          className={`user-status status-${(value as string).toLowerCase()}`}
        >
          {value as string}
        </span>
      </div>
    ),
  },
  {
    title: 'DEVICE',
    dataIndex: 'deviceType',
    key: 'deviceType',
    width: 180,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">DEVICE</span>
        <span className="user-role">{value as string}</span>
      </div>
    ),
  },
  {
    title: 'STATUS',
    dataIndex: 'status',
    key: 'status',
    width: 180,
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
    title: 'LAST ACTIVITY',
    dataIndex: 'lastActivity',
    key: 'lastActivity',
    width: 250,
    render: (value: unknown) => (
      <div className="user-info-cell">
        <span className="user-label">LAST ACTIVITY</span>
        <span className="user-role">
          {new Date(value as string).toLocaleDateString()}
        </span>
      </div>
    ),
  },
];
