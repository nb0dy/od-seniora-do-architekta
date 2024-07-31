import { PermissionProvider } from '@od-seniora-do-architekta/shared/utils/permission';
import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <PermissionProvider permissions={[]}>
        <NxWelcome title="od-seniora-do-architekta" />
      </PermissionProvider>
    </StyledApp>
  );
}

export default App;
