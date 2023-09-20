import React from 'react';
import { HomeNavigateBtn } from 'components/HomeNavBtn/HomeNavBtn';

import { HomeContainer, Title } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <Title>Your Adventure Awaits, We've Got the Wheels</Title>
      <HomeNavigateBtn />
    </HomeContainer>
  );
};

export default Home;
