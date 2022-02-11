import React from 'react';
import {View} from 'react-native';
import {
  Area,
  Header,
  HeaderTitle,
  Logo,
  Press,
  TableColumn,
  TableFirstCell,
  TableInfo,
  TableRow,
  TableText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {IStandings} from '../../interfaces/standings.interface';
import {INavigation} from '../../interfaces/routes.interface';

interface Props {
  data: IStandings[];
}

const StandingsCard: React.FC<Props> = ({data}) => {
  const navigation = useNavigation<INavigation>();

  return (
    <View>
      <Header>
        <TableFirstCell>
          <HeaderTitle numberOfLines={1} upper>
            {data[0].group}
          </HeaderTitle>
        </TableFirstCell>
        <TableInfo>
          <TableColumn>
            <HeaderTitle>Jogos</HeaderTitle>
          </TableColumn>
          <TableColumn>
            <HeaderTitle>Vitórias</HeaderTitle>
          </TableColumn>
          <TableColumn>
            <HeaderTitle>SG</HeaderTitle>
          </TableColumn>
          <TableColumn>
            <HeaderTitle>Pts</HeaderTitle>
          </TableColumn>
        </TableInfo>
      </Header>

      {data.map((item, key) => (
        <TableRow key={key}>
          <TableFirstCell>
            <Area>
              <TableText>{item.rank}</TableText>
            </Area>
            <Press
              onPress={() => navigation.navigate('Team', {id: item.team.id})}>
              <Logo resizeMode={'contain'} source={{uri: item.team.logo}} />
              <HeaderTitle>
                {item.team.name.length > 10
                  ? item.team.name.substring(0, 13 - 3) + '...'
                  : item.team.name}
              </HeaderTitle>
            </Press>
          </TableFirstCell>

          <TableInfo>
            <TableColumn>
              <TableText>{item.all.played}</TableText>
            </TableColumn>
            <TableColumn>
              <TableText>{item.all.win}</TableText>
            </TableColumn>
            <TableColumn>
              <TableText>{item.goalsDiff}</TableText>
            </TableColumn>
            <TableColumn>
              <TableText>{item.points}</TableText>
            </TableColumn>
          </TableInfo>
        </TableRow>
      ))}
    </View>
  );
};

export default StandingsCard;
