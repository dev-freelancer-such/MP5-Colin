import { toastService } from '../../hooks/toast-channel';

const STATUS_ERRORS = new Map([
  [400, 'Dữ liệu không hợp lệ'],
  [401, 'Không có quyền truy cập'],
  [403, 'Bị cấm truy cập'],
  [404, 'Không tìm thấy tài nguyên'],
  [422, 'Dữ liệu không đúng định dạng'],
  [500, 'Lỗi máy chủ nội bộ'],
]);

const isNetworkError = (err: unknown): boolean =>
  (err as any)?.code === 'NETWORK_ERROR' ||
  (err as any)?.message?.includes('Network');

const getErrorTitle = (err: unknown): string => {
  if ((err as any)?.response?.status) {
    return (
      STATUS_ERRORS.get((err as any).response.status) ||
      `Lỗi HTTP ${err.response.status}`
    );
  }
  return isNetworkError(err) ? 'Lỗi kết nối mạng' : 'Lỗi không xác định';
};

const removeStringJson = (str: string): string => {
  const noQuotesString = str.replace(/\\"/g, '');
  return noQuotesString;
};

const getErrorMessage = (err: any): { message: string; title: string } => {
  let message =
    err.response?.data?.message ||
    err?.message ||
    'Đã xảy ra lỗi không xác định';

  // Clean up the message by removing quotes and extra formatting
  if (typeof message === 'string') {
    message = message
      .replace(/^"|"$/g, '')
      .replace(/\\"/g, '"')
      .replace(/\n/g, '')
      .replace(/\\n/g, '')
      .trim();
  }

  return {
    message,
    title: 'Lỗi: ' + getErrorTitle(err),
  };
};

export const handleError = (
  err: unknown,
  enableFlashMessageError: string | boolean
) => {
  if (isNetworkError(err)) {
    toastService.publish({
      type: 'error',
      title: getErrorTitle(err),
      description: 'Vui lòng kiểm tra kết nối mạng',
    });
  }
  const { title, message } = getErrorMessage(err);

  if (enableFlashMessageError) {
    toastService.publish({
      type: 'error',
      title,
      description:
        typeof enableFlashMessageError === 'string'
          ? enableFlashMessageError
          : message,
    });
  }
};

export const handleSuccess = (enableFlashMessageSuccess: string | boolean) => {
  if (enableFlashMessageSuccess) {
    toastService.publish({
      type: 'success',
      title: 'Thành công',
      description:
        typeof enableFlashMessageSuccess === 'string'
          ? enableFlashMessageSuccess
          : 'Thao tác thành công',
    });
  }
};
