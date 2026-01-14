import { useState } from 'react';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import {
  marketingAdCampaignColumns,
  marketingTeamMemberColumns,
} from '@/constants/marketing-table.constant';
import {
  type AdCampaign,
  adCampaignsMockup,
  adCampaignsStats,
} from '@/helpers/mockups/adCampaigns';
import {
  type MarketingTeamMember,
  marketingTeamMockup,
  marketingTeamStats,
} from '@/helpers/mockups/campaigns';
import CommonTable from '@/components/commons/Table';
import './marketing.scss';

function Marketing() {
  const [isLoading] = useState(false);
  const [currentCampaignsPage, setCurrentCampaignsPage] = useState(1);
  const [currentTeamPage, setCurrentTeamPage] = useState(1);
  const campaignsPageSize = 5;
  const teamPageSize = 5;

  useBreadcrumb({
    isLoading: true,
    header: 'Marketing',
    breadcrumb: [
      { key: '1', label: 'Home' },
      {
        key: '2',
        label: 'Marketing',
      },
    ],
  });

  return (
    <div className="marketing-container">
      <div className="marketing-tables">
        {/* Ad Campaigns Table */}
        <div className="brands-table-card">
          <div className="table-header-wrapper">
            <h2 className="table-title">Ad Campaigns</h2>
            <button className="add-brand-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3V13M3 8H13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Add Campaign
            </button>
          </div>

          <div className="table-stats">
            <span className="stats-highlight">
              {adCampaignsStats.activeCampaigns}
            </span>{' '}
            Active campaigns out of{' '}
            <span className="stats-highlight">
              {adCampaignsStats.totalCampaigns}
            </span>
          </div>

          <CommonTable<AdCampaign>
            columns={marketingAdCampaignColumns}
            dataSource={adCampaignsMockup}
            isLoading={isLoading}
            rowKey="id"
            bordered={false}
            pagination={{
              current: currentCampaignsPage,
              pageSize: campaignsPageSize,
              total: adCampaignsMockup.length,
              onChange: (page) => setCurrentCampaignsPage(page),
              showSizeChanger: false,
              showTotal: (total, range) => (
                <span className="table-footer-info">
                  Showing {range[0]} of {total} Results
                </span>
              ),
            }}
          />
        </div>

        {/* Marketing Team Table */}
        <div className="campaigns-table-card">
          <div className="table-header-wrapper">
            <h2 className="table-title">Marketing Team</h2>
            <div className="table-actions">
              <button className="action-btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 9V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10.5V2M8 10.5L5.5 8M8 10.5L10.5 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Import
              </button>
              <button className="action-btn primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 7V2.5C14 2.22386 13.7761 2 13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.5V14M8 5.5L5.5 8M8 5.5L10.5 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Export
              </button>
            </div>
          </div>

          <div className="table-stats">
            <span className="stats-highlight">
              {marketingTeamStats.activeMembers}k
            </span>{' '}
            Active members out of{' '}
            <span className="stats-highlight">
              {marketingTeamStats.totalMembers}k
            </span>
          </div>

          <CommonTable<MarketingTeamMember>
            columns={marketingTeamMemberColumns}
            dataSource={marketingTeamMockup}
            isLoading={isLoading}
            rowKey="id"
            bordered={false}
            pagination={{
              current: currentTeamPage,
              pageSize: teamPageSize,
              total: marketingTeamMockup.length,
              onChange: (page) => setCurrentTeamPage(page),
              showSizeChanger: false,
              showTotal: (total, range) => (
                <span className="table-footer-info">
                  Showing {range[0]} of {total} Results
                </span>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Marketing;
