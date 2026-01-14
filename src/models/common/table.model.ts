import React from 'react';
import type { ColumnType, TableProps } from 'antd/es/table';
import type { TablePaginationConfig } from 'antd/es/table/interface';
import type {
  ExportTypeEnums,
  TypeFormFieldEnums,
} from '@/helpers/enums/common.enum';

export interface CommonTableColumn<T = Record<string, unknown>>
  extends ColumnType<T> {
  dataIndex?: string | string[];
  key?: string;
  title?: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  fixed?: 'left' | 'right' | boolean;
  ellipsis?: boolean;
  sorter?: boolean | ((a: T, b: T) => number);
  render?: (value: unknown, record: T, index: number) => React.ReactNode;
}

export interface FormFieldInterface {
  key: string;
  nameField: string;
  typeField: TypeFormFieldEnums;
  colSpan?: string;
  rules?: Array<Record<string, unknown>>;
  label: string;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
  disabled?: boolean;
  defaultValue?: string | number | boolean;
}

export interface OptionsInterface {
  label: string;
  value: string;
}

export interface ExportInterface {
  btnLabel?: string;
  onExport?: () => void;
  endPoint: string;
  exportType: ExportTypeEnums;
}

export interface HeaderActionsInterface {
  search?: {
    placeholder?: string;
    keySearch: string;
  };
  status?: {
    options: OptionsInterface[];
    keyStatus: string;
    onChange?: (value: string) => void;
  };
  create?: {
    btnLabel?: string;
    onCreate?: () => void;
    href?: string;
  };
  exports?: {
    btnLabel?: string;
    items: ExportInterface[];
  };
  btnImport?: {
    btnLabel?: string;
    onImport?: () => void;
    href?: string;
  };
  btnTableType?: boolean;
  filters: {
    filterOptions?: OptionsInterface[];
  };
}

export interface TableSchemaInterface<T = Record<string, unknown>> {
  headerActions?: HeaderActionsInterface;
  columns: CommonTableColumn<T>[];
  fetchData: {
    endpoint: string;
    params?: Record<string, unknown>;
  };
  columnsActions?: {
    changeStatus?: {
      endpoint: string;
      handleChangeStatus?: (
        selectedRowKeys: React.Key[],
        selectedRows: T[]
      ) => void;
      label?: string;
      description?: string;
    };
    deleteRecord?: {
      endpoint: string;
      handleDelete?: () => void;
      label?: string;
      description?: string;
      cancelText?: string;
      confirmText?: string;
    };
    updateRecordModal?: {
      endpoint: string;
      handleCreate?: (record: T) => void;
      label?: string;
      formFields: FormFieldInterface[];
      description?: string;
      cancelText?: string;
      confirmText?: string;
    };
  };
}

export interface CommonTableProps<T = Record<string, unknown>>
  extends Omit<TableProps<T>, 'columns' | 'loading'> {
  isLoading?: boolean;
  rowKey?: string | ((record: T) => string);
  pagination?: false | TablePaginationConfig;
  scroll?: { x?: number | string; y?: number | string };
  bordered?: boolean;
  size?: 'small' | 'middle' | 'large';
  className?: string;
  emptyText?: string;
  showHeader?: boolean;
  sticky?: boolean;
  onRow?: (
    record: T,
    index?: number
  ) => React.HTMLAttributes<HTMLElement> | React.TdHTMLAttributes<HTMLElement>;
  rowSelection?: TableProps<T>['rowSelection'];
  expandable?: TableProps<T>['expandable'];
  summary?: (data: readonly T[]) => React.ReactNode;
  showSorterTooltip?: boolean;
  placeholderProps?: string;
  schema: TableSchemaInterface;
}
