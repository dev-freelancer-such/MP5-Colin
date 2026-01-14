import { useEffect } from 'react';
import { useDispatchAction } from '@/hooks';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import { setIsLoadingAction } from '@/store/slices/globalSlice';
import { ComingSoon } from '@/components/commons';

function ChildrenFirst() {
  const dispatch = useDispatchAction();

  useEffect(() => {
    dispatch(setIsLoadingAction(true));

    const timer = setTimeout(() => {
      dispatch(setIsLoadingAction(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  useBreadcrumb({
    isLoading: true,
    header: 'Demo Children First',
    breadcrumb: [
      { key: '1', label: 'Home' },
      {
        key: '2',
        label: 'Demo Children First',
      },
    ],
  });

  return <ComingSoon />;
}

export default ChildrenFirst;
