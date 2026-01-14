import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatchAction } from '@/hooks';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form } from 'antd';
import { setIsLoadingAction } from '@/store/slices/globalSlice';
import { userMockup } from '@/helpers/mockups/auth';
import constants from '@/settings/constants';
import type { AuthValuesFormInterface } from '@/models/auth.model';
import webLocalStorage from '@/utils/webLocalStorage';
import ButtonCommon from '@/components/commons/Button';
import InputCommon, { InputPassword } from '@/components/commons/Input';
import useToast from '@/components/commons/Toast';
import Typography from '@/components/commons/Typography';
import { ADMIN_ROUTER, AUTH_ROUTER } from '@/routes/constants';
import './sign-in.scss';

export default function Login() {
  const { t } = useTranslation('auth');
  const dispatch = useDispatchAction();
  const navigate = useNavigate();

  const toast = useToast();

  const [form] = Form.useForm();

  const onFinish = (values: AuthValuesFormInterface) => {
    dispatch(setIsLoadingAction(true));

    setTimeout(() => {
      if (
        values.userName === userMockup.userName &&
        values.password === userMockup.password
      ) {
        dispatch(setIsLoadingAction(false));
        webLocalStorage.set(constants?.IS_AUTH, 'true');

        toast.success({
          message: t('login-success'),
          description: t('login-success-desc'),
        });

        navigate(ADMIN_ROUTER?.DASHBOARD);
      } else {
        dispatch(setIsLoadingAction(false));
        toast.error({
          message: t('login-failed'),
          description: t('login-failed-desc'),
        });
      }
    }, 2000);
  };

  return (
    <div className="sign-in-page">
      <div className="sign-in-page__header">
        <Typography
          variant="h4"
          fontWeight="bold"
          className="sign-in-page__header-title"
        >
          {t('sign-in')}
        </Typography>
      </div>

      <Form
        form={form}
        name="login"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        requiredMark={false}
      >
        <Form.Item
          name="userName"
          label={
            <span className="sign-in-page__form-label">{t('username')}</span>
          }
          rules={[
            {
              required: true,
              message: t('username-required'),
            },
          ]}
        >
          <InputCommon
            prefix={<UserOutlined className="sign-in-page__form-icon" />}
            placeholder={t('username-placeholder')}
            size="large"
            className="sign-in-page__form-input"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={
            <span className="sign-in-page__form-label">{t('password')}</span>
          }
          rules={[
            {
              required: true,
              message: t('password-required'),
            },
          ]}
        >
          <InputPassword
            prefix={<LockOutlined className="sign-in-page__form-icon" />}
            placeholder={t('password-placeholder')}
            size="large"
            className="sign-in-page__form-input"
          />
        </Form.Item>

        <Form.Item>
          <div className="sign-in-page__remember-section">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="sign-in-page__remember-section-checkbox">
                <span>{t('remember-me')}</span>
              </Checkbox>
            </Form.Item>

            <Link to={AUTH_ROUTER.FORGOT_PASSWORD}>
              <Typography
                component="span"
                className="sign-in-page__remember-section-forgot-link"
                variant="body2"
                fontWeight="medium"
              >
                {t('forgot-password')}
              </Typography>
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <ButtonCommon htmlType="submit">{t('login-button')}</ButtonCommon>
        </Form.Item>

        <div className="sign-in-page__footer">
          <Typography
            variant="body2"
            className="sign-in-page__footer-text"
            component="span"
          >
            {t('no-account')}{' '}
          </Typography>
          <Link to={AUTH_ROUTER.REGISTER}>
            <Typography
              component="span"
              className="sign-in-page__footer-link"
              variant="body2"
              fontWeight="medium"
            >
              {t('create-account')}
            </Typography>
          </Link>
        </div>
      </Form>
    </div>
  );
}
