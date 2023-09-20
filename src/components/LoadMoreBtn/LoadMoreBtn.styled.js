import styled from '@emotion/styled';

export const LoadMoreButton = styled.button`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes[2]};
  line-height: ${({ theme }) => theme.fontSizes[2]};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: underline;
  font-weight: 500;
  border-radius: 12px;
  transition: background-color 0.5s ease-in-out;
  margin: 0 auto;
  padding: 10px 15px 10px 15px;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

`;
