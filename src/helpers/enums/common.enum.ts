enum TypeFormFieldEnums {
  TEXT = 'text',
  NUMBER = 'number',
  SELECT = 'select',
  DATE = 'date',
  CHECKBOX = 'checkbox',
  RADIO = 'radio',
  TEXTAREA = 'textarea',
  SWITCH = 'switch',
  EMAIL = 'email',
  PASSWORD = 'password',
}

enum ActionsTypeEnums {
  CREATE = 'create',
  EDIT = 'edit',
  VIEW = 'view',
  DELETE = 'delete',
  EXPORT = 'export',
  IMPORT = 'import',
  CHANGE_STATUS = 'change_status',
  UPDATE_MODAL = 'update_modal',
  UPDATE = 'update',
}

enum ExportTypeEnums {
  EXCEL = 'excel',
  PDF = 'pdf',
}

enum TableTypeEnums {
  GRID = 'grid',
  LIST = 'list',
}

export {
  TypeFormFieldEnums,
  ActionsTypeEnums,
  ExportTypeEnums,
  TableTypeEnums,
};
