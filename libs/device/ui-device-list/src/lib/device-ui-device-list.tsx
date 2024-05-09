import { DeviceUiDeviceDetails } from '@od-seniora-do-architekta/device/ui-device-details';
import { SharedUiButton } from '@od-seniora-do-architekta/shared/ui-button';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DeviceUiDeviceListProps {}

const StyledDeviceUiDeviceList = styled.div`
  color: pink;
`;

export function DeviceUiDeviceList(props: DeviceUiDeviceListProps) {
  return (
    <StyledDeviceUiDeviceList>
      <h1>Welcome to DeviceUiDeviceList!</h1>
      <SharedUiButton />
      <DeviceUiDeviceDetails />
    </StyledDeviceUiDeviceList>
  );
}

export default DeviceUiDeviceList;
