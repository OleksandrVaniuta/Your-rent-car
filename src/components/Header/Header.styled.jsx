import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 32px;
  line-height: 96px;
  font-weight: 700;
`;
