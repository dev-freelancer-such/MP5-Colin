import { ReactSVG } from 'react-svg';

import type { MenuProps } from 'antd';

import { DropdownProfileEnums } from '@/helpers/enums/layout.enum';

import { ADMIN_ROUTER } from '@/routes/constants';

import Typography from '@/components/commons/Typography';

import icCalendar from '@/assets/icons/common/ic-calendar.svg';
import icDashboard from '@/assets/icons/common/ic-dashboard.svg';
import icInvoice from '@/assets/icons/common/ic-invoice.svg';

const userOptions = (
  t: (key: string) => string,
  handleDropDownProfile: (params: string) => void
): MenuProps['items'] => {
  return [
    {
      key: 'profile',
      label: (
        <Typography
          variant="subtitle2"
          onClick={() => handleDropDownProfile(DropdownProfileEnums?.PROFILE)}
        >
          {t('menu.profile')}
        </Typography>
      ),
    },
    {
      key: 'settings',
      label: (
        <Typography
          variant="subtitle2"
          onClick={() => handleDropDownProfile(DropdownProfileEnums?.SETTINGS)}
        >
          {t('menu.settings')}
        </Typography>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      label: (
        <Typography
          variant="subtitle2"
          onClick={() => handleDropDownProfile(DropdownProfileEnums?.LOGOUT)}
        >
          {t('menu.logout')}
        </Typography>
      ),
      danger: true,
    },
  ];
};

const menuOptions = (t: (key: string) => string): MenuProps['items'] => {
  return [
    {
      key: ADMIN_ROUTER?.DASHBOARD,
      label: (
        <Typography variant="subtitle2" className="break-word">
          {t('menu.dashboard')}
        </Typography>
      ),
      icon: <ReactSVG src={icDashboard} width={24} height={24} fontSize={24} />,
    },
    {
      key: ADMIN_ROUTER?.WEBSITE,
      label: (
        <Typography variant="subtitle2" className="break-word">
          {t('menu.website')}
        </Typography>
      ),
      icon: <ReactSVG src={icDashboard} width={24} height={24} fontSize={24} />,
    },
    {
      key: 'publisher-management',
      label: (
        <Typography variant="subtitle2" className="break-word">
          {t('menu.publisher_management')}
        </Typography>
      ),
      icon: <ReactSVG src={icInvoice} width={24} height={24} fontSize={24} />,
      children: [
        {
          key: ADMIN_ROUTER?.TRAFFIC,
          label: (
            <Typography variant="subtitle2" className="break-word">
              {t('menu.traffic')}
            </Typography>
          ),
        },
      ],
    },
    {
      key: 'layouts',
      label: (
        <Typography variant="subtitle2" className="break-word">
          {t('layouts')}
        </Typography>
      ),
      icon: <ReactSVG src={icCalendar} width={24} height={24} fontSize={24} />,
      children: [
        {
          key: 'layouts-multi-level',
          label: (
            <Typography variant="subtitle2" className="break-word">
              {t('multi_level')}
            </Typography>
          ),
          icon: (
            <ReactSVG src={icCalendar} width={24} height={24} fontSize={24} />
          ),
          children: [
            {
              key: ADMIN_ROUTER?.CHILDREN_FIRST,
              label: (
                <Typography variant="subtitle2" className="break-word">
                  {t('level_2_1')}
                </Typography>
              ),
              icon: (
                <ReactSVG
                  src={icCalendar}
                  fontSize={24}
                  width={24}
                  height={24}
                />
              ),
            },
            {
              key: ADMIN_ROUTER?.CHILDREN_SECOND,
              label: (
                <Typography variant="subtitle2" className="break-word">
                  {t('level_2_2')}
                </Typography>
              ),
              icon: (
                <ReactSVG
                  src={icCalendar}
                  fontSize={24}
                  width={24}
                  height={24}
                />
              ),
            },
          ],
        },
      ],
    },
  ];
};

export { userOptions, menuOptions };
