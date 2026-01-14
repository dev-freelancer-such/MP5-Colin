import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatchAction, useSelect } from '@/hooks';
import { SyncOutlined } from '@ant-design/icons';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import { setIsLoadingAction } from '@/store/slices/globalSlice';
import {
  getAdCampaignColumns,
  getMarketingTeamColumns,
} from '@/constants/dashboard-table.constant';
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
import {
  getDashboardChartsMockup,
  getTotalCardsDashboardMockup,
} from '@/helpers/mockups/dashboard';
import ChartCard from '@/components/chart-card';
import { Typography } from '@/components/commons';
import CommonTable from '@/components/commons/Table';
import TotalCard from '@/components/total-card';
import './dashboard.scss';

function Dashboard() {
  const { t } = useTranslation('dashboard');
  const dispatch = useDispatchAction();
  const { isLoading } = useSelect((state) => state?.global);

  const [currentCampaignsPage, setCurrentCampaignsPage] = useState(1);
  const [currentTeamPage, setCurrentTeamPage] = useState(1);
  const [selectedPeriod, setSelectedPeriod] = useState('All');
  const pageSize = 5;

  // Create table translation wrapper
  const tTable = useMemo(() => (key: string) => t(`table.${key}`), [t]);

  useEffect(() => {
    dispatch(setIsLoadingAction(true));

    const timer = setTimeout(() => {
      dispatch(setIsLoadingAction(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const dataUsesHeaderActions = (
    <div className="data-uses-filters">
      <div className="filter-buttons">
        {['All', '1M', '6M', '1Y'].map((period) => (
          <button
            key={period}
            className={`filter-btn ${selectedPeriod === period ? 'active' : ''}`}
            onClick={() => setSelectedPeriod(period)}
          >
            {period === 'All' && t('filters.all')}
            {period === '1M' && t('filters.1m')}
            {period === '6M' && t('filters.6m')}
            {period === '1Y' && t('filters.1y')}
          </button>
        ))}
      </div>
      <button className="refresh-btn">
        <SyncOutlined />
        {t('filters.refresh')}
      </button>
    </div>
  );

  useBreadcrumb({
    isLoading: true,
    header: t('breadcrumb.dashboard'),
    breadcrumb: [
      { key: '1', label: t('breadcrumb.home') },
      {
        key: '2',
        label: t('breadcrumb.dashboard'),
      },
    ],
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-container__cards">
        {getTotalCardsDashboardMockup(t).map((data) => (
          <TotalCard key={data.id} isLoading={isLoading} inforCard={data} />
        ))}
      </div>

      <div className="dashboard-container__charts">
        {getDashboardChartsMockup(t)
          .slice(0, 3)
          .map((chartData) => (
            <ChartCard
              key={chartData.id}
              isLoading={isLoading}
              cardData={chartData}
            />
          ))}
      </div>

      <div className="dashboard-container__additional-charts">
        {getDashboardChartsMockup(t)
          .slice(3)
          .map((chartData) => {
            const cardDataWithActions =
              chartData.id === 'chart-5'
                ? { ...chartData, headerActions: dataUsesHeaderActions }
                : chartData;

            return (
              <ChartCard
                key={chartData.id}
                isLoading={isLoading}
                cardData={cardDataWithActions}
              />
            );
          })}
      </div>

      <div className="dashboard-container__marketing-tables">
        <div className="user-table-card">
          <div className="table-header-wrapper">
            <Typography variant="h6">{t('adCampaigns.title')}</Typography>
          </div>

          <div className="table-stats">
            <span className="stats-highlight">
              {adCampaignsStats.activeCampaigns}
            </span>{' '}
            {t('adCampaigns.activeCampaigns')}{' '}
            <span className="stats-highlight">
              {adCampaignsStats.totalCampaigns}
            </span>
          </div>

          <CommonTable<AdCampaign>
            columns={getAdCampaignColumns(tTable)}
            dataSource={adCampaignsMockup}
            isLoading={isLoading}
            rowKey="id"
            bordered={false}
            pagination={{
              current: currentCampaignsPage,
              pageSize: pageSize,
              total: adCampaignsMockup.length,
              onChange: (page) => setCurrentCampaignsPage(page),
              showSizeChanger: false,
              showTotal: (total, range) => (
                <span className="table-footer-info">
                  {t('adCampaigns.showingResults', {
                    start: range[0],
                    total: total,
                  })}
                </span>
              ),
            }}
          />
        </div>

        <div className="user-table-card">
          <div className="table-header-wrapper">
            <Typography variant="h6">{t('marketingTeam.title')}</Typography>
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
                {t('marketingTeam.import')}
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
                {t('marketingTeam.export')}
              </button>
            </div>
          </div>

          <div className="table-stats">
            <span className="stats-highlight">
              {marketingTeamStats.activeMembers}k
            </span>{' '}
            {t('marketingTeam.activeMembers')}{' '}
            <span className="stats-highlight">
              {marketingTeamStats.totalMembers}k
            </span>
          </div>

          <CommonTable<MarketingTeamMember>
            columns={getMarketingTeamColumns(tTable)}
            dataSource={marketingTeamMockup}
            isLoading={isLoading}
            rowKey="id"
            bordered={false}
            pagination={{
              current: currentTeamPage,
              pageSize: pageSize,
              total: marketingTeamMockup.length,
              onChange: (page) => setCurrentTeamPage(page),
              showSizeChanger: false,
              showTotal: (total, range) => (
                <span className="table-footer-info">
                  {t('marketingTeam.showingResults', {
                    start: range[0],
                    total: total,
                  })}
                </span>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
