import { Filter } from 'components/Filter/Filter';

import api from 'services/servicesAPi';

import { FilterWrapper } from './FilterEl.styled';

export const FilterEl = ({ setData, setFilter, setFiltredMsg }) => {
  const handleAddFilter = async filterData => {
    console.log(filterData);
    if (
      filterData.make.length > 0 ||
      filterData.price.length > 0 ||
      filterData.from.length > 0 ||
      filterData.to.length > 0
    ) {
      let filtredRes = null;
      let isChanged = false;

      try {
        await api.fetchAllCar().then(res => {
          if (filterData.make.length > 0) {
            filtredRes = res.filter(item => item.make === filterData.make);

            isChanged = true;
          } else {
            if (filtredRes === null) {
              filtredRes = res;
            }
          }
          if (filterData.price.length > 0) {
            filtredRes = filtredRes.filter(
              item =>
                parseFloat(item.rentalPrice.replace('$', '')) <=
                parseFloat(filterData.price.replace('$', ''))
            );
            console.log(filtredRes);
            isChanged = true;
          } else {
            if (filtredRes === null) {
              filtredRes = res;
            }
          }
          if (filterData.from.length > 0 && filterData.to.length > 0) {
            filtredRes = filtredRes.filter(item => {
              return (
                parseInt(item.mileage) >= parseInt(filterData.from) &&
                parseInt(item.mileage) <= parseInt(filterData.to)
              );
            });
            isChanged = true;
          } else {
            if (filtredRes === null) {
              filtredRes = res;
            }
          }
          console.log(filterData.from);
          if (filterData.from.length > 0 && !filterData.to.length > 0) {
            filtredRes = filtredRes.filter(item => {
              console.log(filterData.from);
              return parseInt(item.mileage) >= parseInt(filterData.from);
            });;
            isChanged = true;
          } else {
            if (filtredRes === null) {
              filtredRes = res;
            }
          }
          if (!filterData.from.length > 0 && filterData.to.length > 0) {
            filtredRes = filtredRes.filter(
              item => parseInt(item.mileage) <= parseInt(filterData.to)
            );
            isChanged = true;
          } else {
            if (filtredRes === null) {
              filtredRes = res;
            }
          }

          if (filtredRes !== null && isChanged && filtredRes.length > 0) {
            setData(filtredRes);
            setFilter(true);
          } else {
            setFiltredMsg(true);
          }
        });
      } catch {
        // setErrorMsg(
        //   'something go wrong, please try again or contact us +380730000000'
        // );
        // setIsLoading(false);
      }
    }
  };

  return (
    <FilterWrapper>
      <Filter
        setFilter={setFilter}
        handleAddFilter={handleAddFilter}
        setFiltredMsg={setFiltredMsg}
      />
    </FilterWrapper>
  );
};
