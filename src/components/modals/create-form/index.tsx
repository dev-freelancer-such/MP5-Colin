import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Form, Row } from 'antd';
import { isEmpty } from 'lodash';
import { renderFormField } from '@/constants/commons/table.constant';
import type { FormFieldInterface } from '@/models/common/table.model';
import { Modal } from '@/components/commons';
import Button from '@/components/commons/Button';
import Typography from '@/components/commons/Typography';
import './create-form.scss';

export type FormFieldValue = string | number | boolean | null | undefined;

export interface CreateFormModalProps {
  visible: boolean;
  onCancel: () => void;
  onSubmit: (formData: Record<string, FormFieldValue>) => void | Promise<void>;
  label?: string;
  description?: string;
  cancelText?: string;
  submitText?: string;
  submitLoading?: boolean;
  formFields: FormFieldInterface[];
  width?: number;
}

const CreateFormModal: React.FC<CreateFormModalProps> = ({
  visible,
  onCancel,
  label,
  description,
  cancelText,
  submitText,
  submitLoading = false,
  formFields,
  width = 700,
}) => {
  const { t } = useTranslation('common');
  const [form] = Form.useForm();

  const onFinish = async () => {};

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
            {label || t('modal.create-form.title')}
          </Typography>

          {description && (
            <Typography
              variant="body2"
              className="create-form-description"
              color="text-secondary"
            >
              {description}
            </Typography>
          )}
        </div>

        <div className="create-form-body">
          {/* {formFields.map((field) => (
            <div key={field.name} className="create-form-field">
              <div className="create-form-field__label">
                <Typography variant="body2" fontWeight="medium">
                  {field.label}
                  {field.required && <span className="required-mark">*</span>}
                </Typography>
              </div>

              <div className="create-form-field__input">
                {renderFormField(field)}
              </div>

              {errors[field.name] && (
                <Typography
                  variant="caption"
                  className="create-form-field__error"
                  color="error"
                >
                  {errors[field.name]}
                </Typography>
              )}
            </div>
          ))} */}

          {!isEmpty(formFields) && (
            <Form
              form={form}
              name="signup"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              requiredMark={false}
            >
              {formFields?.map((field: FormFieldInterface) => (
                <Row key={field?.nameField} gutter={[16, 16]}>
                  <Col>
                    <Form.Item
                      name={field?.nameField}
                      label={field?.label}
                      rules={field?.rules}
                    >
                      {renderFormField(field)}
                    </Form.Item>
                  </Col>
                </Row>
              ))}
            </Form>
          )}
        </div>
        <div className="create-form-actions">
          <Button variant="secondary" onClick={onCancel} fullWidth>
            {cancelText || t('modal.create-form.cancel')}
          </Button>

          <Button
            variant="primary"
            onClick={() => form.submit()}
            loading={submitLoading}
            fullWidth
          >
            {submitText || t('modal.create-form.submit')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateFormModal;
