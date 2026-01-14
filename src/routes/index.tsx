import { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import constants from '@/settings/constants';
import webLocalStorage from '@/utils/webLocalStorage';
import useWithAuth from '@/HOCs/withAuth';
import useWithoutAuth from '@/HOCs/withoutAuth';
import AdminLayout from '@/components/layouts/Admin';
import AuthLayout from '@/components/layouts/Auth';
import NotFound404Page from '@/pages/Errors/NotFound404Page';
import { ADMIN_ROUTER, AUTH_ROUTER } from '@/routes/constants';
import { routes_admin, routes_auth } from '@/routes/route';

const { IS_AUTH } = constants;

function AuthRouterWrap({
  component: ComponentToWrap,
}: {
  component: React.ComponentType;
}) {
  const WrappedComponent = useWithoutAuth(ComponentToWrap);
  const isAuthenticated = webLocalStorage.get(IS_AUTH) === 'true';

  if (isAuthenticated) {
    return <Navigate to={ADMIN_ROUTER.DASHBOARD} replace />;
  }

  return (
    <AuthLayout>
      <Suspense>{WrappedComponent}</Suspense>
    </AuthLayout>
  );
}

function AdminRouterWrap({
  component: ComponentToWrap,
}: {
  component: React.ComponentType;
}) {
  const WrappedComponent = useWithAuth(ComponentToWrap);
  const isAuthenticated = webLocalStorage.get(IS_AUTH) === 'true';

  if (!isAuthenticated) {
    return <Navigate to={AUTH_ROUTER?.LOGIN} replace />;
  }

  return (
    <AdminLayout>
      <Suspense>{WrappedComponent}</Suspense>
    </AdminLayout>
  );
}

function RouterRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={AUTH_ROUTER.LOGIN} replace />} />
        <Route
          path="/auth"
          element={<Navigate to={AUTH_ROUTER.LOGIN} replace />}
        />

        {routes_admin?.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<AdminRouterWrap component={route.component} />}
          />
        ))}

        {routes_auth?.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<AuthRouterWrap component={route.component} />}
          />
        ))}

        <Route path="*" element={<NotFound404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterRoot;
