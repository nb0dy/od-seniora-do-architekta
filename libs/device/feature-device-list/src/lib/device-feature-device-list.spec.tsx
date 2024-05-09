import { render } from '@testing-library/react';

import DeviceFeatureDeviceList from './device-feature-device-list';

describe('DeviceFeatureDeviceList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceFeatureDeviceList />);
    expect(baseElement).toBeTruthy();
  });
});
