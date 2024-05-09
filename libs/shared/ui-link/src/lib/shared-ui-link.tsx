import styled from 'styled-components';

const StyledSharedUiLink = styled.div`
  color: pink;
`;

export function SharedUiLink() {
  return (
    <StyledSharedUiLink>
      <h1>Welcome to SharedUiLink!</h1>
    </StyledSharedUiLink>
  );
}

export default SharedUiLink;
