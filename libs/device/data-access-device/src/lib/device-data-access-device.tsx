import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DeviceDataAccessDeviceProps {}

const StyledDeviceDataAccessDevice = styled.div`
  color: pink;
`;

export function DeviceDataAccessDevice(props: DeviceDataAccessDeviceProps) {
  return (
    <StyledDeviceDataAccessDevice>
      <h1>Welcome to DeviceDataAccessDevice!</h1>
    </StyledDeviceDataAccessDevice>
  );
}

export default DeviceDataAccessDevice;
