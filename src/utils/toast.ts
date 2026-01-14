import type { NotificationArgsProps } from 'antd';
import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface ToastProps extends Omit<NotificationArgsProps, 'type'> {
  type?: NotificationType;
  message: string;
  description?: string;
  duration?: number;
  placement?:
    | 'top'
    | 'topLeft'
    | 'topRight'
    | 'bottom'
    | 'bottomLeft'
    | 'bottomRight';
}

const defaultConfig = {
  duration: 5,
  placement: 'topRight' as const,
};

// Toast utility that can be used anywhere (not a React Hook)
export const toast = {
  success: (props: Omit<ToastProps, 'type'>) => {
    notification.success({
      ...defaultConfig,
      ...props,
    });
  },

  error: (props: Omit<ToastProps, 'type'>) => {
    notification.error({
      ...defaultConfig,
      ...props,
    });
  },

  info: (props: Omit<ToastProps, 'type'>) => {
    notification.info({
      ...defaultConfig,
      ...props,
    });
  },

  warning: (props: Omit<ToastProps, 'type'>) => {
    notification.warning({
      ...defaultConfig,
      ...props,
    });
  },

  show: (props: ToastProps) => {
    const { type = 'info', ...rest } = props;
    notification[type]({
      ...defaultConfig,
      ...rest,
    });
  },

  destroy: () => {
    notification.destroy();
  },
};

export default toast;
