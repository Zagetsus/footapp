import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  width: 165px;
  align-items: center;
`;

export const LottieContent = styled.View`
  width: 126px;
  height: 126px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${props => props.theme.colors.secondary};
`;

export const Subtitle = styled(Title)`
  font-size: 14px;
  line-height: 17px;
  color: ${props => props.theme.colors.textPrimary};
`;
