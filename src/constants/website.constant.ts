import { TypeFormFieldEnums } from '@/helpers/enums/common.enum';

import type { FormFieldInterface } from '@/models/common/table.model';

const changeDomainForm: FormFieldInterface[] = [
  {
    nameField: 'pic_name',
    typeField: TypeFormFieldEnums?.SELECT,
    label: 'Người phụ trách',
    placeholder: 'Chọn người phụ trách',
    options: [
      { label: 'Nguyễn Văn A', value: 'nguyen_van_a' },
      { label: 'Trần Thị B', value: 'tran_thi_b' },
      { label: 'Lê Văn C', value: 'le_van_c' },
    ],
    rules: [{ required: true, message: 'Vui lòng chọn người phụ trách' }],
    isRequired: true,
  },
  {
    nameField: 'company_name',
    typeField: TypeFormFieldEnums?.SELECT,
    label: 'Công ty',
    placeholder: 'Chọn công ty',
    options: [
      { label: 'Công ty A', value: 'cong_ty_a' },
      { label: 'Công ty B', value: 'cong_ty_b' },
      { label: 'Công ty C', value: 'cong_ty_c' },
    ],
    rules: [{ required: true, message: 'Vui lòng chọn công ty' }],
  },
  {
    nameField: 'branch_name',
    typeField: TypeFormFieldEnums?.SELECT,
    label: 'Chi nhánh',
    placeholder: 'Chọn chi nhánh',
    options: [
      { label: 'Chi nhánh A', value: 'chi_nhanh_a' },
      { label: 'Chi nhánh B', value: 'chi_nhanh_b' },
      { label: 'Chi nhánh C', value: 'chi_nhanh_c' },
    ],
    rules: [{ required: true, message: 'Vui lòng chọn chi nhánh' }],
  },
  {
    nameField: 'channel_name',
    typeField: TypeFormFieldEnums?.SELECT,
    label: 'Kênh',
    placeholder: 'Chọn kênh',
    options: [
      { label: 'Kênh A', value: 'kenh_a' },
      { label: 'Kênh B', value: 'kenh_b' },
      { label: 'Kênh C', value: 'kenh_c' },
    ],
    rules: [{ required: true, message: 'Vui lòng chọn kênh' }],
  },
  {
    nameField: 'detail_name',
    typeField: TypeFormFieldEnums?.SELECT,
    label: 'Chi tiết',
    placeholder: 'Chọn chi tiết',
    options: [
      { label: 'Chi tiết A', value: 'chi_tiet_a' },
      { label: 'Chi tiết B', value: 'chi_tiet_b' },
      { label: 'Chi tiết C', value: 'chi_tiet_c' },
    ],
    rules: [{ required: true, message: 'Vui lòng chọn chi tiết' }],
  },
  {
    nameField: 'pic_code',
    typeField: TypeFormFieldEnums?.SELECT,
    label: 'Người phụ trách mã',
    placeholder: 'Chọn người phụ trách mã',
    options: [
      { label: 'Người phụ trách mã A', value: 'nguoi_phu_trach_ma_a' },
      { label: 'Người phụ trách mã B', value: 'nguoi_phu_trach_ma_b' },
      { label: 'Người phụ trách mã C', value: 'nguoi_phu_trach_ma_c' },
    ],
    rules: [{ required: true, message: 'Vui lòng chọn người phụ trách mã' }],
  },
  {
    nameField: 'trackking_code',
    typeField: TypeFormFieldEnums?.TEXT,
    label: 'Mã theo dõi',
    placeholder: 'Nhập mã theo dõi',
  },
  {
    nameField: 'target_url',
    typeField: TypeFormFieldEnums?.TEXT,
    label: 'URL đích',
    placeholder: 'Nhập URL đích',
  },
  {
    nameField: 'md5_code',
    typeField: TypeFormFieldEnums?.TEXT,
    label: 'Mã MD5',
    placeholder: 'Nhập mã MD5',
  },
  {
    nameField: 'link_website',
    typeField: TypeFormFieldEnums?.TEXT,
    label: 'Link website',
    placeholder: 'Nhập link website',
  },
];

export { changeDomainForm };
