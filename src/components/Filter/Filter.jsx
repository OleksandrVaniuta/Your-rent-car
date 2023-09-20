import { useState } from 'react';

import {
  Form,
  Select,
  SelectBody,
  SelectItem,
  SelectInput,
  IconWrapper,
  MileageLabeltWrapper,
  MileageInputWrapper,
  MileageInput,
  FilterSubmitBtn,
  ResetFormBtn,
} from './Filter.styled';
import { BiChevronDown } from 'react-icons/bi';

import { AiOutlineClose } from 'react-icons/ai';

const makeOptions = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

const priceRange = Array.from(
  { length: 100 },
  (_, index) => `$${(index + 1) * 5}`
);

export const Filter = ({ setFilter, handleAddFilter, setFiltredMsg }) => {
  const [activeMake, setActiveMake] = useState(false);
  const [activePrice, setActivePrice] = useState(false);
  const [inputValueFrom, setInputValueFrom] = useState('');
  const [inputValueTo, setInputValueTo] = useState('');
  const [filterData, setFilterData] = useState({
    make: '',
    price: '',
    from: '',
    to: '',
  });

  const hanldeFocus = name => {
    if (name === 'price') {
      setActivePrice(true);
      return;
    }
    setActiveMake(true);
  };

  const handleChooseMake = e => {
    setFilterData({ ...filterData, make: e.target.textContent });
    setActiveMake(false);
  };

  const handleChoosePrice = e => {
    setFilterData({ ...filterData, price: e.target.textContent });
    setActivePrice(false);
  };

  const handleInputChange = e => {
    const rawValue = e.target.value;
    if (e.target.name === 'from') {
      setFilterData({ ...filterData, from: e.target.value });
      const numericValue = parseFloat(rawValue.replace(/[^0-9.]/g, ''));

      if (!isNaN(numericValue)) {
        const formatted = numericValue.toLocaleString('en-US');
        setInputValueFrom(formatted);
      }
      return;
    }
    setFilterData({ ...filterData, to: e.target.value });
    const numericValue = parseFloat(rawValue.replace(/[^0-9.]/g, ''));

    if (!isNaN(numericValue)) {
      const formatted = numericValue.toLocaleString('en-US');
      setInputValueTo(formatted);
    }
  };

  const resetFilter = () => {
    setFilterData({
      make: '',
      price: '',
      from: '',
      to: '',
    });
    setInputValueFrom('');
    setInputValueTo('');
    setFilter(false);
    setFiltredMsg(false);
  };

  const habldeActiveFilter = e => {
    e.preventDefault();
    handleAddFilter(filterData);
  };

  return (
    <Form onSubmit={e => habldeActiveFilter(e)}>
      <Select value="makeddf">
        Car brand
        <div>
          <SelectInput
            placeholder="Enter the text"
            value={filterData.make}
            onFocus={() => hanldeFocus('make')}
            readOnly
            name="make"
            type="text"
          />
          <IconWrapper active={activeMake}>
            <BiChevronDown size={32} />
          </IconWrapper>
        </div>
        {activeMake && (
          <SelectBody>
            {makeOptions.map((make, index) => (
              <SelectItem key={index} onClick={e => handleChooseMake(e)}>
                {make}
              </SelectItem>
            ))}
          </SelectBody>
        )}
      </Select>

      <Select price={'price'}>
        Price/ 1 hour
        <div>
          <SelectInput
            placeholder="To $"
            value={filterData.price}
            readOnly
            name="price"
            onFocus={() => hanldeFocus('price')}
            type="text"
          />
          <IconWrapper active={activePrice}>
            <BiChevronDown size={32} />
          </IconWrapper>
        </div>
        {activePrice && (
          <SelectBody>
            {priceRange.map((price, index) => (
              <SelectItem key={index} onClick={e => handleChoosePrice(e)}>
                {price}
              </SelectItem>
            ))}
          </SelectBody>
        )}
      </Select>
      <MileageLabeltWrapper>
        Сar mileage / km
        <MileageInputWrapper>
          <MileageInput
            placeholder="From"
            type="text"
            name="from"
            onChange={e => handleInputChange(e)}
            value={inputValueFrom}
          />
          <MileageInput
            placeholder="To"
            name="to"
            type="text"
            onChange={e => handleInputChange(e)}
            value={inputValueTo}
          />
        </MileageInputWrapper>
      </MileageLabeltWrapper>
      <FilterSubmitBtn type="submit">Search</FilterSubmitBtn>
      {(filterData.make ||
        filterData.price ||
        filterData.from ||
        filterData.to) && (
        <ResetFormBtn type="button" onClick={resetFilter}>
          <AiOutlineClose size={32} />
        </ResetFormBtn>
      )}
    </Form>
  );
};
