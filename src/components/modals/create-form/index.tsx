import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { Col, Form, Row, Space } from 'antd';
import { isEmpty } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { renderFormField } from '@/constants/commons/table.constant';

import type {
  FormFieldInterface,
  RecordModalInterface,
} from '@/models/common/table.model';

import { Modal } from '@/components/commons';
import Button from '@/components/commons/Button';
import Typography from '@/components/commons/Typography';

import './create-form.scss';

export type FormFieldValue = string | number | boolean | null | undefined;

export interface CreateFormModalProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (formData: Record<string, FormFieldValue>) => void | Promise<void>;
  submitLoading?: boolean;
  modalActionProps?: RecordModalInterface;
  width?: number | string;
}

const CreateFormModal: React.FC<CreateFormModalProps> = ({
  visible,
  onCancel,
  onSubmit,
  submitLoading = false,
  modalActionProps,
  width,
}) => {
  const { t } = useTranslation('common');
  const [form] = Form.useForm();

  const {
    responsiveCol,
    colsPerRow,
    label,
    description,
    formFields = [],
    cancelText,
    submitText,
    renderForm,
    isDynamicList = false,
    dynamicListName = 'items',
    addButtonText,
  } = modalActionProps || {};

  const onFinish = async (values: Record<string, FormFieldValue>) => {
    console.log('Form values:', values);
    await onSubmit(values);
  };

  const defaultResponsiveCol = {
    xs: responsiveCol?.xs ?? 24,
    sm: responsiveCol?.sm ?? 12,
    md: responsiveCol?.md ?? 8,
    lg:
      responsiveCol?.lg ??
      (colsPerRow ? 24 / colsPerRow : 24 / formFields.length),
    xl: responsiveCol?.xl,
  };

  console.log('modalActionProps', modalActionProps);

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className="create-form-modal"
      width={width}
      centered
      closable={true}
      maskClosable={false}
    >
      <div className="create-form-content">
        <div className="create-form-header">
          <Typography
            variant="h4"
            className="create-form-title"
            fontWeight="bold"
          >
            {label || ''}
          </Typography>

          {description && (
            <Typography
              variant="body2"
              className="create-form-description"
              color="text-secondary"
            >
              {description || ''}
            </Typography>
          )}
        </div>

        <div className="create-form-body">
          {(!isEmpty(formFields) || renderForm) && (
            <Form
              form={form}
              name="signup"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              requiredMark={false}
              initialValues={{ [dynamicListName]: [{}] }}
            >
              {isDynamicList ? (
                <Form.List name={dynamicListName}>
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map((field, index) => (
                        <div
                          key={field.key}
                          style={{
                            marginBottom: 16,
                            padding: 16,
                            border: '1px solid #d9d9d9',
                            borderRadius: 8,
                            position: 'relative',
                          }}
                        >
                          <Typography
                            variant="body1"
                            fontWeight="semibold"
                            style={{ marginBottom: 12 }}
                          >
                            {label} #{index + 1}
                          </Typography>

                          {renderForm ? (
                            <>{renderForm}</>
                          ) : (
                            <Row gutter={[8, 8]}>
                              {formFields?.map(
                                (formField: FormFieldInterface) => (
                                  <Col
                                    xs={defaultResponsiveCol.xs}
                                    sm={defaultResponsiveCol.sm}
                                    md={defaultResponsiveCol.md}
                                    lg={defaultResponsiveCol.lg}
                                    xl={defaultResponsiveCol.xl}
                                    key={formField?.nameField}
                                  >
                                    <Form.Item
                                      name={[field.name, formField?.nameField]}
                                      label={formField?.label}
                                      rules={formField?.rules}
                                      required={formField?.isRequired}
                                    >
                                      {renderFormField(formField)}
                                    </Form.Item>
                                  </Col>
                                ),
                              )}
                            </Row>
                          )}

                          {fields.length > 1 && (
                            <MinusCircleOutlined
                              onClick={() => remove(field.name)}
                              style={{
                                position: 'absolute',
                                top: 12,
                                right: 12,
                                fontSize: 18,
                                color: '#ff4d4f',
                                cursor: 'pointer',
                              }}
                            />
                          )}
                        </div>
                      ))}

                      <Button
                        variant="secondary"
                        onClick={() => add()}
                        icon={<PlusOutlined />}
                        style={{ width: '100%', marginBottom: 16 }}
                      >
                        {addButtonText || 'Thêm mới'}
                      </Button>
                    </>
                  )}
                </Form.List>
              ) : renderForm ? (
                <>{renderForm}</>
              ) : (
                <Row gutter={[8, 8]}>
                  {formFields?.map((field: FormFieldInterface) => (
                    <Col
                      xs={defaultResponsiveCol.xs}
                      sm={defaultResponsiveCol.sm}
                      md={defaultResponsiveCol.md}
                      lg={defaultResponsiveCol.lg}
                      xl={defaultResponsiveCol.xl}
                      key={field?.nameField}
                    >
                      <Form.Item
                        name={field?.nameField}
                        label={field?.label}
                        rules={field?.rules}
                        required={field?.isRequired}
                      >
                        {renderFormField(field)}
                      </Form.Item>
                    </Col>
                  ))}
                </Row>
              )}
            </Form>
          )}
        </div>
        <div className="create-form-actions">
          <Button variant="secondary" onClick={onCancel} fullWidth>
            {cancelText || t('modal.cancel')}
          </Button>

          <Button
            variant="primary"
            onClick={() => form.submit()}
            loading={submitLoading}
            fullWidth
          >
            {submitText || t('modal.submit')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateFormModal;
