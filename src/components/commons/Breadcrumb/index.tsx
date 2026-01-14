import React from 'react';
import { Link } from 'react-router-dom';
import './breadcrumb.scss';
import Typography from '../Typography';

export interface BreadcrumbItem {
  label: string;
  path?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = '>',
  className = '',
}) => {
  return (
    <nav className={`common-breadcrumb ${className}`} aria-label="breadcrumb">
      <ol className="common-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className={`common-breadcrumb__item ${
                isLast ? 'common-breadcrumb__item--active' : ''
              }`}
            >
              {item.path && !isLast ? (
                <Link to={item.path} className="common-breadcrumb__link">
                  {item.icon && (
                    <span className="common-breadcrumb__icon">{item.icon}</span>
                  )}
                  <Typography
                    component="span"
                    className="common-breadcrumb__text"
                  >
                    {item.label}
                  </Typography>
                </Link>
              ) : (
                <span className="common-breadcrumb__current">
                  {item.icon && (
                    <span className="common-breadcrumb__icon">{item.icon}</span>
                  )}
                  <Typography
                    component="span"
                    className="common-breadcrumb__text"
                    fontWeight="medium"
                  >
                    {item.label}
                  </Typography>
                </span>
              )}

              {!isLast && (
                <span className="common-breadcrumb__separator">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
