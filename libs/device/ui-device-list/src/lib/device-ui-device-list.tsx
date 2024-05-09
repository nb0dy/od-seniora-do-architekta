import { SharedUiButton } from '@od-seniora-do-architekta/shared/ui-button';
import styled from 'styled-components';

const StyledDeviceUiDeviceList = styled.div`
  color: pink;
`;

export function DeviceUiDeviceList() {
  return (
    <StyledDeviceUiDeviceList>
      <h1>Welcome to DeviceUiDeviceList!</h1>
      <SharedUiButton />
    </StyledDeviceUiDeviceList>
  );
}

export default DeviceUiDeviceList;
