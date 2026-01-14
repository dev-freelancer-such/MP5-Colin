import { useState } from 'react';
import useBreadcrumb from '@/hooks/useBreadcrumb';
import {
  recentSignupUsersMockup,
  type UserSignup,
  userSignupStats,
} from '@/helpers/mockups/users';
import type { CommonTableColumn } from '@/components/commons/Table';
import CommonTable from '@/components/commons/Table';
import './users.scss';

function Users() {
  const [isLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useBreadcrumb({
    isLoading: false,
    header: 'Users',
    breadcrumb: [
      { key: '1', label: 'Home' },
      {
        key: '2',
        label: 'Users',
      },
    ],
  });

  const columns: CommonTableColumn<UserSignup>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (_: unknown, record: UserSignup) => (
        <div className="user-info-cell">
          <div className="user-label">Name</div>
          <div className="user-name">
            <img
              src={record.avatar}
              alt={record.name}
              className="user-avatar"
            />
            {record.name}
          </div>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (_: unknown, record: UserSignup) => (
        <div className="user-info-cell">
          <div className="user-label">Email</div>
          <div className="user-email">{record.email}</div>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (_: unknown, record: UserSignup) => (
        <div className="user-info-cell">
          <div className="user-label">Role</div>
          <div className="user-role">{record.role}</div>
        </div>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_: unknown, record: UserSignup) => (
        <div className="user-info-cell">
          <div className="user-label">Status</div>
          <div className={`user-status status-${record.status.toLowerCase()}`}>
            {record.status}
          </div>
        </div>
      ),
    },
    {
      title: '',
      key: 'actions',
      width: 60,
      render: () => (
        <div className="user-actions-cell">
          <button className="action-menu-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 6C10.5523 6 11 5.55228 11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5C9 5.55228 9.44772 6 10 6Z"
                fill="currentColor"
              />
              <path
                d="M10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z"
                fill="currentColor"
              />
              <path
                d="M10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="users-container">
      <div className="user-table-card">
        <div className="table-header-wrapper">
          <h2 className="table-title">Recent New Signup</h2>
          <div className="table-actions">
            <button className="action-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 9V13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 10.5V2M8 10.5L5.5 8M8 10.5L10.5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Import
            </button>
            <button className="action-btn primary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 7V2.5C14 2.22386 13.7761 2 13.5 2H2.5C2.22386 2 2 2.22386 2 2.5V7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 5.5V14M8 5.5L5.5 8M8 5.5L10.5 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Export
            </button>
          </div>
        </div>

        <div className="table-stats">
          <span className="stats-highlight">
            {userSignupStats.activeUsers}k
          </span>{' '}
          Active users out of{' '}
          <span className="stats-highlight">{userSignupStats.totalUsers}k</span>
        </div>

        <CommonTable<UserSignup>
          columns={columns}
          dataSource={recentSignupUsersMockup}
          isLoading={isLoading}
          rowKey="id"
          bordered={false}
          pagination={{
            current: currentPage,
            pageSize: pageSize,
            total: recentSignupUsersMockup.length,
            onChange: (page) => setCurrentPage(page),
            showSizeChanger: false,
            showTotal: (total, range) => (
              <span className="table-footer-info">
                Showing {range[0]} of {total} Results
              </span>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default Users;
