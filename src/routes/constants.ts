const adminRouter = '';
const authRouter = '';

const ADMIN_ROUTER = {
  DASHBOARD: `${adminRouter}/dashboard`,
  CALENDAR: `${adminRouter}/calendar`,
  EMPLOYEES: `${adminRouter}/employees`,
  TRAFFIC: `${adminRouter}/traffic`,

  // Father demo route
  LAYOUTS: `${adminRouter}/levels`,
  CHILDREN_FIRST: `${adminRouter}/levels/children-first`,
  CHILDREN_SECOND: `${adminRouter}/levels/children-second`,
};

const AUTH_ROUTER = {
  LOGIN: `${authRouter}/login`,
  REGISTER: `${authRouter}/register`,
  FORGOT_PASSWORD: `${authRouter}/forgot-password`,
};

export { adminRouter, authRouter, ADMIN_ROUTER, AUTH_ROUTER };
