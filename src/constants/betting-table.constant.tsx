import type { Betting } from '@/models/betting.model';
import { Image } from '@/components/commons';
import type { CommonTableColumn } from '@/components/commons/Table';

export const bettingColumns: CommonTableColumn<Betting>[] = [
  {
    title: 'Platform',
    dataIndex: 'platformName',
    key: 'platformName',
    width: 250,
    fixed: 'left',
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Platform</div>
        <div className="user-name">
          <Image
            src={record.logo || ''}
            alt={record.platformName}
            className="user-avatar"
          />
          <div>
            <div style={{ fontWeight: 600 }}>{record.platformName}</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>
              {record.domain}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    width: 150,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Category</div>
        <div className="user-role">{record.category}</div>
      </div>
    ),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 130,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Type</div>
        <div className={`user-status status-${record.type.toLowerCase()}`}>
          {record.type}
        </div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 130,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Status</div>
        <div className={`user-status status-${record.status.toLowerCase()}`}>
          {record.status}
        </div>
      </div>
    ),
  },
  {
    title: 'Partner',
    dataIndex: 'partnerName',
    key: 'partnerName',
    width: 200,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Partner / KOL</div>
        <div style={{ fontWeight: 600 }}>{record.partnerName}</div>
        <div style={{ fontSize: '12px', color: '#64748b' }}>
          {record.partnerType}
        </div>
      </div>
    ),
  },
  {
    title: 'Monthly Users',
    dataIndex: 'monthlyUsers',
    key: 'monthlyUsers',
    width: 160,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Monthly Users</div>
        <div className="user-role">{record.monthlyUsers.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: 'Active Users',
    dataIndex: 'activeUsers',
    key: 'activeUsers',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Active Users</div>
        <div className="user-role">{record.activeUsers.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: 'Total Bets',
    dataIndex: 'totalBets',
    key: 'totalBets',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Total Bets</div>
        <div className="user-role">{record.totalBets.toLocaleString()}</div>
      </div>
    ),
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Revenue</div>
        <div
          className="user-role"
          style={{ fontWeight: 600, color: '#10b981' }}
        >
          ${record.revenue.toLocaleString()}
        </div>
      </div>
    ),
  },
  {
    title: 'Commission',
    dataIndex: 'commission',
    key: 'commission',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Commission</div>
        <div
          className="user-role"
          style={{ fontWeight: 600, color: '#f59e0b' }}
        >
          ${record.commission.toLocaleString()}
        </div>
      </div>
    ),
  },
  {
    title: 'Commission Rate',
    dataIndex: 'commissionRate',
    key: 'commissionRate',
    width: 150,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Commission Rate</div>
        <div className="user-role">{record.commissionRate}%</div>
      </div>
    ),
  },
  {
    title: 'Conversion Rate',
    dataIndex: 'conversionRate',
    key: 'conversionRate',
    width: 150,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Conversion Rate</div>
        <div className="user-role">{record.conversionRate}%</div>
      </div>
    ),
  },
  {
    title: 'Contact Person',
    dataIndex: 'contactPerson',
    key: 'contactPerson',
    width: 160,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Contact Person</div>
        <div className="user-role">{record.contactPerson}</div>
      </div>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'contactEmail',
    key: 'contactEmail',
    width: 220,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Email</div>
        <div className="user-email">{record.contactEmail}</div>
      </div>
    ),
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    width: 160,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Phone</div>
        <div className="user-role">{record.phone}</div>
      </div>
    ),
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Country</div>
        <div className="user-role">{record.country}</div>
      </div>
    ),
  },
  {
    title: 'Risk Level',
    dataIndex: 'riskLevel',
    key: 'riskLevel',
    width: 130,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Risk Level</div>
        <div
          className={`user-status status-${record.riskLevel.toLowerCase()}`}
          style={{
            backgroundColor:
              record.riskLevel === 'High'
                ? '#fee2e2'
                : record.riskLevel === 'Medium'
                  ? '#fef3c7'
                  : '#d1fae5',
            color:
              record.riskLevel === 'High'
                ? '#dc2626'
                : record.riskLevel === 'Medium'
                  ? '#f59e0b'
                  : '#10b981',
          }}
        >
          {record.riskLevel}
        </div>
      </div>
    ),
  },
  {
    title: 'Payment Status',
    dataIndex: 'paymentStatus',
    key: 'paymentStatus',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Payment Status</div>
        <div
          className={`user-status status-${record.paymentStatus.toLowerCase()}`}
        >
          {record.paymentStatus}
        </div>
      </div>
    ),
  },
  {
    title: 'Total Paid',
    dataIndex: 'totalPaid',
    key: 'totalPaid',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Total Paid</div>
        <div className="user-role" style={{ fontWeight: 600 }}>
          ${record.totalPaid.toLocaleString()}
        </div>
      </div>
    ),
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    width: 160,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Payment Method</div>
        <div className="user-role">{record.paymentMethod}</div>
      </div>
    ),
  },
  {
    title: 'Last Payment',
    dataIndex: 'lastPaymentDate',
    key: 'lastPaymentDate',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Last Payment</div>
        <div className="user-role">{record.lastPaymentDate || 'N/A'}</div>
      </div>
    ),
  },
  {
    title: 'Next Payment',
    dataIndex: 'nextPaymentDate',
    key: 'nextPaymentDate',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Next Payment</div>
        <div className="user-role">{record.nextPaymentDate || 'N/A'}</div>
      </div>
    ),
  },
  {
    title: 'Date Added',
    dataIndex: 'dateAdded',
    key: 'dateAdded',
    width: 130,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Date Added</div>
        <div className="user-role">{record.dateAdded}</div>
      </div>
    ),
  },
  {
    title: 'Last Updated',
    dataIndex: 'lastUpdated',
    key: 'lastUpdated',
    width: 140,
    render: (_: unknown, record: Betting) => (
      <div className="user-info-cell">
        <div className="user-label">Last Updated</div>
        <div className="user-role">{record.lastUpdated}</div>
      </div>
    ),
  },
];
