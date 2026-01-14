import { useEffect, useState } from 'react';
import type { BreadcrumbPropsInterface } from '@/models/common/common.model';

interface UseBreadcrumbReturn extends BreadcrumbPropsInterface {
  isLoading: boolean;
}

let breadcrumbData: BreadcrumbPropsInterface = {
  header: '',
  breadcrumb: [],
};

let isDataLoaded = false;

const listeners = new Set<(data: BreadcrumbPropsInterface) => void>();

const getData = (): BreadcrumbPropsInterface => {
  return breadcrumbData;
};

const setData = (newData: BreadcrumbPropsInterface): void => {
  breadcrumbData = { ...newData };
  isDataLoaded = true;
  notifyListeners();
};

const subscribe = (
  listener: (data: BreadcrumbPropsInterface) => void
): (() => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

const notifyListeners = (): void => {
  listeners.forEach((listener) => listener(breadcrumbData));
};

function useBreadcrumb(props?: BreadcrumbPropsInterface): UseBreadcrumbReturn {
  const [currentData, setCurrentData] =
    useState<BreadcrumbPropsInterface>(getData());
  const [isLoading, setIsLoading] = useState<boolean>(!isDataLoaded);

  const hasProps =
    props && (props.header !== undefined || props.breadcrumb !== undefined);

  useEffect(() => {
    if (hasProps && props) {
      setData(props);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = subscribe((newData) => {
      setCurrentData(newData);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return {
    ...currentData,
    isLoading,
  };
}

export default useBreadcrumb;
