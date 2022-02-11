import styled from 'styled-components/native';
import ArrowLeft from '../../assets/svg/arrow-left.svg';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 32px;
`;

export const Arrow = styled(ArrowLeft)`
  margin-right: 15px;
`;

export const Text = styled.Text`
  font-size: 18px;
  line-height: 23px;
  color: ${props => props.theme.colors.textSecondary};
`;
