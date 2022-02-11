import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
`;

export const LottieJSON = styled.View`
  width: 112px;
  height: 112px;
  margin-bottom: 32px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${props => props.theme.colors.primary};
`;
