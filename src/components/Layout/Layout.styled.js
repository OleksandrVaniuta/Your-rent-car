import styled from '@emotion/styled';


export const OutletContainer = styled.div`
  min-height: 100%;
  position: relative;
  padding-left: ${props => (props.location === '/' ? `0` : '100px')};
  padding-right: ${props => (props.location === '/' ? `0` : '100px')};
  padding-bottom: 150px;
  margin: 0 auto;
`;
