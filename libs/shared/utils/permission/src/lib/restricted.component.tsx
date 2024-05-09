import { PropsWithChildren, ReactNode } from 'react';

import { usePermission } from './use-permission.hook';

export const Restricted = ({
  to,
  fallback,
  children,
}: PropsWithChildren<{ to: string | string[]; fallback: ReactNode }>): ReactNode => {
  const isAllowed = usePermission(to);

  if (isAllowed) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};
