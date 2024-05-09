import { useDevicePermissionsQuery } from '@od-seniora-do-architekta/device/data-access-device';
import { DeviceFeatureDeviceList } from '@od-seniora-do-architekta/device/feature-device-list';
import { DeviceUiDeviceDetails } from '@od-seniora-do-architekta/device/ui-device-details';
import { PermissionProvider } from '@od-seniora-do-architekta/shared/utils/permission';
import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const permissions = useDevicePermissionsQuery();

  return (
    <StyledApp>
      <PermissionProvider permissions={permissions.data}>
        <NxWelcome title="od-seniora-do-architekta" />
        <DeviceFeatureDeviceList />
        <DeviceUiDeviceDetails />
      </PermissionProvider>
    </StyledApp>
  );
}

export default App;
