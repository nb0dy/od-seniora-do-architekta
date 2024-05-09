import { PropsWithChildren } from 'react';

import PermissionContext from './permission.context';

export const PermissionProvider = ({ children, permissions }: PropsWithChildren<{ permissions: string[] }>) => {
  const isAllowedTo = (requiredPermission: string | string[]): boolean => {
    if (Array.isArray(requiredPermission)) {
      if (requiredPermission.length <= 0) {
        return true;
      }

      if (permissions.length <= 0) {
        return true;
      }

      return requiredPermission.every((permission) => permissions.includes(permission));
    }

    return permissions.includes(requiredPermission);
  };

  return <PermissionContext.Provider value={{ isAllowedTo }}>{children}</PermissionContext.Provider>;
};
