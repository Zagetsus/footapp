import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PrimaryInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  width: 100px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const Text = styled(Name)`
  width: auto;
  font-weight: 400;
  color: ${props => props.theme.colors.textSecondary};
`;
