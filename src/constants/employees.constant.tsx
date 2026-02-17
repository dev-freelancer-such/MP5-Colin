import { Tag } from 'antd';

import type { TFunction } from 'i18next';

import type { EmployeeInterface } from '@/models/employees.model';

import { Image, Switch, Typography } from '@/components/commons';
import type { CommonTableColumn } from '@/components/commons/Table';

const renderStatusEmployee = (status: string, t: TFunction) => {
  switch (status) {
    case 'working':
      return <Tag color="#10b981">{t(status)}</Tag>;
    case 'probation':
      return <Tag color="#3b82f6">{t(status)}</Tag>;
    case 'resigned':
      return <Tag color="#6b7280">{t(status)}</Tag>;
    case 'terminated':
      return <Tag color="#ef4444">{t(status)}</Tag>;
    case 'on_leave':
      return <Tag color="#f59e0b">{t(status)}</Tag>;
    default:
      return <Tag color="#6b7280">{t(status)}</Tag>;
  }
};

export const getPublisherColumns = (
  t: TFunction
): CommonTableColumn<EmployeeInterface>[] => [
  {
    title: t('status'),
    dataIndex: 'status',
    key: 'status',
    width: 120,
    fixed: 'left',
    render: (_: unknown, record: EmployeeInterface) => (
      <Switch
        size="small"
        checked={record?.is_active}
        yesLabel="ON"
        noLabel="OFF"
      />
    ),
  },
  {
    title: t('avatar'),
    dataIndex: 'avatar',
    key: 'avatar',
    width: 200,
    fixed: 'left',
    render: (_: unknown, record: EmployeeInterface) => (
      <div className="avatar-column">
        <Image
          src={record?.avatar}
          alt={record?.nick_name}
          className="user-avatar"
          rounded
          preview
          width={32}
          height={32}
        />
        <Typography tooltip variant="body2" truncate={1}>
          {record?.nick_name || '--/--'}
        </Typography>
      </div>
    ),
  },
  {
    title: t('status-working'),
    dataIndex: 'status',
    key: 'status',
    width: 180,
    align: 'center',
    render: (_: unknown, record: EmployeeInterface) =>
      renderStatusEmployee(record?.status, t),
  },
  {
    title: t('company'),
    dataIndex: 'company',
    key: 'company',
    width: 150,
    align: 'center',

    render: (_: unknown, record: EmployeeInterface) => (
      <Typography truncate={1} tooltip>
        {record?.company_name || '--/--'}
      </Typography>
    ),
  },
  {
    title: t('department'),
    dataIndex: 'department',
    key: 'department',
    width: 150,
    align: 'center',

    render: (_: unknown, record: EmployeeInterface) => (
      <Typography truncate={1} tooltip>
        {record?.department_name || '--/--'}
      </Typography>
    ),
  },
  {
    title: t('team'),
    dataIndex: 'team',
    key: 'team',
    width: 150,
    align: 'center',

    render: (_: unknown, record: EmployeeInterface) => (
      <Typography truncate={1} tooltip>
        {record?.team_name || '--/--'}
      </Typography>
    ),
  },
  {
    title: t('position'),
    dataIndex: 'position',
    key: 'position',
    width: 150,
    align: 'center',

    render: (_: unknown, record: EmployeeInterface) => (
      <Tag>
        <Typography truncate={1} tooltip>
          {record?.position_name || '--/--'}
        </Typography>
      </Tag>
    ),
  },
  {
    title: t('start_date'),
    dataIndex: 'start_date',
    key: 'start_date',
    width: 150,
    align: 'center',

    render: (_: unknown, record: EmployeeInterface) => (
      <Typography truncate={1} tooltip>
        {record?.start_date || '--/--'}
      </Typography>
    ),
  },
  {
    title: t('end_date'),
    dataIndex: 'end_date',
    key: 'end_date',
    width: 150,
    align: 'center',

    render: (_: unknown, record: EmployeeInterface) => (
      <Typography truncate={1} tooltip>
        {record?.end_date || '--/--'}
      </Typography>
    ),
  },
];
