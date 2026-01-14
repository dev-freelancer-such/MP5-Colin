import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import type { InputProps as AntInputProps, InputRef } from 'antd';
import './input.scss';

const { TextArea, Password } = Input;

export type InputVariant = 'outlined' | 'filled' | 'borderless';
export type InputSize = 'small' | 'middle' | 'large';
export type InputStatus = 'error' | 'warning' | '';

export interface CommonInputProps
  extends Omit<AntInputProps, 'size' | 'variant' | 'status'> {
  variant?: InputVariant;
  size?: InputSize;
  status?: InputStatus;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
}

const InputCommon = React.forwardRef<InputRef, CommonInputProps>(
  (
    {
      variant = 'outlined',
      size = 'middle',
      status,
      fullWidth = false,
      label,
      helperText,
      error = false,
      errorMessage,
      required = false,
      startIcon,
      endIcon,
      className = '',
      containerClassName = '',
      labelClassName = '',
      helperClassName = '',
      disabled = false,
      ...restProps
    },
    ref
  ) => {
    // Xác định variant style
    const getVariantClass = (): string => {
      switch (variant) {
        case 'filled':
          return 'input-filled';
        case 'borderless':
          return 'input-borderless';
        case 'outlined':
        default:
          return 'input-outlined';
      }
    };

    // Xác định status
    const getStatus = (): 'error' | 'warning' | '' => {
      if (error || errorMessage) return 'error';
      return status || '';
    };

    // Tạo className tổng hợp
    const inputClasses = [
      'common-input',
      getVariantClass(),
      fullWidth ? 'common-input--full-width' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      'common-input-container',
      fullWidth ? 'common-input-container--full-width' : '',
      containerClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [
      'common-input-label',
      error || errorMessage ? 'common-input-label--error' : '',
      disabled ? 'common-input-label--disabled' : '',
      labelClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'common-input-helper',
      error || errorMessage ? 'common-input-helper--error' : '',
      helperClassName,
    ]
      .filter(Boolean)
      .join(' ');

    // Input với prefix/suffix icons
    const inputProps: AntInputProps = {
      size,
      status: getStatus(),
      disabled,
      className: inputClasses,
      ...(startIcon && { prefix: startIcon }),
      ...(endIcon && { suffix: endIcon }),
      ...restProps,
    };

    // Xử lý variant borderless
    if (variant === 'borderless') {
      inputProps.variant = 'borderless';
    } else if (variant === 'filled') {
      inputProps.variant = 'filled';
    }

    return (
      <div className={containerClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="common-input-required">*</span>}
          </label>
        )}

        <Input ref={ref} {...inputProps} />

        {(helperText || errorMessage) && (
          <p className={helperClasses}>{errorMessage || helperText}</p>
        )}
      </div>
    );
  }
);

InputCommon.displayName = 'InputCommon';

export interface CommonInputPasswordProps
  extends Omit<CommonInputProps, 'type'> {
  visibilityToggle?: boolean;
  iconRender?: (visible: boolean) => React.ReactNode;
}

export const InputPassword = React.forwardRef<
  InputRef,
  CommonInputPasswordProps
>(
  (
    {
      variant = 'outlined',
      size = 'middle',
      fullWidth = false,
      label,
      helperText,
      error = false,
      errorMessage,
      required = false,
      className = '',
      containerClassName = '',
      labelClassName = '',
      helperClassName = '',
      disabled = false,
      visibilityToggle = true,
      iconRender,
      ...restProps
    },
    ref
  ) => {
    const getVariantClass = (): string => {
      switch (variant) {
        case 'filled':
          return 'input-filled';
        case 'borderless':
          return 'input-borderless';
        case 'outlined':
        default:
          return 'input-outlined';
      }
    };

    const getStatus = (): 'error' | 'warning' | '' => {
      if (error || errorMessage) return 'error';
      return '';
    };

    const inputClasses = [
      'common-input-password',
      getVariantClass(),
      fullWidth ? 'common-input--full-width' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      'common-input-container',
      fullWidth ? 'common-input-container--full-width' : '',
      containerClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [
      'common-input-label',
      error || errorMessage ? 'common-input-label--error' : '',
      disabled ? 'common-input-label--disabled' : '',
      labelClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'common-input-helper',
      error || errorMessage ? 'common-input-helper--error' : '',
      helperClassName,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="common-input-required">*</span>}
          </label>
        )}

        <Password
          ref={ref}
          size={size}
          status={getStatus()}
          disabled={disabled}
          className={inputClasses}
          visibilityToggle={visibilityToggle}
          iconRender={iconRender}
          {...restProps}
        />

        {(helperText || errorMessage) && (
          <p className={helperClasses}>{errorMessage || helperText}</p>
        )}
      </div>
    );
  }
);

InputPassword.displayName = 'InputPassword';

export interface CommonInputTextAreaProps {
  variant?: InputVariant;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperClassName?: string;
  disabled?: boolean;
  rows?: number;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  showCount?: boolean;
  maxLength?: number;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const InputTextArea = React.forwardRef<
  HTMLTextAreaElement,
  CommonInputTextAreaProps
>(
  (
    {
      variant = 'outlined',
      fullWidth = false,
      label,
      helperText,
      error = false,
      errorMessage,
      required = false,
      className = '',
      containerClassName = '',
      labelClassName = '',
      helperClassName = '',
      disabled = false,
      rows = 4,
      autoSize,
      showCount = false,
      maxLength,
      ...restProps
    },
    ref
  ) => {
    const getVariantClass = (): string => {
      switch (variant) {
        case 'filled':
          return 'input-filled';
        case 'borderless':
          return 'input-borderless';
        case 'outlined':
        default:
          return 'input-outlined';
      }
    };

    const getStatus = (): 'error' | 'warning' | '' => {
      if (error || errorMessage) return 'error';
      return '';
    };

    const inputClasses = [
      'common-input-textarea',
      getVariantClass(),
      fullWidth ? 'common-input--full-width' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      'common-input-container',
      fullWidth ? 'common-input-container--full-width' : '',
      containerClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [
      'common-input-label',
      error || errorMessage ? 'common-input-label--error' : '',
      disabled ? 'common-input-label--disabled' : '',
      labelClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'common-input-helper',
      error || errorMessage ? 'common-input-helper--error' : '',
      helperClassName,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="common-input-required">*</span>}
          </label>
        )}

        <TextArea
          ref={ref}
          status={getStatus()}
          disabled={disabled}
          className={inputClasses}
          rows={rows}
          autoSize={autoSize}
          showCount={showCount}
          maxLength={maxLength}
          {...restProps}
        />

        {(helperText || errorMessage) && (
          <p className={helperClasses}>{errorMessage || helperText}</p>
        )}
      </div>
    );
  }
);

InputTextArea.displayName = 'InputTextArea';

export interface CommonInputSearchProps extends Omit<CommonInputProps, 'type'> {
  onSearch?: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>
  ) => void;
  enterButton?: React.ReactNode;
  loading?: boolean;
}

export const InputSearch = React.forwardRef<InputRef, CommonInputSearchProps>(
  (
    {
      variant = 'outlined',
      size = 'middle',
      fullWidth = false,
      label,
      helperText,
      error = false,
      errorMessage,
      required = false,
      className = '',
      containerClassName = '',
      labelClassName = '',
      helperClassName = '',
      disabled = false,
      onSearch,
      ...restProps
    },
    ref
  ) => {
    const getVariantClass = (): string => {
      switch (variant) {
        case 'filled':
          return 'input-filled';
        case 'borderless':
          return 'input-borderless';
        case 'outlined':
        default:
          return 'input-outlined';
      }
    };

    const getStatus = (): 'error' | 'warning' | '' => {
      if (error || errorMessage) return 'error';
      return '';
    };

    const inputClasses = [
      'common-input-search',
      getVariantClass(),
      fullWidth ? 'common-input--full-width' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const containerClasses = [
      'common-input-container',
      fullWidth ? 'common-input-container--full-width' : '',
      containerClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const labelClasses = [
      'common-input-label',
      error || errorMessage ? 'common-input-label--error' : '',
      disabled ? 'common-input-label--disabled' : '',
      labelClassName,
    ]
      .filter(Boolean)
      .join(' ');

    const helperClasses = [
      'common-input-helper',
      error || errorMessage ? 'common-input-helper--error' : '',
      helperClassName,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={containerClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
            {required && <span className="common-input-required">*</span>}
          </label>
        )}

        <Input
          ref={ref}
          size={size}
          status={getStatus()}
          disabled={disabled}
          className={inputClasses}
          prefix={<SearchOutlined />}
          onPressEnter={(e) => {
            if (onSearch) {
              onSearch(e.currentTarget.value, e);
            }
          }}
          {...restProps}
        />

        {(helperText || errorMessage) && (
          <p className={helperClasses}>{errorMessage || helperText}</p>
        )}
      </div>
    );
  }
);

InputSearch.displayName = 'InputSearch';

export default InputCommon;
