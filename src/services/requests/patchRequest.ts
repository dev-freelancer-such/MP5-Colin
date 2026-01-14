import type { RequestOptionsInterface } from '@/models/common/common.model';
import axiosInstance from '../base/axiosInstance';

export const patchRequest = async (
  url: string,
  options?: RequestOptionsInterface
): Promise<object> => {
  const {
    setIsLoading,
    data,
    params: optionParams,
    isFormData = false,
    enableFlashMessageSuccess,
    enableFlashMessageError,
    toast,
  } = options || {};

  setIsLoading?.(true);

  try {
    const params = { ...optionParams };
    const headers: Record<string, string> = {};

    if (isFormData) {
      headers['Content-Type'] = 'multipart/form-data';
    }

    const response = await axiosInstance.patch(url, data, { params, headers });

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
