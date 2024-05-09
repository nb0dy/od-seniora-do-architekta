import { render } from '@testing-library/react';

import DeviceDataAccessNotification from './device-data-access-notification';

describe('DeviceDataAccessNotification', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeviceDataAccessNotification />);
    expect(baseElement).toBeTruthy();
  });
});
