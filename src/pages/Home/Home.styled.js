import styled from '@emotion/styled';
import bgImage from '../../images/1617393911_16-p-oboi-na-doroge-17.jpg';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: relative;

  background-image: URL(${bgImage});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 1441px 100%;
`;

export const Title = styled.h1`
  position: absolute;
  top: 80px;
  left: 100px;
  font-family: 'Manrope', sans-serif;
  color: ${({ theme }) => theme.colors.mainWhite};
  font-size: 70px;
  width: 50%;
  text-align: left;
`;
