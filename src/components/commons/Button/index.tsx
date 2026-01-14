import React from 'react';
import { Button } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import './button.scss';
import Typography from '../Typography';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';
export type ButtonSize = 'small' | 'middle' | 'large';

export interface CommonButtonProps
  extends Omit<AntButtonProps, 'type' | 'size' | 'variant'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
  htmlType?: 'button' | 'submit' | 'reset';
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  href?: string;
  target?: string;
  shape?: 'default' | 'circle' | 'round';
}

const ButtonCommon: React.FC<CommonButtonProps> = ({
  variant = 'primary',
  size = 'middle',
  fullWidth = false,
  children,
  onClick,
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'start',
  htmlType = 'button',
  className = '',
  ghost = false,
  danger = false,
  block = false,
  href,
  target,
  shape = 'default',
  ...restProps
}) => {
  // Xác định type của Ant Design button dựa trên variant
  const getButtonType = (): AntButtonProps['type'] => {
    switch (variant) {
      case 'default':
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'default';
      case 'success':
      case 'warning':
      case 'error':
      case 'info':
        return 'primary';
      default:
        return 'default';
    }
  };

  // Tạo className cho variant
  const getVariantClass = (): string => {
    switch (variant) {
      case 'default':
        return 'common-button-default';
      case 'primary':
        return 'btn-primary';
      case 'success':
        return 'common-button-success';
      case 'warning':
        return 'common-button-warning';
      case 'error':
        return 'common-button-error';
      case 'info':
        return 'common-button-info';
      case 'secondary':
        return 'common-button-secondary';
      default:
        return '';
    }
  };

  // Tạo className tổng hợp
  const classes = [
    'common-button',
    getVariantClass(),
    fullWidth ? 'common-button-full-width' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Xử lý icon position
  const buttonIcon = icon && iconPosition === 'start' ? icon : undefined;

  return (
    <Button
      type={getButtonType()}
      size={size}
      onClick={onClick}
      loading={loading}
      disabled={disabled}
      icon={buttonIcon}
      htmlType={htmlType}
      className={classes}
      ghost={ghost}
      danger={danger || variant === 'error'}
      block={block || fullWidth}
      href={href}
      target={target}
      shape={shape}
      {...restProps}
    >
      {children}

      {icon && iconPosition === 'end' && !loading && (
        <span className="common-button-icon-end">{icon}</span>
      )}
    </Button>
  );
};

export default ButtonCommon;
