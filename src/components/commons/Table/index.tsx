import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import { Dropdown, Popover, Segmented, Skeleton, Table, Tooltip } from 'antd';
import type { MenuProps, TableProps } from 'antd';
import { isEmpty } from 'lodash';
import { useRouter } from '@/hooks/useRouter';
import {
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  defaultParamsTable,
  PAGE_KEY,
  PER_PAGE,
  perpageOptions,
  TABLE_TYPE_KEY,
} from '@/constants/common.constant';
import { ActionsTypeEnums, TableTypeEnums } from '@/helpers/enums/common.enum';
import type { ParamsInterface } from '@/models/common/common.model';
import type {
  CommonTableColumn,
  CommonTableProps,
  ExportInterface,
  OptionsInterface,
} from '@/models/common/table.model';
import { getRequest } from '@/services/requests';
import ConfirmModal from '@/components/modals/confirm';
import ConfirmDeleteModal from '@/components/modals/confirm-delete';
import CreateFormModal from '@/components/modals/create-form';
import icExport from '@/assets/icons/common/ic-export.svg';
import icFilter from '@/assets/icons/common/ic-filter.svg';
import icGrid from '@/assets/icons/common/ic-grid.svg';
import icImport from '@/assets/icons/common/ic-import.svg';
import icList from '@/assets/icons/common/ic-list.svg';
import icPlus from '@/assets/icons/common/ic-plus.svg';
import icTrash from '@/assets/icons/common/ic-trash.svg';
import icUpdate from '@/assets/icons/common/ic-update.svg';
import './table.scss';
import './table.scss';
import ButtonCommon from '../Button';
import { InputSearch } from '../Input';
import CommonPagination from '../Pagination';
import CommonSelect from '../Select';
import Typography from '../Typography';

function CommonTable<T extends Record<string, unknown>>({
  isLoading = false,
  rowKey = 'id',
  pagination = {
    pageSize: 10,
    showSizeChanger: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} của ${total} bản ghi`,
    pageSizeOptions: perpageOptions,
  },
  scroll = { y: 300, x: 800 },
  bordered = true,
  size = 'middle',
  className = '',
  emptyText = 'Không có dữ liệu',
  showHeader = true,
  sticky = false,
  onRow,
  rowSelection,
  expandable,
  summary,
  showSorterTooltip = true,
  placeholderProps,
  schema,
  ...restProps
}: CommonTableProps<T>) {
  const { t } = useTranslation('common');

  const [dataSource, setDataSource] = useState<unknown[]>([]);
  const [actionType, setActionType] = useState<ActionsTypeEnums | null>(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [params, setParams] = useState<ParamsInterface>(defaultParamsTable);
  const [recordSelected, setRecordSelected] = useState<unknown | null>(null);

  const { search, create, exports, btnImport, filters, status, btnTableType } =
    schema?.headerActions ?? {};

  const { deleteRecord, updateRecordModal } = schema?.columnsActions ?? {};

  const {
    updateParams,
    pageFromUrl,
    perPageFromUrl,
    navigate,
    tableTypeFromUrl,
  } = useRouter();

  const currentPage = pageFromUrl || DEFAULT_PAGE;
  const currentPageSize = perPageFromUrl || DEFAULT_PER_PAGE;

  const fetchDataApi = useCallback(async () => {
    const paramsForFetch = {
      ...schema?.fetchData?.params,
      [PAGE_KEY]: currentPage,
      [PER_PAGE]: currentPageSize,
    };

    const { data }: any = await getRequest(schema?.fetchData?.endpoint, {
      params: paramsForFetch,
    });

    console.log('data', data);

    if (!isEmpty(data?.data)) {
      setDataSource(data.data || []);
      setParams((prev) => ({
        ...prev,
        total: data.total || 0,
        page: data.page || DEFAULT_PAGE,
        limit: data.limit || DEFAULT_PER_PAGE,
      }));
    } else {
      setDataSource([]);
      setParams(defaultParamsTable);
    }
  }, [
    currentPage,
    currentPageSize,
    schema?.fetchData?.endpoint,
    schema?.fetchData?.params,
  ]);

  useEffect(() => {
    fetchDataApi();
  }, [fetchDataApi]);

  const handlePageChange = (page: number, pageSize?: number) => {
    updateParams({
      [PAGE_KEY]: page,
      [PER_PAGE]: pageSize || currentPageSize,
    });

    if (pagination && typeof pagination !== 'boolean' && pagination.onChange) {
      pagination.onChange(page, pageSize || currentPageSize);
    }
  };

  const handlePageSizeChange = (__: number, size: number) => {
    updateParams({
      [PAGE_KEY]: 1,
      [PER_PAGE]: size,
    });

    if (
      pagination &&
      typeof pagination !== 'boolean' &&
      pagination.onShowSizeChange
    ) {
      pagination.onShowSizeChange(1, size);
    }
  };

  const locale = {
    emptyText: (
      <div className="common-table-empty">
        <span>{emptyText}</span>
      </div>
    ),
  };

  function handleDeleteRecord(record: unknown) {
    setRecordSelected(record);
    setActionType(ActionsTypeEnums.DELETE);
  }

  function handleConfirmDeleteRecord() {
    // Handle later
  }

  function handleUpdateRecord(record: unknown) {
    setRecordSelected(record);
    setActionType(ActionsTypeEnums?.EDIT);
  }

  function handleConfirm() {
    //Handle later
  }

  const tableColumns = () => {
    let updatedColumns;

    if (!isEmpty(schema?.columnsActions)) {
      updatedColumns = [
        ...schema.columns,
        {
          title: t('table.column.actions'),
          key: 'action',
          width: 120,
          fixed: 'left',
          render: (_: unknown, record: unknown) => (
            <div className="columns-actions">
              {!isEmpty(deleteRecord) && (
                <Tooltip title={t('table.column.delete')}>
                  <ButtonCommon className="columns-actions__delete">
                    <ReactSVG
                      src={icTrash}
                      width={24}
                      height={24}
                      onClick={() => handleDeleteRecord(record)}
                    />
                  </ButtonCommon>
                </Tooltip>
              )}
              {!isEmpty(updateRecordModal) && (
                <Tooltip title={t('table.column.update')}>
                  <ButtonCommon className="columns-actions__update">
                    <ReactSVG
                      src={icUpdate}
                      width={24}
                      height={24}
                      onClick={() => handleUpdateRecord(record)}
                    />
                  </ButtonCommon>
                </Tooltip>
              )}
            </div>
          ),
        },
      ];
    }

    return isLoading
      ? schema?.columns.map((col) => ({
          ...col,
          render: () => (
            <Skeleton
              active
              title={false}
              paragraph={{
                rows: 1,
                width: '100%',
              }}
              className="table-skeleton"
            />
          ),
        }))
      : updatedColumns;
  };

  const tableData = isLoading
    ? Array.from(
        {
          length: pagination ? pagination.pageSize || 10 : 10,
        },
        (_, index) => ({
          key: `skeleton-${index}`,
        })
      )
    : dataSource;

  function handleCreate() {
    if (create?.href) {
      navigate(create.href);
    } else {
      setActionType(ActionsTypeEnums.CREATE);
    }
  }

  function handleChangeStatusColumn() {}

  function handleExport(exportItem: ExportInterface) {
    //Handle later
    console.log('Export info:', exportItem);
  }

  const exportMenuItems: MenuProps['items'] = exports?.items?.map(
    (exportItem, index) => ({
      key: `export-${index}`,
      label: exportItem.btnLabel || t('export'),
      onClick: () => handleExport(exportItem),
    })
  );

  function handleChangeStatus(value: string) {
    updateParams({ [`${status?.keyStatus}`]: value });
  }

  function handleChangeTableType(value: string) {
    updateParams({ [TABLE_TYPE_KEY]: value });
  }

  // Handle row selection
  const handleRowSelectionChange: TableProps<T>['rowSelection'] = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys, newSelectedRows, info) => {
      setSelectedRowKeys(newSelectedRowKeys);
      setSelectedRows(newSelectedRows);

      if (rowSelection && 'onChange' in rowSelection && rowSelection.onChange) {
        rowSelection.onChange(newSelectedRowKeys, newSelectedRows, info);
      }
    },
    ...(rowSelection || {}),
  };

  return (
    <div className={`common-table-wrapper ${className}`}>
      <div className="header-actions">
        <div className="header-actions__top">
          {!isEmpty(exports) && (
            <Dropdown menu={{ items: exportMenuItems }}>
              <ButtonCommon
                className="header-actions__top--create"
                variant="secondary"
              >
                <ReactSVG src={icExport} />
                {exports?.btnLabel || t('export')}
              </ButtonCommon>
            </Dropdown>
          )}

          {btnImport && (
            <ButtonCommon
              onClick={btnImport?.onImport || handleCreate}
              className="header-actions__top--create"
              variant="secondary"
            >
              <ReactSVG src={icImport} />
              {btnImport?.btnLabel || t('import')}
            </ButtonCommon>
          )}

          {create && (
            <ButtonCommon
              onClick={create?.onCreate || handleCreate}
              className="header-actions__top--create"
            >
              <ReactSVG src={icPlus} />
              {create?.btnLabel || t('create')}
            </ButtonCommon>
          )}
        </div>

        <div className="header-actions__bottom">
          <div className="header-actions__bottom--left">
            {search && (
              <InputSearch
                className="header-actions__bottom--left__search"
                placeholder={`${placeholderProps || t('enter-to-search')} ...`}
              />
            )}

            {status && (
              <CommonSelect
                className="header-actions__bottom--left__status"
                options={(status?.options || []).map(
                  (option: OptionsInterface) => ({
                    value: option?.value,
                    label: option?.label,
                  })
                )}
                onChange={handleChangeStatus}
              />
            )}
          </div>

          {btnTableType && (
            <div className="header-actions__bottom--right">
              {filters && (
                <Popover
                  content={<Typography>TODO</Typography>}
                  trigger="click"
                  placement="bottom"
                  className="header-actions__bottom--right__filters"
                  rootClassName="table-filters-popover"
                >
                  <ButtonCommon variant="secondary">
                    <ReactSVG src={icFilter} />
                  </ButtonCommon>
                </Popover>
              )}
              <Segmented
                value={tableTypeFromUrl || TableTypeEnums?.LIST}
                onChange={handleChangeTableType}
                options={[
                  {
                    label: (
                      <div className="table-type-option">
                        <ReactSVG src={icList} />
                        <Typography fontWeight="semibold">
                          {TableTypeEnums.LIST}
                        </Typography>
                      </div>
                    ),
                    value: TableTypeEnums.LIST,
                  },
                  {
                    label: (
                      <div className="table-type-option">
                        <ReactSVG src={icGrid} width={16} height={16} />
                        <Typography fontWeight="semibold">
                          {TableTypeEnums.GRID}
                        </Typography>
                      </div>
                    ),
                    value: TableTypeEnums.GRID,
                  },
                ]}
              />
            </div>
          )}
        </div>
      </div>

      <Table<T>
        columns={tableColumns() as CommonTableColumn<T>[]}
        dataSource={tableData as T[]}
        loading={false}
        rowKey={rowKey}
        pagination={false}
        scroll={scroll}
        bordered={bordered}
        size={size}
        showHeader={showHeader}
        sticky={sticky}
        locale={locale}
        onRow={onRow}
        rowSelection={handleRowSelectionChange}
        expandable={expandable}
        summary={summary}
        showSorterTooltip={showSorterTooltip}
        {...restProps}
      />

      {pagination && typeof pagination !== 'boolean' && (
        <CommonPagination
          total={pagination.total || 0}
          current={Number(currentPage) || 1}
          pageSize={currentPageSize}
          onChange={handlePageChange}
          onShowSizeChange={handlePageSizeChange}
          showSizeChanger={
            typeof pagination.showSizeChanger === 'boolean'
              ? pagination.showSizeChanger
              : true
          }
          showTotal={pagination.showTotal}
          pageSizeOptions={
            pagination.pageSizeOptions?.map((item) => String(item)) ||
            perpageOptions.map((item) => String(item))
          }
        />
      )}

      {actionType === ActionsTypeEnums?.DELETE && (
        <ConfirmDeleteModal
          visible={actionType === ActionsTypeEnums?.DELETE}
          onCancel={() => setActionType(null)}
          onConfirm={deleteRecord?.handleDelete || handleConfirmDeleteRecord}
          label={deleteRecord?.label}
          description={deleteRecord?.description}
          cancelText={deleteRecord?.cancelText}
          confirmText={deleteRecord?.confirmText}
        />
      )}

      {actionType === ActionsTypeEnums?.CHANGE_STATUS && (
        <ConfirmModal
          visible={actionType === ActionsTypeEnums?.CHANGE_STATUS}
          onCancel={() => setActionType(null)}
          onConfirm={deleteRecord?.handleDelete || handleConfirm}
          label={deleteRecord?.label}
          description={deleteRecord?.description}
          cancelText={deleteRecord?.cancelText}
          confirmText={deleteRecord?.confirmText}
        />
      )}

      {(actionType === ActionsTypeEnums?.UPDATE_MODAL ||
        actionType === ActionsTypeEnums?.CREATE) && (
        <CreateFormModal
          visible={
            actionType === ActionsTypeEnums?.UPDATE_MODAL ||
            actionType === ActionsTypeEnums?.CREATE
          }
          onCancel={() => setActionType(null)}
          onConfirm={updateRecordModal?.handleCreate || handleConfirm}
          label={updateRecordModal?.label}
          description={updateRecordModal?.description}
          cancelText={updateRecordModal?.cancelText}
          confirmText={updateRecordModal?.confirmText}
        />
      )}
    </div>
  );
}

export default CommonTable;
