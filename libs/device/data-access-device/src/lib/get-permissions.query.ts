import { RoleToPermissionMapper, TRole } from '@od-seniora-do-architekta/shared/utils/role-to-permission';
import { useEffect, useState } from 'react';

const getPermissionsFromApi = (role: TRole): Promise<string[]> => {
  return new Promise((resolve) => {
    resolve(new RoleToPermissionMapper().mapTo(role));
  });
};

const getUserRole = (): Promise<TRole> => {
  return new Promise((resolve) => {
    resolve('ROOM_OWNER');
  });
};

export const useDevicePermissionsQuery = () => {
  const [permissions, setPermissions] = useState<string[]>([]);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUserRole()
      .then((role) => getPermissionsFromApi(role))
      .then((permissions) => {
        setPermissions(permissions);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  return {
    data: permissions,
    error,
    isLoading,
    isError,
  };
};
