import { useContext } from 'react';

import PermissionContext from './permission.context';

export const usePermission = (permission: string | string[]) => {
  const { isAllowedTo } = useContext(PermissionContext);

  return isAllowedTo(permission);
};
