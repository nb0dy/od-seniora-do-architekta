import { PermissionProvider } from '@od-seniora-do-architekta/shared/utils/permission';
import { Component } from 'react';
import styled from 'styled-components';

import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

class App extends Component {
  componentDidMount() {
    console.log('componentDidMount', this.props);
  }

  webComponentAttributeChanged(props: any) {
    console.log('webComponentAttached', props);
  }

  render() {
    return (
      <StyledApp>
        <PermissionProvider permissions={[]}>
          <NxWelcome title="od-seniora-do-architekta" />
        </PermissionProvider>
      </StyledApp>
    );
  }
}

export default App;
