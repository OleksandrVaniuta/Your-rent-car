import { CatalogItem } from 'components/CatalogItem/CatalogItem';
import { useState, useEffect } from 'react';

import { ListWrapper } from './CatalogList.styled';

export const CatalogList = ({ data, setFavoriteData = null }) => {
  const [localStoreFavorite, setLocalStoreFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite'))
  );

  useEffect(() => {
    // setLocalStoreFavorite(JSON.parse(localStorage.getItem('favorite')));
    localStorage.setItem('favorite', JSON.stringify(localStoreFavorite));
    if (setFavoriteData !== null) {
      setFavoriteData(localStoreFavorite);
    }
  }, [localStoreFavorite, setFavoriteData]);

  return (
    <div>
      <ListWrapper>
        {data.map(dataItem => (
          <CatalogItem
            key={data.id + Math.random().toString()}
            data={dataItem}
            setFavoriteArr={setLocalStoreFavorite}
            favoriteArr={localStoreFavorite}
          />
        ))}
      </ListWrapper>
    </div>
  );
};
