import { render } from '@testing-library/react';

import DeviceUiDeviceDetails from './device-ui-device-details';

describe('DeviceUiDeviceDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceUiDeviceDetails />);
    expect(baseElement).toBeTruthy();
  });
});
