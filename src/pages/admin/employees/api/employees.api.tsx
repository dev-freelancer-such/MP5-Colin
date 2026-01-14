import constants from '@/settings/constants';

const employeesApi = {
  GET_EMPLOYEES: `${constants.API_SERVER}/employees`,
  UPDATE_STATUS_EMPLOYEES: `${constants.API_SERVER}/employees/update-status`,

  DELETE_EMPLOYEES: `${constants.API_SERVER}/employees/delete`,
};

export { employeesApi };
