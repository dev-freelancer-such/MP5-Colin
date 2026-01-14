import React from 'react';
import { ReactSVG } from 'react-svg';
import { Skeleton } from 'antd';
import Typography from '@/components/commons/Typography';
import './total-card.scss';
import type { TotalCardProps } from '../../models/dashboard/total-card.model';

export type {
  TotalCardProps,
  TotalCardData,
} from '../../models/dashboard/total-card.model';

const TotalCard: React.FC<TotalCardProps> = ({
  isLoading = false,
  inforCard,
}) => {
  const {
    title,
    value,
    icon,
    layer,
    percentageChange,
    changeLabel = 'Since last month',
  } = inforCard;

  const isPositive = percentageChange >= 0;

  if (isLoading) {
    return (
      <div className="total-card total-card--loading">
        <div className="total-card__header">
          <Skeleton.Input
            active
            size="small"
            style={{ width: 120, height: 14 }}
          />
        </div>
        <div className="total-card__body">
          <Skeleton.Avatar
            active
            size={50}
            shape="square"
            style={{ borderRadius: 100 }}
          />
          <div className="total-card__content">
            <Skeleton.Input
              active
              size="large"
              style={{ width: 140, height: 32 }}
            />
          </div>
        </div>
        <div className="total-card__footer">
          <Skeleton.Input
            active
            size="small"
            style={{ width: 180, height: 14 }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="total-card">
      <div className="total-card__header">
        <Typography
          variant="body2"
          color="text-secondary"
          fontWeight="medium"
          className="total-card__title"
        >
          {title}
        </Typography>
      </div>

      <div className="total-card__body">
        <div className="total-card__icon">
          <ReactSVG src={icon} className="total-card__icon-svg" />
        </div>

        <div className="total-card__content">
          <Typography variant="h5" fontWeight="bold">
            {value}
          </Typography>
        </div>

        {layer && (
          <div className="total-card__watermark">
            <ReactSVG src={layer} className="total-card__watermark-svg" />
          </div>
        )}
      </div>

      <div className="total-card__footer">
        <div className="total-card__change">
          <Typography
            variant="body1"
            color={isPositive ? 'success' : 'error'}
            fontWeight="semibold"
            className="total-card__percentage"
          >
            <span className="total-card__arrow">{isPositive ? '▲' : '▼'}</span>
            {Math.abs(percentageChange)}%
          </Typography>

          <Typography variant="body1" className="total-card__label">
            {changeLabel}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default TotalCard;
