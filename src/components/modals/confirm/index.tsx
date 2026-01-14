import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import { Modal } from '@/components/commons';
import Button from '@/components/commons/Button';
import Typography from '@/components/commons/Typography';
import icApproved from '@/assets/icons/common/ic-approved.svg';
import './confirm.scss';

export interface ConfirmModalProps {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void | Promise<void>;
  label?: string;
  description?: string;
  cancelText?: string;
  confirmText?: string;
  confirmLoading?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
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
      className="confirm-modal"
      width={420}
      centered
      closable={false}
      maskClosable={false}
    >
      <div className="confirm-content">
        <div className="confirm-content__top">
          <div className="confirm-icon">
            <ReactSVG src={icApproved} />
          </div>

          <div>
            <Typography
              variant="h4"
              className="confirm-label"
              fontWeight="bold"
            >
              {label ? label : t('modal.confirm.confirm')}
            </Typography>

            <Typography
              variant="body1"
              className="confirm-description"
              color="text-secondary"
            >
              {description ? description : t('modal.confirm.are-you-sure')}
            </Typography>
          </div>
        </div>

        <div className="confirm-actions">
          <Button variant="secondary" onClick={onCancel} fullWidth>
            {cancelText ? cancelText : t('modal.confirm.cancel')}
          </Button>

          <Button
            variant="success"
            onClick={handleConfirm}
            loading={confirmLoading}
            fullWidth
          >
            {confirmText ? confirmText : t('modal.confirm.confirm')}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
