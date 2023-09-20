import React from 'react';
import { useEffect, useState } from 'react';
import api from 'services/servicesAPi';

import { CatalogList } from 'components/CatalogList/CatlaogList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

const Catalog = () => {
  const [data, setData] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    const getData = async () => {
      try {
        await api.fetchCarPerPage(page, 8).then(res => {
          if (page === 1) {
            setData(res);
            // setIsLoading(false);
            return;
          }
          setData(prevState => [...prevState, ...res]);
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
  }, [page]);

  if (data.length > 0) {
    return (
      <>
        <CatalogList data={data} />
        <LoadMoreBtn page={page} setPage={setPage} dataLength={data.length} />
      </>
    );
  }
};

export default Catalog;
