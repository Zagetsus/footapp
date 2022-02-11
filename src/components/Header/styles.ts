import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 64px;

  margin-top: ${getStatusBarHeight(true)}px;
  margin-bottom: 36px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
`;

export const Text = styled.Text`
  font-size: 18px;
`;
