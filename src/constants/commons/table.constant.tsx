import { TypeFormFieldEnums } from '@/helpers/enums/common.enum';

import type { FormFieldInterface } from '@/models/common/table.model';

import { Select } from '@/components/commons';
import InputCommon from '@/components/commons/Input';

const renderFormField = (field: FormFieldInterface) => {
  switch (field.typeField) {
    case TypeFormFieldEnums.TEXT:
    case TypeFormFieldEnums.NUMBER:
    case TypeFormFieldEnums.EMAIL:
    case TypeFormFieldEnums.PASSWORD:
      return <InputCommon placeholder={field?.placeholder} size="large" />;
    case TypeFormFieldEnums?.SELECT:
      return (
        <Select
          placeholder={field?.placeholder}
          options={field?.options || []}
        />
      );
    default:
      return null;
  }
};

export { renderFormField };
