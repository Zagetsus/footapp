import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {INavigation} from '../../interfaces/routes.interface';
import {Arrow, Container, Text} from './styles';

const ButtonBack: React.FC = () => {
  const navigation = useNavigation<INavigation>();

  return (
    <Container onPress={() => navigation.goBack()}>
      <Arrow />
      <Text>Voltar</Text>
    </Container>
  );
};

export default ButtonBack;
