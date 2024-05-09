import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiLinkProps {}

const StyledSharedUiLink = styled.div`
  color: pink;
`;

export function SharedUiLink(props: SharedUiLinkProps) {
  return (
    <StyledSharedUiLink>
      <h1>Welcome to SharedUiLink!</h1>
    </StyledSharedUiLink>
  );
}

export default SharedUiLink;
