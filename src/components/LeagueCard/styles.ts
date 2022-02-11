import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  align-items: center;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: ${props => props.theme.colors.textPrimary};
`;
