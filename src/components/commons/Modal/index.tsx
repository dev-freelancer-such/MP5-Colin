import React from 'react';
import { Modal } from 'antd';
import type { ModalProps as AntModalProps, ButtonProps } from 'antd';
import './modal.scss';

export interface CommonModalProps
  extends Omit<AntModalProps, 'onOk' | 'onCancel'> {
  visible?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
  okText?: string;
  cancelText?: string;
  width?: string | number;
  centered?: boolean;
  footer?: React.ReactNode | null;
  closable?: boolean;
  maskClosable?: boolean;
  confirmLoading?: boolean;
  destroyOnClose?: boolean;
  className?: string;
  bodyStyle?: React.CSSProperties;
  maskStyle?: React.CSSProperties;
  wrapClassName?: string;
  zIndex?: number;
  keyboard?: boolean;
  afterClose?: () => void;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  okType?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  forceRender?: boolean;
  getContainer?: string | HTMLElement | (() => HTMLElement) | false;
}

const ModalCommon: React.FC<CommonModalProps> = ({
  visible = false,
  title,
  children,
  onOk,
  onCancel,
  okText = 'OK',
  cancelText = 'Cancel',
  width = 520,
  centered = true,
  footer,
  closable = true,
  maskClosable = true,
  confirmLoading = false,
  destroyOnClose = false,
  className = '',
  bodyStyle,
  maskStyle,
  wrapClassName = '',
  zIndex = 1000,
  keyboard = true,
  afterClose,
  okButtonProps,
  cancelButtonProps,
  okType = 'primary',
  forceRender = false,
  getContainer,
  ...restProps
}) => {
  const handleOk = async () => {
    if (onOk) {
      await onOk();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const classes = ['common-modal', className].filter(Boolean).join(' ');

  const wrapClasses = ['common-modal-wrap', wrapClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <Modal
      open={visible}
      title={title}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      cancelText={cancelText}
      width={width}
      centered={centered}
      footer={footer}
      closable={closable}
      maskClosable={maskClosable}
      confirmLoading={confirmLoading}
      destroyOnClose={destroyOnClose}
      className={classes}
      bodyStyle={bodyStyle}
      maskStyle={maskStyle}
      wrapClassName={wrapClasses}
      zIndex={zIndex}
      keyboard={keyboard}
      afterClose={afterClose}
      okButtonProps={okButtonProps}
      cancelButtonProps={cancelButtonProps}
      okType={okType}
      forceRender={forceRender}
      getContainer={getContainer}
      {...restProps}
    >
      {children}
    </Modal>
  );
};

export default ModalCommon;
