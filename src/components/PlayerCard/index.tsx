import React from 'react';
import { Container, Image, Name, PrimaryInfo, Text } from "./styles";

interface Props {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

const PlayerCard: React.FC<Props> = ({name, number, position, photo}) => {
  return (
    <Container>
      <PrimaryInfo>
        <Image source={{uri: photo}} />
        <Name numberOfLines={1}>{name}</Name>
      </PrimaryInfo>
      <Text>{position}</Text>
      <Text>{number}</Text>
    </Container>
  );
};

export default PlayerCard;
