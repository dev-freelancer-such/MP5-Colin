import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import './select.scss';

export interface SelectOption {
  label: string | React.ReactNode;
  value: string | number;
  disabled?: boolean;
  [key: string]: unknown;
}

export interface CommonSelectProps extends Omit<SelectProps, 'options'> {
  options: SelectOption[];
  label?: string;
  required?: boolean;
  errorMessage?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  options,
  label,
  required = false,
  errorMessage,
  containerClassName = '',
  labelClassName = '',
  placeholder = 'Vui lòng chọn',
  allowClear = true,
  showSearch = true,
  filterOption = (input, option) =>
    (option?.label?.toString() ?? '')
      .toLowerCase()
      .includes(input.toLowerCase()),
  ...restProps
}) => {
  return (
    <div className={`common-select-container ${containerClassName}`}>
      {label && (
        <label className={`common-select-label ${labelClassName}`}>
          {label}
          {required && <span className="common-select-required"> *</span>}
        </label>
      )}
      <Select
        placeholder={placeholder}
        allowClear={allowClear}
        showSearch={showSearch}
        filterOption={filterOption}
        options={options}
        {...restProps}
      />
      {errorMessage && (
        <span className="common-select-error">{errorMessage}</span>
      )}
    </div>
  );
};

export default CommonSelect;
