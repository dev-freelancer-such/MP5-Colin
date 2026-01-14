import type { RequestOptionsInterface } from '@/models/common/common.model';
import axiosInstance from '../base/axiosInstance';

export const deleteRequest = async (
  url: string,
  options?: RequestOptionsInterface
): Promise<object> => {
  const {
    setIsLoading,
    params: optionParams,
    enableFlashMessageSuccess,
    enableFlashMessageError,
    toast,
  } = options || {};

  setIsLoading?.(true);

  try {
    const params = { ...optionParams };

    const response = await axiosInstance.delete(url, { params });

    if (toast && enableFlashMessageSuccess) {
      toast.success({
        message: enableFlashMessageSuccess?.label || 'Thành công!',
        description:
          enableFlashMessageSuccess?.description || 'Thao tác thành công!',
      });
    }

    return response;
  } catch (err) {
    if (toast && enableFlashMessageError) {
      toast.error({
        message: enableFlashMessageError?.label || 'Thất bại!',
        description:
          enableFlashMessageError?.description ||
          String(err) ||
          'Thao tác thất bại!',
      });
    }
    throw err;
  } finally {
    setIsLoading?.(false);
  }
};
