import { render } from '@testing-library/react';

import DeviceUiDeviceList from './device-ui-device-list';

describe('DeviceUiDeviceList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceUiDeviceList />);
    expect(baseElement).toBeTruthy();
  });
});
