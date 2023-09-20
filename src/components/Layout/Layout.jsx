import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from 'components/Header/Header';
import { Navigation } from 'components/Navigation/Navigation';

import { OutletContainer } from './Layout.styled';

export const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Header />
      <OutletContainer location={location.pathname}>
        <Navigation />
        <Suspense>
          <Outlet />
        </Suspense>
      </OutletContainer>
    </div>
  );
};
