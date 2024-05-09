import { DeviceUiDeviceList } from '@od-seniora-do-architekta/device/ui-device-list';
import styled from 'styled-components';

const StyledDeviceFeatureDeviceList = styled.div`
  color: pink;
`;

export function DeviceFeatureDeviceList() {
  return (
    <StyledDeviceFeatureDeviceList>
      <h1>Welcome to DeviceFeatureDeviceList!</h1>
      <DeviceUiDeviceList />
    </StyledDeviceFeatureDeviceList>
  );
}

export default DeviceFeatureDeviceList;
