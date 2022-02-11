import React from 'react';
import {Container, Image, Text} from './styles';

interface Props {
  image: string;
  name: string;
  action: () => void;
}

const LeagueCard: React.FC<Props> = ({image, name, action}) => {
  return (
    <Container onPress={action}>
      <Image source={{uri: image}} />
      <Text numberOfLines={2}>{name}</Text>
    </Container>
  );
};

export default LeagueCard;
