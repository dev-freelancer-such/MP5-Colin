import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import './loading.scss';

export interface LoadingProps {
  size?: 'small' | 'default' | 'large';
  tip?: string;
  fullscreen?: boolean;
  spinning?: boolean;
  children?: React.ReactNode;
  iconSize?: number;
  overlay?: boolean;
  className?: string;
  type?: 'spin' | 'text';
  textLoadingProp?: string;
}

const Loading: React.FC<LoadingProps> = ({
  size = 'large',
  tip,
  fullscreen = false,
  spinning = true,
  children,
  iconSize,
  overlay = false,
  className = '',
  type = 'text',
  textLoadingProp = 'LOADING',
}) => {
  const getIconSize = () => {
    if (iconSize) return iconSize;
    switch (size) {
      case 'small':
        return 24;
      case 'large':
        return 48;
      default:
        return 32;
    }
  };

  const antIcon = (
    <LoadingOutlined
      style={{ fontSize: getIconSize() }}
      spin
      className="loading-icon"
    />
  );

  if (children) {
    return (
      <Spin
        spinning={spinning}
        indicator={antIcon}
        size={size}
        tip={tip}
        className={`loading-wrapper ${className}`}
      >
        {children}
      </Spin>
    );
  }

  if (fullscreen) {
    if (!spinning) return null;

    return (
      <div className={`loading-fullscreen ${className}`}>
        <div className="loading-content">
          {type === 'text' ? (
            <div className="loader-text" data-text={textLoadingProp}>
              {textLoadingProp}
            </div>
          ) : (
            <div className="loading-spinner">
              <Spin indicator={antIcon} size={size} />
            </div>
          )}
          {tip && <div className="loading-tip">{tip}</div>}
        </div>
      </div>
    );
  }

  if (overlay) {
    if (!spinning) return null;

    return (
      <div className={`loading-overlay ${className}`}>
        <div className="loading-content">
          {type === 'text' ? (
            <div className="loader-text" data-text={textLoadingProp}>
              {textLoadingProp}
            </div>
          ) : (
            <Spin indicator={antIcon} size={size} tip={tip} />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`loading-container ${className}`}>
      <div className="loading-container__backdrop"></div>

      {type === 'spin' ? (
        <div className="spin-loader loading-container__loader" />
      ) : (
        <div className="loader-text loading-container__text">
          {textLoadingProp}
        </div>
      )}
    </div>
  );
};

export const FullscreenLoading: React.FC<
  Omit<LoadingProps, 'fullscreen' | 'overlay' | 'children'>
> = (props) => <Loading {...props} fullscreen />;

export const OverlayLoading: React.FC<
  Omit<LoadingProps, 'fullscreen' | 'overlay' | 'children'>
> = (props) => <Loading {...props} overlay />;

export const TextLoading: React.FC<
  Omit<LoadingProps, 'fullscreen' | 'overlay' | 'children'>
> = (props) => <Loading {...props} type="text" fullscreen />;

export default Loading;
