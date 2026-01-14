import React from 'react';
import { Switch as AntSwitch } from 'antd';
import type { SwitchProps as AntSwitchProps } from 'antd';
import './switch.scss';

export interface CommonSwitchProps extends AntSwitchProps {
  className?: string;
  style?: React.CSSProperties;
  showLabels?: boolean;
  yesLabel?: string;
  noLabel?: string;
}

const Switch: React.FC<CommonSwitchProps> = ({
  checked,
  defaultChecked,
  disabled = false,
  loading = false,
  size = 'default',
  checkedChildren,
  unCheckedChildren,
  onChange,
  className = '',
  style,
  showLabels = true,
  yesLabel = 'Yes',
  noLabel = 'No',
  ...rest
}) => {
  const switchClasses = ['common-switch', className].filter(Boolean).join(' ');

  const defaultCheckedChildren = showLabels ? yesLabel : checkedChildren;
  const defaultUnCheckedChildren = showLabels ? noLabel : unCheckedChildren;

  return (
    <AntSwitch
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      loading={loading}
      size={size}
      checkedChildren={checkedChildren ?? defaultCheckedChildren}
      unCheckedChildren={unCheckedChildren ?? defaultUnCheckedChildren}
      onChange={onChange}
      className={switchClasses}
      style={style}
      {...rest}
    />
  );
};

export default Switch;
