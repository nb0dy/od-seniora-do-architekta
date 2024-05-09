import { SharedUiLink } from '@od-seniora-do-architekta/shared/ui-link';
import styled from 'styled-components';

const StyledSharedUiButton = styled.div`
  color: pink;
`;

export function SharedUiButton() {
  return (
    <StyledSharedUiButton>
      <h1>Welcome to SharedUiButton!</h1>
      <SharedUiLink />
    </StyledSharedUiButton>
  );
}

export default SharedUiButton;
