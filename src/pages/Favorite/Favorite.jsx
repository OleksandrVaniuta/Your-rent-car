import React from 'react';
import { useEffect, useState } from 'react';
import api from 'services/servicesAPi';

import { CatalogList } from 'components/CatalogList/CatlaogList';

const Favorite = () => {
  const [data, setData] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  const [isInLocalStorage, setIsInLocalStorage] = useState(
    JSON.parse(localStorage.getItem('favorite'))
  );

  useEffect(() => {
    // setIsLoading(true);
    const getData = async () => {
      try {
        await api.fetchAllCar().then(res => {
          const data = res.filter(item => isInLocalStorage.includes(item.id));
          setData(data);
          // setIsLoading(false);
        });
      } catch {
        // setErrorMsg(
        //   'something go wrong, please try again or contact us +380730000000'
        // );
        // setIsLoading(false);
      }
    };
    getData();
  }, [isInLocalStorage]);

  if (data.length > 0) {
    return (
      <>
        <CatalogList data={data} setFavoriteData={setIsInLocalStorage} />
      </>
    );
  }
};

export default Favorite;
