import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.primary};
`;

export const Text = styled.Text`
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.white};
`;
