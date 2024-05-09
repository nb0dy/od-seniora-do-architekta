import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DeviceUiDeviceDetailsProps {}

const StyledDeviceUiDeviceDetails = styled.div`
  color: pink;
`;

export function DeviceUiDeviceDetails(props: DeviceUiDeviceDetailsProps) {
  return (
    <StyledDeviceUiDeviceDetails>
      <h1>Welcome to DeviceUiDeviceDetails!</h1>
    </StyledDeviceUiDeviceDetails>
  );
}

export default DeviceUiDeviceDetails;
