import React, { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { AppContainer } from './App.styled';

const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));
const Home = lazy(() => import('../pages/Home/Home'));

function App() {
  useEffect(() => {
    if (!localStorage.getItem('favorite')) {
      const emptyFavorite = [];
      localStorage.setItem('favorite', JSON.stringify(emptyFavorite));
    }
  }, []);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exect index element={<Home />} />
          <Route index exect path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </AppContainer>
  );
}

export default App;
