import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useDispatchAction } from '@/hooks';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { setIsLoadingAction } from '@/store/slices/globalSlice';
import ButtonCommon from '@/components/commons/Button';
import InputCommon, { InputPassword } from '@/components/commons/Input';
import useToast from '@/components/commons/Toast';
import Typography from '@/components/commons/Typography';
import { AUTH_ROUTER } from '@/routes/constants';
import './sign-up.scss';

interface SignUpFormInterface {
  fullName: string;
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const { t } = useTranslation('auth');
  const dispatch = useDispatchAction();
  const toast = useToast();

  const [form] = Form.useForm();

  const onFinish = (values: SignUpFormInterface) => {
    dispatch(setIsLoadingAction(true));

    setTimeout(() => {
      dispatch(setIsLoadingAction(false));
      toast.success({
        message: t('register-success'),
        description: t('register-success-desc'),
      });
      // Navigate to login or dashboard
      console.log('Sign up values:', values);
    }, 2000);
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-page__header">
        <Typography
          variant="h4"
          fontWeight="bold"
          className="sign-up-page__header-title"
        >
          {t('sign-up')}
        </Typography>
      </div>

      <Form
        form={form}
        name="signup"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label={t('email')}
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
            prefix={<MailOutlined className="sign-up-page__form-icon" />}
            placeholder={t('email-placeholder')}
            size="large"
            className="sign-up-page__form-input"
          />
        </Form.Item>

        <Form.Item
          name="userName"
          label={t('username')}
          rules={[
            {
              required: true,
              message: t('username-required'),
            },
          ]}
        >
          <InputCommon
            prefix={<UserOutlined className="sign-up-page__form-icon" />}
            placeholder={t('username-placeholder')}
            size="large"
            className="sign-up-page__form-input"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={
            <span className="sign-up-page__form-label">{t('password')}</span>
          }
          rules={[
            {
              required: true,
              message: t('password-required'),
            },
            {
              min: 6,
              message: t('password-min-length'),
            },
          ]}
        >
          <InputPassword
            prefix={<LockOutlined className="sign-up-page__form-icon" />}
            placeholder={t('password-placeholder')}
            size="large"
            className="sign-up-page__form-input"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label={
            <span className="sign-up-page__form-label">
              {t('confirm-password')}
            </span>
          }
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: t('confirm-password-required'),
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('password-mismatch')));
              },
            }),
          ]}
        >
          <InputPassword
            prefix={<LockOutlined className="sign-up-page__form-icon" />}
            placeholder={t('confirm-password-placeholder')}
            size="large"
            className="sign-up-page__form-input"
          />
        </Form.Item>

        <Form.Item className="sign-up-page__form-submit">
          <ButtonCommon htmlType="submit">{t('register-button')}</ButtonCommon>
        </Form.Item>

        <div className="sign-up-page__footer">
          <Typography
            variant="body2"
            className="sign-up-page__footer-text"
            component="span"
          >
            {t('already-have-account')}{' '}
          </Typography>
          <Link to={AUTH_ROUTER.LOGIN}>
            <Typography
              component="span"
              className="sign-up-page__footer-link"
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
