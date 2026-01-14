import type { RequestOptionsInterface } from '@/models/common/common.model';
import webStorageClient from '../../utils/webStorageClient';
import axiosInstance from '../base/axiosInstance';

export const downloadRequest = async (
  url: string,
  options?: RequestOptionsInterface & {
    filename?: string;
  }
): Promise<void> => {
  const {
    setIsLoading,
    params: optionParams,
    enableFlashMessageSuccess,
    enableFlashMessageError,
    toast,
    filename,
  } = options || {};

  setIsLoading?.(true);

  try {
    // Prepare request config
    const tokenClient = webStorageClient.getToken();
    const params = { ...optionParams };

    const headers: Record<string, string> = {
      Accept: 'application/octet-stream',
    };

    if (tokenClient) {
      headers.Authorization = tokenClient;
    }

    // Make request with responseType: 'blob' for file downloads
    const response = await axiosInstance.get(url, {
      params,
      headers,
      responseType: 'blob',
    });

    // Get filename from response headers or use provided filename
    let downloadFilename = filename || 'download';
    const disposition = response.headers['content-disposition'];
    if (disposition) {
      const filenameMatch = disposition.match(/filename="([^"]*)"/);
      if (filenameMatch) {
        downloadFilename = filenameMatch[1];
      }
    }

    // Create blob and download
    const blob = new Blob([response.data]);
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = downloadFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);

    // Handle success
    if (toast && enableFlashMessageSuccess) {
      toast.success({
        message: enableFlashMessageSuccess?.label || 'Thành công!',
        description:
          enableFlashMessageSuccess?.description || 'Tải xuống thành công!',
      });
    }
  } catch (err) {
    // Handle error
    if (toast && enableFlashMessageError) {
      toast.error({
        message: enableFlashMessageError?.label || 'Thất bại!',
        description:
          enableFlashMessageError?.description ||
          String(err) ||
          'Tải xuống thất bại!',
      });
    }
    throw err;
  } finally {
    // Cleanup
    setIsLoading?.(false);
  }
};
