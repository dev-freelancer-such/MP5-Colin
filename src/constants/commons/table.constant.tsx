import { TypeFormFieldEnums } from '@/helpers/enums/common.enum';
import type { FormFieldInterface } from '@/models/common/table.model';
import InputCommon from '@/components/commons/Input';

const renderFormField = (field: FormFieldInterface) => {
  switch (field.typeField) {
    case TypeFormFieldEnums.TEXT:
    case TypeFormFieldEnums.NUMBER:
    case TypeFormFieldEnums.EMAIL:
    case TypeFormFieldEnums.PASSWORD:
      return <InputCommon placeholder={field?.placeholder} size="large" />;

    default:
      return null;
  }
};

export { renderFormField };
