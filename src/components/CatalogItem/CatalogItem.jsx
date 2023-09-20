import { useState, useEffect } from 'react';

import PopupWindow from 'components/Modal/Madal';
import MoreCarInfo from 'components/MoreInfoCar/MoreCarInfo';

import {
  ItemWrapper,
  ItemtitleWrapper,
  Itemtitle,
  DescrWrapper,
  Descr,
  LearnMoreBtn,
  LikeBtn,
} from './CatalogItem.styled';

import { FaRegHeart, FaHeart } from 'react-icons/fa';

export const CatalogItem = ({ data, setFavoriteArr, favoriteArr }) => {
  const [street, city, contry] = data.address
    .split(', ')
    .map(part => part.trim());
  const [isInFavorite, setIsInFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (favoriteArr.includes(data.id)) {
      setIsInFavorite(true);
    }
  }, [isInFavorite, data.id, favoriteArr]);

  const handleAddToFavorite = () => {
    if (favoriteArr.includes(data.id)) {
      const newFavoriteArr = favoriteArr.filter(id => id !== data.id);
      setFavoriteArr(newFavoriteArr);
      setIsInFavorite(false);
      return;
    } else {
      const newFavoriteArr = [...favoriteArr, data.id];
      setFavoriteArr(newFavoriteArr);
      setIsInFavorite(true);
    }
  };

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ItemWrapper>
      <LikeBtn type="button" onClick={handleAddToFavorite}>
        {isInFavorite ? (
          <FaHeart size={18} style={{ color: '#3470FF' }} />
        ) : (
          <FaRegHeart size={18} style={{ color: '#F3F3F2' }} />
        )}
      </LikeBtn>
      <img src={data.img} alt="car-card" />

      <ItemtitleWrapper>
        <Itemtitle>
          {data.make}
          <span> {data.model}</span>, {data.year}
        </Itemtitle>
        <Itemtitle>{data.rentalPrice}</Itemtitle>
      </ItemtitleWrapper>
      <DescrWrapper>
        <Descr>
          {[
            city,
            contry,
            data.rentalCompany,
            'Premium',
            data.type,
            data.model,
            data.id,
            data.functionalities[0],
          ].join(' | ')}
        </Descr>
      </DescrWrapper>
      <LearnMoreBtn onClick={handleLearnMore}>Learn more</LearnMoreBtn>
      {isModalOpen && (
        <PopupWindow closeModal={closeModal}>
          <MoreCarInfo
            data={data}
            city={city}
            contry={contry}
            street={street}
          />
        </PopupWindow>
      )}
    </ItemWrapper>
  );
};
