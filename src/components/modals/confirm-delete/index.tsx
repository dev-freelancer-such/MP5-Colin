import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import { Modal } from '@/components/commons';
import Button from '@/components/commons/Button';
import Typography from '@/components/commons/Typography';
import icTrash from '@/assets/icons/common/ic-trash.svg';
import './confirm-delete.scss';

export interface ConfirmDeleteModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void | Promise<void>;
  label?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  confirmLoading?: boolean;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  visible,
  onCancel,
  onConfirm,
  label,
  description,
  cancelText,
  confirmText,
  confirmLoading = false,
}) => {
  const { t } = useTranslation('common');

  const handleConfirm = async () => {
    await onConfirm();
  };

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className="confirm-delete-modal"
      width={420}
      centered
      closable={false}
      maskClosable={false}
    >
      <div className="confirm-delete-content">
        <div className="confirm-delete-content__top">
          <div className="confirm-delete-icon">
            <ReactSVG src={icTrash} />
          </div>

          <div>
            <Typography
              variant="h4"
              className="confirm-delete-label"
              fontWeight="bold"
            >
              {label ? label : t('modal.confirm-delete.confirm-delete')}
            </Typography>

            <Typography
              variant="body1"
              className="confirm-delete-description"
              color="text-secondary"
            >
              {description
                ? description
                : t('modal.confirm-delete.are-you-sure')}
            </Typography>
          </div>
        </div>

        <div className="confirm-delete-actions">
          <Button variant="secondary" onClick={onCancel} fullWidth>
            {cancelText ? cancelText : t('modal.confirm-delete.cancel')}
          </Button>

          <Button
            variant="error"
            onClick={handleConfirm}
            loading={confirmLoading}
            fullWidth
          >
            {confirmText ? confirmText : t('modal.confirm-delete.confirm')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
