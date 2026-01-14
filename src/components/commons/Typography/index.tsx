import React from 'react';
import { Tooltip } from 'antd';
import './typography.scss';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'subtitle1'
  | 'subtitle2'
  | 'caption'
  | 'overline';

export type FontWeight =
  | 'thin'
  | 'light'
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | number;

export type TextColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'text-primary'
  | 'text-secondary'
  | 'text-disabled'
  | 'inherit';

export interface TypographyProps {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  fontWeight?: FontWeight;
  fontSize?: string | number;
  color?: TextColor | string;
  align?: 'left' | 'center' | 'right' | 'justify';
  component?: React.ElementType;
  noWrap?: boolean;
  truncate?: 1 | 2 | 3 | 4;
  gutterBottom?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  tooltip?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  fontWeight,
  fontSize,
  color,
  align,
  component,
  noWrap = false,
  truncate,
  gutterBottom = false,
  style = {},
  onClick,
  tooltip,
}) => {
  const getComponentTag = (): React.ElementType => {
    if (component) return component;

    if (!variant) return 'p';

    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return variant;
      case 'body1':
      case 'body2':
      case 'subtitle1':
      case 'subtitle2':
      case 'caption':
      case 'overline':
      default:
        return 'p';
    }
  };

  const getVariantClasses = (): string => {
    if (!variant) return '';
    return `typography-${variant}`;
  };

  // Xử lý fontWeight
  const getFontWeightClass = (): string => {
    if (!fontWeight) return '';

    if (typeof fontWeight === 'number') {
      const weightMap: Record<number, string> = {
        100: 'thin',
        200: 'thin',
        300: 'light',
        400: 'normal',
        500: 'medium',
        600: 'semibold',
        700: 'bold',
        800: 'extrabold',
        900: 'extrabold',
      };
      const weight = weightMap[fontWeight] || 'normal';
      return `typography-font-${weight}`;
    }

    return `typography-font-${fontWeight}`;
  };

  // Xử lý color
  const getColorClass = (): string => {
    if (!color) return '';

    const predefinedColors = [
      'primary',
      'secondary',
      'success',
      'warning',
      'error',
      'info',
      'text-primary',
      'text-secondary',
      'text-disabled',
      'inherit',
    ];

    if (predefinedColors.includes(color)) {
      return `typography-color-${color}`;
    }

    return '';
  };

  // Xử lý text alignment
  const getAlignClass = (): string => {
    if (!align) return '';
    return `typography-align-${align}`;
  };

  // Xử lý truncate
  const getTruncateClass = (): string => {
    if (!truncate) return '';
    return `typography-truncate-${truncate}`;
  };

  // Tạo className tổng hợp
  const classes = [
    'typography',
    getVariantClasses(),
    getFontWeightClass(),
    getColorClass(),
    getAlignClass(),
    noWrap ? 'typography-nowrap' : '',
    getTruncateClass(),
    gutterBottom ? 'typography-gutter-bottom' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Tạo inline styles
  const inlineStyles: React.CSSProperties = {
    fontFamily: 'Barlow, sans-serif',
    ...style,
    ...(fontSize && {
      fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    }),
    ...(!getColorClass() && color && { color }),
  };

  const Component = getComponentTag();

  return (
    <Component className={classes} style={inlineStyles} onClick={onClick}>
      {tooltip ? <Tooltip title={children}>{children}</Tooltip> : children}
    </Component>
  );
};

export default Typography;
