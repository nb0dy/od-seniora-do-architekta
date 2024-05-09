import { SharedUiLink } from '@od-seniora-do-architekta/shared/ui-link';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiButtonProps {}

const StyledSharedUiButton = styled.div`
  color: pink;
`;

export function SharedUiButton(props: SharedUiButtonProps) {
  return (
    <StyledSharedUiButton>
      <h1>Welcome to SharedUiButton!</h1>
      <SharedUiLink />
    </StyledSharedUiButton>
  );
}

export default SharedUiButton;
