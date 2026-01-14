import { Segmented } from 'antd';
import type { SegmentedProps } from 'antd';
import './segmented.scss';

export interface CommonSegmentedProps extends SegmentedProps {
  className?: string;
}

function CommonSegmented({
  className = '',
  ...restProps
}: CommonSegmentedProps) {
  return (
    <Segmented className={`common-segmented ${className}`} {...restProps} />
  );
}

export default CommonSegmented;
