import { Button, Col, Form, Row } from 'antd';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { t } from 'i18next';

import { renderFormField } from '@/constants/commons/table.constant';
import { changeDomainForm } from '@/constants/website.constant';

import type { FormFieldInterface } from '@/models/common/table.model';

import { useDispatchAction, useSelect } from '@/hooks';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import { setIsLoadingAction } from '@/store/slices/globalSlice';

import ButtonCommon from '@/components/commons/Button';
import CommonTable from '@/components/commons/Table';
import { employeesSchema } from '@/pages/admin/website/employees.schema';

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

  const updateSchema = {
    ...employeesSchema(t),
    columnsActions: {
      ...employeesSchema(t)?.columnsActions,
      createRecordModal: {
        ...employeesSchema(t)?.columnsActions?.createRecordModal,
        renderForm: (
          <Form.List name="domains">
            {(fields, { add, remove }) => (
              <div className="website-form-wrap">
                <Form.Item className="website-form-wrap__add-btn">
                  <ButtonCommon
                    variant="primary"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Thêm domain
                  </ButtonCommon>
                </Form.Item>
                <div className="website-form-wrap__fields">
                  {fields.map((field, index) => (
                    <div key={field.key}>
                      <Row gutter={8} align="middle">
                        {changeDomainForm?.map(
                          (formField: FormFieldInterface) => (
                            <Col
                              xs={24}
                              sm={12}
                              xl={6}
                              xxl={3}
                              key={formField?.nameField}
                            >
                              <Form.Item
                                {...field}
                                name={[field.name, formField?.nameField]}
                                label={formField?.label}
                                rules={formField?.rules}
                                required={formField?.isRequired}
                              >
                                {renderFormField(formField)}
                              </Form.Item>
                            </Col>
                          )
                        )}
                        <Col xs={24} sm={12} md={4} lg={2}>
                          <Button
                            type="text"
                            danger
                            icon={<MinusCircleOutlined />}
                            onClick={() => remove(field.name)}
                          >
                            Xóa
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </Form.List>
        ),
      },
    },
  };

  return (
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
      isLoading={isLoading}
      schema={updateSchema}
    />
  );
}

export default Publishers;
