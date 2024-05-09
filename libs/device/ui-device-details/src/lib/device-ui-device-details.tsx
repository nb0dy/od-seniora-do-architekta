import { Restricted } from '@od-seniora-do-architekta/shared/utils/permission';
import styled from 'styled-components';

import { RoleManager } from './role-manager';

/* eslint-disable-next-line */
export interface DeviceUiDeviceDetailsProps {}

const StyledDeviceUiDeviceDetails = styled.div`
  color: pink;
`;

const users = [
  {
    id: '1',
    firstName: 'Adam',
    lastName: 'Nowak',
    role: 'SYSTEM_ADMIN' as const,
  },
  {
    id: '2',
    firstName: 'Jak',
    lastName: 'Kowalski',
    role: 'ROOM_OWNER' as const,
  },
  {
    id: '3',
    firstName: 'Jan',
    lastName: 'Brzęczyszczykiewicz',
    role: 'ROOM_ADMIN' as const,
  },
  {
    id: '3',
    firstName: 'Jarosław',
    lastName: 'Jarek',
    role: 'ROOM_USER' as const,
  },
];

const currentUser = {
  id: '3',
  firstName: 'Jan',
  lastName: 'Brzęczyszczykiewicz',
  role: 'ROOM_ADMIN' as const,
};

export function DeviceUiDeviceDetails() {
  return (
    <StyledDeviceUiDeviceDetails>
      <h1>Welcome to DeviceUiDeviceDetails!</h1>
      {users.map((user) => (
        <div>
          <span>
            {user.firstName} {user.lastName}
          </span>
          <Restricted to={new RoleManager().getPermissions(currentUser.role, user.role)} fallback={null}>
            <button>Remove</button>
          </Restricted>
        </div>
      ))}
    </StyledDeviceUiDeviceDetails>
  );
}

export default DeviceUiDeviceDetails;
