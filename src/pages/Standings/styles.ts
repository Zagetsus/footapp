import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background-color: ${props => props.theme.colors.white};
`;

export const Content = styled.FlatList`
  padding: 0 24px;
`;

export const PageHeader = styled.View`
  margin-bottom: 64px;
`;

export const TitleContainer = styled.View`
  margin-bottom: 48px;
`;

export const TitleRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const TitleText = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-left: 12px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const TitleSelect = styled.View`
  max-width: 257px;
`;

export const ClassificationTitle = styled(TitleText)`
  margin-bottom: 30px;
  margin-left: 0;
`;

export const ClassificationCards = styled.View`
  margin-bottom: 48px;
`;
