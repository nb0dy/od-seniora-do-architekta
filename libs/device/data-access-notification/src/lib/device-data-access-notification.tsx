import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DeviceDataAccessNotificationProps {}

const StyledDeviceDataAccessNotification = styled.div`
  color: pink;
`;

export function DeviceDataAccessNotification(props: DeviceDataAccessNotificationProps) {
  return (
    <StyledDeviceDataAccessNotification>
      <h1>Welcome to DeviceDataAccessNotification!</h1>
    </StyledDeviceDataAccessNotification>
  );
}

export default DeviceDataAccessNotification;
