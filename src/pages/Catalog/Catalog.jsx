import React from 'react';
import { useEffect, useState } from 'react';
import api from 'services/servicesAPi';

import { CatalogList } from 'components/CatalogList/CatlaogList';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { FilterEl } from 'components/FilterEl/FilterEl';

const Catalog = () => {
  const [data, setData] = useState([]);
  // const [errorMsg, setErrorMsg] = useState('');
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [fitredMsg, setFiltredMsg] = useState(false);

  useEffect(() => {
    if (filter) {
      return;
    }
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
  }, [page, filter]);

  if (data.length > 0) {
    return (
      <>
        <FilterEl
          setData={setData}
          setFilter={setFilter}
          setFiltredMsg={setFiltredMsg}
        />
        {fitredMsg ? (
          <CatalogList data={data} />
        ) : (
          <h2>Sorry, nothing on your params</h2>
        )}

        {!filter && (
          <LoadMoreBtn page={page} setPage={setPage} dataLength={data.length} />
        )}
      </>
    );
  }
};

export default Catalog;
