import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatchAction, useSelect } from '@/hooks';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import { setIsLoadingAction } from '@/store/slices/globalSlice';
import { getTrafficColumns } from '@/constants/traffic-table.constant.tsx';
import {
  getTotalCardsTrafficMockup,
  trafficMockup,
} from '@/helpers/mockups/traffic';
import CommonTable from '@/components/commons/Table';
import TotalCard from '@/components/total-card';
import './traffic.scss';

function Traffic() {
  const { isLoading } = useSelect((state) => state?.global);
  const dispatch = useDispatchAction();
  const { t } = useTranslation('traffic');

  useEffect(() => {
    dispatch(setIsLoadingAction(true));

    const timer = setTimeout(() => {
      dispatch(setIsLoadingAction(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  useBreadcrumb({
    isLoading: false,
    header: t('traffic_management'),
    breadcrumb: [
      { key: '1', label: t('home') },
      {
        key: '2',
        label: t('traffic'),
      },
    ],
  });

  return (
    <div className="traffic-page">
      <div className="traffic-page__cards">
        {getTotalCardsTrafficMockup(t).map((data) => (
          <TotalCard key={data.id} isLoading={isLoading} inforCard={data} />
        ))}
      </div>

      <div className="table-container">
        <CommonTable
          columns={getTrafficColumns(t)}
          dataSource={trafficMockup}
          rowKey="id"
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} traffic sources`,
            pageSizeOptions: ['10', '20', '50', '100'],
          }}
          scroll={{ x: 2200, y: 500 }}
          className="traffic-table"
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Traffic;
