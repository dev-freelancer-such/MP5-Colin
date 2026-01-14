import type { EmployeeEnums } from '@/helpers/enums/employee.enum';

export interface SelectOption {
  value: string | number;
  label: string;
}

export type EmployeeGender = 'male' | 'female' | 'other';

export type EmployeeTitle = 'Mr.' | 'Mrs.' | 'Ms.' | 'Dr.' | 'Prof.';

export interface EmployeeInterface extends Record<string, unknown> {
  id: string;
  tenant_id: number;
  employee_code: string;
  title: EmployeeTitle;
  full_name: string;
  nick_name: string;
  avatar: string | null;
  banner: string | null;
  gender: EmployeeGender;
  date_of_birth: string | null;

  // Contact Information
  working_phone: string | null;
  personal_phone: string | null;
  personal_email: string | null;
  internal_email: string | null;
  external_email: string | null;

  // Employment Information
  status: EmployeeEnums;
  start_date: string;
  end_date: string | null;
  note: string | null;
  description: string;
  is_active: boolean;

  // Organization Information (string values)
  company_name: string;
  department_name: string;
  team_name: string;
  position_name: string;
  level_name: string;
  location_name: string;
  manager_name: string;

  // Managers list
  managers: SelectOption[];

  // Organization Information (structured objects)
  tenant: SelectOption;
  company: SelectOption;
  department: SelectOption;
  team: SelectOption;
  position: SelectOption;
  level: SelectOption;
  location: SelectOption;
  manager: SelectOption;

  // Audit Information
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}

// Employee create/update DTO
export interface EmployeeFormData {
  employee_code: string;
  title: EmployeeTitle;
  full_name: string;
  nick_name: string;
  avatar?: string | null;
  banner?: string | null;
  gender: EmployeeGender;
  date_of_birth?: string | null;
  working_phone?: string | null;
  personal_phone?: string | null;
  personal_email?: string | null;
  internal_email?: string | null;
  external_email?: string | null;
  status: EmployeeEnums;
  start_date: string;
  end_date?: string | null;
  note?: string | null;
  description?: string;
  is_active: boolean;
  tenant_id: number;
  company_id: string;
  department_id: string;
  team_id: string;
  position_id: string;
  level_id: string;
  location_id: string;
  manager_id: string;
}

// Employee list/table response
export interface EmployeeListResponse {
  data: EmployeeInterface[];
  total: number;
  page: number;
  limit: number;
  total_pages: number;
}

// Employee detail response
export interface EmployeeDetailResponse {
  data: EmployeeInterface;
  message?: string;
}
