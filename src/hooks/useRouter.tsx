import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  FILTER_KEY,
  ORDER_KEY,
  PAGE_KEY,
  PER_PAGE,
  SORT_KEY,
  TABLE_TYPE_KEY,
} from '@/constants/common.constant';

interface UseRouterPropsInterface {
  searchParams: URLSearchParams;
  updateParams: (
    params: Record<string, string | number | null | undefined>
  ) => void;
  getParam: (key: string) => string | null;
  removeParam: (key: string) => void;
  removeParams: (keys: string[]) => void;
  clearAllParams: (
    keysToKeep?: Record<string, string | number | null | undefined>[]
  ) => void;
  sortFromUrl: string | null;
  pageFromUrl: string | null;
  orderFromUrl: string | null;
  filterFromUrl: string | null;
  perPageFromUrl: number;
  tableTypeFromUrl: string | null;
  navigate: (to: string) => void;
}

export function useRouter(): UseRouterPropsInterface {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParams = (
    params: Record<string, string | number | null | undefined>
  ) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === undefined || value === '') {
          newParams.delete(key);
        } else {
          newParams.set(key, value.toString());
        }
      });

      return newParams;
    });
  };

  const getParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  const removeParam = (key: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete(key);
      return newParams;
    });
  };

  const removeParams = (keys: string[]) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      keys.forEach((key) => newParams.delete(key));
      return newParams;
    });
  };

  const clearAllParams = (
    keysToKeep?: Record<string, string | number | null | undefined>[]
  ) => {
    console.log('clearAllParams called with:', keysToKeep);

    if (!keysToKeep || keysToKeep.length === 0) {
      setSearchParams(new URLSearchParams());
    } else {
      setSearchParams((prev) => {
        const newParams = new URLSearchParams();

        console.log('Previous params:', Object.fromEntries(prev.entries()));

        keysToKeep.forEach((item) => {
          Object.entries(item).forEach(([key, value]) => {
            console.log(`Processing key: ${key}, value:`, value);

            if (value !== null && value !== undefined && value !== '') {
              newParams.set(key, value.toString());
              console.log(`Set ${key} to new value:`, value);
            } else {
              const oldValue = prev.get(key);
              if (oldValue !== null) {
                newParams.set(key, oldValue);
                console.log(`Set ${key} to old value:`, oldValue);
              }
            }
          });
        });

        console.log('New params:', Object.fromEntries(newParams.entries()));
        return newParams;
      });
    }
  };

  const sortFromUrl = searchParams.get(SORT_KEY);
  const pageFromUrl = searchParams.get(PAGE_KEY);
  const orderFromUrl = searchParams.get(ORDER_KEY);
  const filterFromUrl = searchParams.get(FILTER_KEY);
  const perPageFromUrl = Number(searchParams.get(PER_PAGE));
  const tableTypeFromUrl = searchParams.get(TABLE_TYPE_KEY);

  return {
    navigate,
    getParam,
    sortFromUrl,
    pageFromUrl,
    removeParam,
    removeParams,
    searchParams,
    orderFromUrl,
    updateParams,
    filterFromUrl,
    perPageFromUrl,
    clearAllParams,
    tableTypeFromUrl,
  };
}
