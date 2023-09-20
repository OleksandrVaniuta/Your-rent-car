import { useLocation } from 'react-router-dom';

import {
  NavContainerList,
  NaviationLink,
  NavContainerItem,
} from './Navigation.styled';
import { BiHome, BiHeart, BiFoodMenu } from 'react-icons/bi';

const NavData = [
  { el: <BiHome size={32} />, nav: '/' },
  { el: <BiFoodMenu size={32} />, nav: '/catalog' },
  { el: <BiHeart size={32} />, nav: '/favorites' },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <NavContainerList location={location.pathname}>
      {NavData.map((item, index) => (
        <NavContainerItem key={index}>
          <NaviationLink to={item.nav}>{item.el}</NaviationLink>
        </NavContainerItem>
      ))}
    </NavContainerList>
  );
};