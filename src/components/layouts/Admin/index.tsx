import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { useResponsive } from '@/hooks';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Drawer, Dropdown, Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { menuOptions, userOptions } from '@/constants/layout.constant';
import { DropdownProfileEnums } from '@/helpers/enums/layout.enum';
import constants from '@/settings/constants';
import webLocalStorage from '@/utils/webLocalStorage';
import { SwitchLang } from '@/components/commons';
import HeaderBreadcrumb from '@/components/commons/HeaderBreadcrumb';
import { Image } from '@/components/commons/Image/image';
import { ThemeSwitcher } from '@/components/commons/SwitchTheme';
import useToast from '@/components/commons/Toast';
import Typography from '@/components/commons/Typography';
import { AUTH_ROUTER } from '@/routes/constants';
import icBell from '@/assets/icons/common/ic-bell.svg';
import icCollapse from '@/assets/icons/common/ic-collapse.svg';
import icLogo from '@/assets/icons/common/ic-logo.svg';
import './admin-layout.scss';

const { Header, Sider } = Layout;

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation('layout');
  const toast = useToast();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [manualCollapse, setManualCollapse] = useState<boolean>(false);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { isBelowBreakpoint } = useResponsive({
    breakpoint: 991,
    onBreakpoint: (isBelow) => {
      if (isBelow) {
        setCollapsed(true);
      } else if (!manualCollapse) {
        setCollapsed(false);
      }
    },
  });

  const { isBelowBreakpoint: isMobile } = useResponsive({
    breakpoint: 768,
    onBreakpoint: (isBelow) => {
      if (!isBelow) {
        setDrawerVisible(false);
      }
    },
  });

  const handleToggleCollapse = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    if (newCollapsed && !isBelowBreakpoint) {
      setManualCollapse(true);
    } else {
      setManualCollapse(false);
    }
  };

  const handleToggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    navigate(e?.key);
    if (isMobile) {
      setDrawerVisible(false);
    }
  };

  function handleDropDownProfile(params: string) {
    if (params === DropdownProfileEnums?.LOGOUT) {
      webLocalStorage.remove(constants?.IS_AUTH);
      navigate(AUTH_ROUTER?.LOGIN);
      toast.success({
        message: t('login-success'),
        description: t('login-success-desc'),
      });
    }
  }

  return (
    <Layout className="admin-layout">
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="admin-layout__sider"
          width={250}
          collapsedWidth={80}
          theme="light"
        >
          <div className="admin-layout__logo-container">
            {!collapsed ? (
              <div>
                <Image
                  src={icLogo}
                  alt="logo"
                  width={50}
                  height={50}
                  className="admin-layout__logo"
                />
              </div>
            ) : (
              <div>
                <Image
                  src={icLogo}
                  alt="logo"
                  className="admin-layout__logo admin-layout__logo--collapsed"
                />
              </div>
            )}
          </div>

          {/* TODO */}
          {/* <Typography className="admin-layout__menu-title" fontWeight="bold">
            {t('navigation')}
          </Typography> */}

          <Menu
            theme="light"
            mode="inline"
            selectedKeys={[location.pathname]}
            defaultSelectedKeys={[location.pathname]}
            items={menuOptions(t)}
            onClick={handleMenuClick}
            className="admin-layout__menu"
          />
        </Sider>
      )}

      <Drawer
        placement="left"
        onClose={handleCloseDrawer}
        open={drawerVisible}
        className="admin-layout__drawer"
        width={280}
        closeIcon={false}
        styles={{
          body: { padding: 0 },
        }}
        maskClosable={true}
      >
        <div className="admin-layout__drawer-header">
          <div className="admin-layout__logo-container">
            <Image
              src={icLogo}
              alt="logo"
              width={50}
              height={50}
              className="admin-layout__logo"
            />
          </div>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={handleCloseDrawer}
            className="admin-layout__drawer-close-btn"
          />
        </div>

        {/* <Typography className="admin-layout__menu-title" fontWeight="bold">
          {t('navigation')}
        </Typography> */}

        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={[location.pathname]}
          items={menuOptions(t)}
          onClick={handleMenuClick}
          className="admin-layout__menu"
        />
      </Drawer>

      <Layout
        className={`admin-layout__content ${
          isMobile
            ? 'admin-layout__content--mobile'
            : collapsed
              ? 'admin-layout__content--collapsed'
              : 'admin-layout__content--expanded'
        }`}
      >
        <Header className="admin-layout__header">
          <div className="admin-layout__header-left">
            {isMobile ? (
              <Button
                type="text"
                icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
                onClick={handleToggleDrawer}
                className="admin-layout__menu-btn"
              />
            ) : (
              !isBelowBreakpoint && (
                <Button
                  type="text"
                  icon={
                    <ReactSVG
                      src={icCollapse}
                      className={`collapse-icon ${collapsed ? 'collapse-icon--rotated' : 'collapse-icon--normal'}`}
                    />
                  }
                  onClick={handleToggleCollapse}
                  className="admin-layout__collapse-btn"
                />
              )
            )}
          </div>

          <div className="admin-layout__header-right">
            <SwitchLang />
            <ThemeSwitcher />

            <Badge
              count={5}
              offset={[-5, 5]}
              className="bell-notification admin-layout__bell"
            >
              <Image src={icBell} alt="bell" width={23} height={23} />
            </Badge>

            <Dropdown
              menu={{ items: userOptions(t, handleDropDownProfile) }}
              placement="bottomRight"
            >
              <div className="admin-layout__user-dropdown">
                <Avatar
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                  size="default"
                />
                <div className="admin-layout__user-info">
                  <Typography
                    className="admin-layout__user-name"
                    variant="body2"
                    fontWeight="semibold"
                  >
                    Usman G. Nurman
                  </Typography>
                  <Typography
                    className="admin-layout__user-role"
                    variant="body2"
                  >
                    Premium
                  </Typography>
                </div>
              </div>
            </Dropdown>
          </div>
        </Header>

        <HeaderBreadcrumb />

        <div className="admin-layout__body">{children}</div>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
