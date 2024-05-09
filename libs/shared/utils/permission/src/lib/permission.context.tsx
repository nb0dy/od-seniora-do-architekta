import { createContext } from 'react';

type TPermissionContext = {
  isAllowedTo: (permission: string | string[]) => boolean;
};

const defaultPermission: TPermissionContext = {
  isAllowedTo: () => false,
};

const PermissionContext = createContext<TPermissionContext>(defaultPermission);

export default PermissionContext;
