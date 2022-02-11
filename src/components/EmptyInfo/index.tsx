import React from 'react';
import Lottie from 'lottie-react-native';
import Empty from '../../assets/json/empty-state.json';
import {Container, Content, LottieContent, Subtitle, Title} from './styles';

interface Props {
  title?: string;
  subtitle?: string;
};

const EmptyInfo: React.FC<Props> = ({title, subtitle}) => {
  return (
    <Container>
      <Content>
        <LottieContent>
          <Lottie source={Empty} autoPlay loop />
        </LottieContent>
        <Title>{title || 'Ops!'}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </Container>
  );
};

export default EmptyInfo;
