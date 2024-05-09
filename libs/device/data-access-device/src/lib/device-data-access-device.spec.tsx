import { render } from '@testing-library/react';

import DeviceDataAccessDevice from './device-data-access-device';

describe('DeviceDataAccessDevice', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceDataAccessDevice />);
    expect(baseElement).toBeTruthy();
  });
});
