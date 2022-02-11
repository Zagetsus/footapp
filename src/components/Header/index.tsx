import React from 'react';
import {Container} from './styles';
import Logo from '../../assets/svg/logo.svg'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Header;
