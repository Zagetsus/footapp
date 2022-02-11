import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Content = styled.FlatList.attrs({
  numColumns: 4,
})`
  padding: 0 24px;
`;

export const FlatHeader = styled.View`
  margin-bottom: 24px;
`;

export const FilterContainer = styled.View`
  margin-bottom: 24px;
`;

export const FilterLabel = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.theme.colors.textPrimary};
`;

export const FilterSelect = styled.View`
  max-width: 257px;
  width: 100%;
`;

export const FilterRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${props => props.theme.colors.grey};
`;

export const LeagueCountryHeader = styled.View`
  align-items: center;
`;

export const LeagueTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 24px;
  color: ${props => props.theme.colors.secondary};
`;

export const Card = styled.View`
  flex-basis: 0;
  flex-grow: 1;
  margin: 0 2px 24px;
`;
