import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatchAction } from '@/hooks';
import { MailOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { setIsLoadingAction } from '@/store/slices/globalSlice';
import ButtonCommon from '@/components/commons/Button';
import InputCommon from '@/components/commons/Input';
import useToast from '@/components/commons/Toast';
import Typography from '@/components/commons/Typography';
import { AUTH_ROUTER } from '@/routes/constants';
import './forgot-password.scss';

interface ForgotPasswordFormInterface {
  email: string;
}

export default function ForgotPassword() {
  const { t } = useTranslation('auth');
  const dispatch = useDispatchAction();
  const toast = useToast();

  const [form] = Form.useForm();

  const onFinish = (values: ForgotPasswordFormInterface) => {
    dispatch(setIsLoadingAction(true));

    setTimeout(() => {
      dispatch(setIsLoadingAction(false));
      toast.success({
        message: t('reset-link-sent'),
        description: t('reset-link-sent-desc'),
      });
      console.log('Forgot password email:', values.email);
    }, 2000);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-page__header">
        <Typography
          variant="h4"
          fontWeight="bold"
          className="forgot-password-page__header-title"
        >
          {t('forgot-password-title')}
        </Typography>
        <Typography
          variant="body2"
          className="forgot-password-page__header-desc"
        >
          {t('forgot-password-desc')}
        </Typography>
      </div>

      <Form
        form={form}
        name="forgotPassword"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label={
            <span className="forgot-password-page__form-label">
              {t('email')}
            </span>
          }
          rules={[
            {
              required: true,
              message: t('email-required'),
            },
            {
              type: 'email',
              message: t('email-invalid'),
            },
          ]}
        >
          <InputCommon
            prefix={
              <MailOutlined className="forgot-password-page__form-icon" />
            }
            placeholder={t('email-placeholder')}
            size="large"
            className="forgot-password-page__form-input"
          />
        </Form.Item>

        <Form.Item className="forgot-password-page__form-submit">
          <ButtonCommon htmlType="submit">{t('send-reset-link')}</ButtonCommon>
        </Form.Item>

        <div className="forgot-password-page__footer">
          <Link to={AUTH_ROUTER.LOGIN}>
            <Typography
              component="span"
              className="forgot-password-page__footer-link"
              variant="body2"
            >
              {t('back-to-login')}
            </Typography>
          </Link>
        </div>
      </Form>
    </div>
  );
}
