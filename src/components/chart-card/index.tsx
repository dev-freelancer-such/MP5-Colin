import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Skeleton } from 'antd';
import type { MenuProps } from 'antd';
import { isEmpty } from 'lodash';
import type { ChartCardProps } from '@/models/dashboard/chart-card.model';
import {
  AreaChart,
  BarChart,
  ColumnChart,
  DualAxesChart,
  Image,
  LineChart,
  PieChart,
} from '@/components/commons';
import Typography from '@/components/commons/Typography';
import './chart-card.scss';

export type {
  ChartCardProps,
  ChartCardData,
} from '@/models/dashboard/chart-card.model';

const ChartCard: React.FC<ChartCardProps> = ({
  isLoading = false,
  cardData,
  className = '',
}) => {
  const {
    title,
    dateRange,
    chartType,
    data,
    height = 350,
    chartConfig = {},
    headerActions,
    footerContent,
    totals,
    paymentsMethod,
    inforTotal,
  } = cardData;

  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'View Details',
    },
    {
      key: '2',
      label: 'Export Data',
    },
    {
      key: '3',
      label: 'Download Chart',
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: 'Settings',
    },
  ];

  const renderChart = () => {
    const commonProps = {
      data: data as unknown as never,
      height,
      loading: isLoading,
      className: 'chart-card__chart',
      ...chartConfig,
    };

    console.log('ChartCard - commonProps:', commonProps);

    switch (chartType) {
      case 'line':
        return <LineChart {...commonProps} />;
      case 'area':
        return <AreaChart {...commonProps} />;
      case 'column':
        return <ColumnChart {...commonProps} />;
      case 'bar':
        return <BarChart {...commonProps} />;
      case 'pie':
        return <PieChart {...commonProps} />;
      case 'dualAxes':
        return <DualAxesChart {...commonProps} />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className={`chart-card chart-card--loading ${className}`}>
        <div className="chart-card__header">
          <div className="chart-card__title-section">
            <Skeleton.Input
              active
              size="small"
              style={{ width: 150, height: 20 }}
            />
            <Skeleton.Input
              active
              size="small"
              style={{ width: 120, height: 14, marginTop: 8 }}
            />
          </div>
          <div className="chart-card__actions">
            <Skeleton.Avatar active size={32} shape="square" />
          </div>
        </div>

        {cardData.totals && (
          <div className="chart-card__totals-section">
            <Skeleton.Input
              active
              size="large"
              style={{ width: 120, height: 32 }}
            />
            <div className="skeleton-payment-methods">
              <Skeleton.Avatar
                active
                size={24}
                shape="square"
                style={{ borderRadius: 4 }}
              />
              <Skeleton.Avatar
                active
                size={24}
                shape="square"
                style={{ borderRadius: 4 }}
              />
              <Skeleton.Avatar
                active
                size={24}
                shape="square"
                style={{ borderRadius: 4 }}
              />
            </div>
          </div>
        )}

        {/* Skeleton for info container */}
        {cardData.inforTotal && (
          <div className="chart-card__info-container">
            {[1, 2, 3].map((i) => (
              <div key={i} className="chart-card__info">
                <Skeleton.Input
                  active
                  size="default"
                  style={{ width: 80, height: 28, marginBottom: 8 }}
                />
                <Skeleton.Input
                  active
                  size="small"
                  style={{ width: 100, height: 14 }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="chart-card__body">
          <Skeleton.Node active style={{ width: '100%', height: height }}>
            <div style={{ width: '100%', height: height }} />
          </Skeleton.Node>
        </div>
      </div>
    );
  }

  return (
    <div className={`chart-card ${className}`}>
      <div className="chart-card__header">
        <div className="chart-card__title-section">
          <Typography
            variant="subtitle1"
            fontWeight="semibold"
            className="chart-card__title"
          >
            {title}
          </Typography>
          {dateRange && (
            <Typography variant="body2" className="chart-card__date-range">
              {dateRange}
            </Typography>
          )}
        </div>

        <div className="chart-card__actions">
          {headerActions}
          <Dropdown menu={{ items: menuItems }} trigger={['click']}>
            <button className="chart-card__menu-button">
              <MoreOutlined />
            </button>
          </Dropdown>
        </div>
      </div>

      {(totals || !isEmpty(paymentsMethod)) && (
        <div className="chart-card__totals-section">
          <Typography variant="h4" fontWeight="medium">
            {totals}
          </Typography>

          <div className="payments-methods">
            {paymentsMethod?.map((method) => (
              <Image
                src={method}
                alt="Payment Method"
                key={method}
                width={38}
              />
            ))}
          </div>
        </div>
      )}

      {!isEmpty(inforTotal) && (
        <div className="chart-card__info-container">
          {inforTotal?.map((info) => (
            <div key={info.value} className="chart-card__info">
              <Typography variant="h5">{info.value}</Typography>
              <Typography variant="body2" fontWeight="medium">
                {info.label}
              </Typography>
            </div>
          ))}
        </div>
      )}

      <div className="chart-card__body">{renderChart()}</div>

      {footerContent && (
        <div className="chart-card__footer">{footerContent}</div>
      )}
    </div>
  );
};

export default ChartCard;
