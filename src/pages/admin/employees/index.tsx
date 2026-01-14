import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatchAction, useSelect } from '@/hooks';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import { setIsLoadingAction } from '@/store/slices/globalSlice';
import CommonTable from '@/components/commons/Table';
import { employeesSchema } from '@/pages/admin/employees/employees.schema';
import './publisher.scss';

function Publishers() {
  const { isLoading } = useSelect((state) => state?.global);
  const dispatch = useDispatchAction();
  const { t } = useTranslation('publisher');

  useEffect(() => {
    dispatch(setIsLoadingAction(true));

    const timer = setTimeout(() => {
      dispatch(setIsLoadingAction(false));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  useBreadcrumb({
    isLoading: false,
    header: t('publisher_management'),
    breadcrumb: [
      { key: '1', label: t('home') },
      {
        key: '2',
        label: t('publishers'),
      },
    ],
  });

  return (
    <div className="publishers-page">
      {/* <div className="publishers-page__cards">
        {getTotalCardsPublisherMockup(t).map((data) => (
          <TotalCard key={data.id} isLoading={isLoading} inforCard={data} />
        ))}
      </div> */}

      <CommonTable
        rowKey="id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} publishers`,
          pageSizeOptions: ['10', '20', '50', '100'],
        }}
        scroll={{ x: 2800, y: 500 }}
        className="publishers-table"
        isLoading={isLoading}
        schema={employeesSchema(t)}
      />
    </div>
  );
}

export default Publishers;
