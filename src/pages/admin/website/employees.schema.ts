import type { TFunction } from 'i18next';

import { getPublisherColumns } from '@/constants/employees.constant';

import type { TableSchemaInterface } from '@/models/common/table.model';

import { ExportTypeEnums } from '../../../helpers/enums/common.enum';
import { employeesApi } from './api/employees.api';

const employeesSchema = (t: TFunction): TableSchemaInterface => {
  return {
    fetchData: {
      endpoint: employeesApi?.GET_EMPLOYEES,
    },
    headerActions: {
      search: {
        placeholder: 'Nhập thông tên nhân viên',
        keySearch: 'employee_name',
      },
      create: {
        btnLabel: 'Tạo mới',
      },
      status: {
        keyStatus: 'employee_status',
        options: [
          { value: 'active', label: 'Đang hoạt động' },
          { value: 'inactive', label: 'Ngừng hoạt động' },
        ],
      },
      exports: {
        btnLabel: 'Tải xuống',
        items: [
          {
            btnLabel: 'Xuất excel',
            endPoint: '/',
            exportType: ExportTypeEnums?.EXCEL,
          },
          {
            btnLabel: 'Xuất pdf',
            endPoint: '/',
            exportType: ExportTypeEnums?.PDF,
          },
        ],
      },
      btnImport: {
        btnLabel: 'Tải lên',
      },
      btnTableType: true,
      filters: {},
    },
    columnsActions: {
      createRecordModal: {
        endpoint: '',
        label: 'Tạo website',
        responsiveCol: {
          xs: 24,
          sm: 12,
          md: 4,
          lg: 3,
        },
      },
      changeStatus: {
        endpoint: employeesApi?.UPDATE_STATUS_EMPLOYEES,
      },
      deleteRecord: {
        endpoint: employeesApi?.DELETE_EMPLOYEES,
      },
      // updateRecordModal: {
      //   endpoint: employeesApi?.DELETE_EMPLOYEES,
      //   formFields: [
      //     {
      //       key: 'employee_name',
      //       nameField: 'employee_name',
      //       typeField: TypeFormFieldEnums?.TEXT,
      //       colSpan: '1',
      //       label: 'Tên nhân viên',
      //       placeholder: 'Nhập tên nhân viên',
      //     },
      //   ],
      // },
    },

    columns: getPublisherColumns(t),
    config: {
      modalWidth: '90vw',
    },
  };
};

export { employeesSchema };
