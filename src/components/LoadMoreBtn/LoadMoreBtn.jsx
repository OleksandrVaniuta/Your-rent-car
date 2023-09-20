import { useState } from 'react';
import { LoadMoreButton } from './LoadMoreBtn.styled';

import api from 'services/servicesAPi';

export const LoadMoreBtn = ({ page, setPage, dataLength }) => {
  const [isNextPage, setIsNextPage] = useState(true);

  const getData = async page => {
    const nextPage = page + 2;
    try {
      await api.fetchCarPerPage(nextPage, 8).then(res => {
        if (res.length === 0) {
          console.log('no more');
          setIsNextPage(false);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async () => {
    setPage(prevState => prevState + 1);
    await getData(page);
  };

  if (dataLength < 8 || !isNextPage) {
    return null;
  }

  return <LoadMoreButton onClick={handleClick}>Load more</LoadMoreButton>;
};
