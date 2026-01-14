import React from 'react';
import { Pagination } from 'antd';
import type { PaginationProps } from 'antd';
import './pagination.scss';

export interface CommonPaginationProps extends PaginationProps {
  total: number;
  current?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize: number) => void;
  onShowSizeChange?: (current: number, size: number) => void;
  showSizeChanger?: boolean;
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  pageSizeOptions?: string[];
  className?: string;
}

const CommonPagination: React.FC<CommonPaginationProps> = ({
  total,
  current = 1,
  pageSize = 10,
  onChange,
  onShowSizeChange,
  showSizeChanger = true,
  showTotal = (total, range) => `${range[0]}-${range[1]} của ${total} bản ghi`,
  pageSizeOptions = ['10', '20', '50', '100'],
  className = '',
  ...restProps
}) => {
  return (
    <div className={`common-pagination-wrapper ${className}`}>
      <Pagination
        total={total}
        current={current}
        pageSize={pageSize}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
        showSizeChanger={showSizeChanger}
        showTotal={showTotal}
        pageSizeOptions={pageSizeOptions}
        {...restProps}
      />
    </div>
  );
};

export default CommonPagination;
