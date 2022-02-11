import React from 'react';
import Lottie from 'lottie-react-native';
import LoadingJSON from '../../assets/json/loading.json';
import {Container, LottieJSON, Text} from './styles';

interface Props {
  show: boolean;
}

const Loading: React.FC<Props> = ({show}) => {
  return (
    <>
      {show ? (
        <Container>
          <LottieJSON>
            <Lottie source={LoadingJSON} resizeMode={'contain'} autoPlay loop />
          </LottieJSON>
          <Text>Carregando...</Text>
        </Container>
      ) : null}
    </>
  );
};

export default Loading;
