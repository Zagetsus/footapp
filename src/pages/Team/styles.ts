import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin: 0 auto 52px;
`;

export const Content = styled.FlatList`
  padding: 0 24px;
`;

export const NameTeam = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 31px;
  margin-bottom: 24px;

  color: ${props => props.theme.colors.textPrimary};
`;

export const InfoSection = styled.View`
  margin-bottom: 32px;
`;

export const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const InfoTitle = styled.Text`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  color: ${props => props.theme.colors.textPrimary};
  width: 95px;
  margin-right: 32px;
`;

export const InfoText = styled.Text`
  flex: 1;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.colors.textSecondary};
`;

export const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.secondary};
`;

export const Divider = styled.View`
  flex-direction: row;
  height: 1px;
  margin-top: 32px;
  background: ${props => props.theme.colors.grey};
`;

export const PlayersContainer = styled.View`
  margin-bottom: 12px;
`;
