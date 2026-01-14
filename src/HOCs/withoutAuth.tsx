import React from 'react';

function useWithoutAuth(Component: React.ComponentType) {
  return <Component />;
}

export default useWithoutAuth;
