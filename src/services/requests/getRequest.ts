import type { RequestOptionsInterface } from '@/models/common/common.model';
import toast from '@/utils/toast';
import axiosInstance from '../base/axiosInstance';

export const getRequest = async (
  url: string,
  options?: RequestOptionsInterface
): Promise<object> => {
  const {
    setIsLoading,
    params: optionParams,
    enableFlashMessageSuccess,
    enableFlashMessageError,
  } = options || {};

  setIsLoading?.(true);

  try {
    const params = { ...optionParams };

    const response = await axiosInstance.get(url, { params });

    if (enableFlashMessageSuccess) {
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
