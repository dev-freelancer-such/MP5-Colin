export interface BreadcrumbPropsInterface {
  isLoading?: boolean;
  header?: string;
  breadcrumb?: BreadcrumbInterface[];
}

export interface BreadcrumbInterface {
  key: string;
  label: string;
  path?: string;
}

export interface ResultRequestInterface {
  data: unknown;
  total: number;
  page: number;
  limit: number;
  total_pages: number;
}

export interface ParamsInterface {
  page?: number;
  limit?: number;
  total?: number;
}

export interface RequestOptionsInterface {
  setIsLoading?: (loading: boolean) => void;
  data?: object;
  params?: object;
  isFormData?: boolean;
  enableFlashMessageSuccess?: {
    label?: string;
    description?: string;
  };
  enableFlashMessageError?: {
    label?: string;
    description?: string;
  };
}
