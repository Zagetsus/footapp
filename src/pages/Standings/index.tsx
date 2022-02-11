import React, {useCallback, useEffect, useState} from 'react';
import ButtonBack from '../../components/ButtonBack';
import Header from '../../components/Header';

import Trophy from '../../assets/svg/trophy.svg';
import {
  ClassificationCards,
  ClassificationTitle,
  Container,
  Content,
  TitleContainer,
  TitleRow,
  TitleSelect,
  TitleText,
} from './styles';
import StandingsCard from '../../components/StandingsCard';
import {api} from '../../services/api';
import {IStandings} from '../../interfaces/standings.interface';
import {ListRenderItem} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  INavigation,
  RootStackParamList,
} from '../../interfaces/routes.interface';
import {useLeague} from '../../hooks/useLeague';
import Select from '../../components/Select';
import Globe from '../../assets/svg/globe.svg';
import {ISeasonOptions} from '../../interfaces/season.interface';
import EmptyInfo from '../../components/EmptyInfo';
import Loading from '../../components/Loading';

type StandingsScreenRouteProp = RouteProp<RootStackParamList, 'Standings'>;

const Standings: React.FC = () => {
  const [standings, setStandings] = useState<IStandings[][]>();
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<INavigation>();
  const {
    params: {leagueId, season},
  } = useRoute<StandingsScreenRouteProp>();

  const {activeLeague, seasons} = useLeague();

  const setSeason = (item: ISeasonOptions) => {
    navigation.setParams({season: item.year});
  };

  const getStandings = useCallback(async () => {
    try {
      setLoading(true);
      const {
        data: {response},
      } = await api.get(`standings?league=${leagueId}&season=${season}`);
      setStandings(response[0].league.standings);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [leagueId, season]);

  useEffect(() => {
    getStandings();
    // eslint-disable-next-line
  }, [leagueId, season]);

  const renderItem: ListRenderItem<IStandings> = ({item}) => (
    <ClassificationCards>
      <StandingsCard data={item} />
    </ClassificationCards>
  );

  return (
    <Container>
      <Header />
      <Content
        ListHeaderComponent={
          <>
            <ButtonBack />
            <TitleContainer>
              <TitleRow>
                <Trophy />
                <TitleText>{activeLeague.name}</TitleText>
              </TitleRow>
              <TitleSelect>
                <Select
                  icon={<Globe />}
                  active={{year: season}}
                  setActive={setSeason}
                  label={'selecione'}
                  name={'year'}
                  options={seasons}
                />
              </TitleSelect>
            </TitleContainer>

            <ClassificationTitle>CLASSIFICAÇÃO</ClassificationTitle>
          </>
        }
        data={standings}
        keyExtractor={(_, key) => key.toString()}
        ListEmptyComponent={() => (
          <EmptyInfo
            subtitle={'Não  encontramos a classificação desta liga.'}
          />
        )}
        renderItem={renderItem}
      />

      <Loading show={loading} />
    </Container>
  );
};

export default Standings;
