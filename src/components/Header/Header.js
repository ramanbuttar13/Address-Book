import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper
} from './Header.components';
import { Text } from '@chakra-ui/react'
import theme from '../styles/theme'

const Header = () => {

  return (
    <Wrapper>
      <Link to="/"><Text color={theme.colors.white} fontSize="26px">Nuvalence</Text></Link>
    </Wrapper>
  );
};

export default Header;
